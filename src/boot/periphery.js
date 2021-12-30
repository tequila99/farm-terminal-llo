import { boot } from 'quasar/wrappers'
import io from 'socket.io-client'
import { reactive } from 'vue'
import Logger from 'src/helpers/Logger'
import { barcodeSymbol } from 'src/api/dependency'

const PERIPHERY_URL = 'http://127.0.0.1:3030'
const logger = new Logger()

const barcode = reactive({
  mdlpPack: null,
  sscc: null,
  lloPrescription: null,
  ean13: null,
  statusScanner: null,
  statusConnect: null
})

export default boot(async ({ app }) => {
  app.provide(barcodeSymbol, barcode)
  const socket = io(PERIPHERY_URL, {
    withCredentials: false
  })
  socket.on('connect', () => {
    barcode.statusConnect = true
    logger.debug(`Установлена свзяь с программой для работы с периферийными устройствами через соект с ID ${socket.id}`)
    socket.on('mdlp_pack', data => {
      logger.debug(`Прочитана маркировка потребительской упаковки лекарственного средства с SGTIN: ${data.sgtin}`)
      barcode.mdlpPack = data
    })
    socket.on('sscc', data => {
      logger.debug(`прочитана транспортная упаковка с SSCC: ${data.sscc}`)
      barcode.sscc = data
    })
    socket.on('llo_prescrition', data => {
      logger.debug(`Прочитан рецепт на льготное лекарственное обеспечение с номером: ${data.number}`)
      barcode.lloPrescription = data
    })
    socket.on('ean13', data => {
      logger.debug(`Прочитан код EAN13 ${data.ean13} с упаковки`)
      barcode.ean13 = data
    })
    socket.on('status_barcode_scanner', data => {
      barcode.statusScanner = data
      logger.debug(`Сканер ШК ${data ? 'подключен' : 'отключен'}`)
    })
  })
  socket.on('disconnect', () => {
    [
      'mdlp_pack',
      'sscc',
      'llo_prescrition',
      'ean13',
      'status_barcode_scanner'
    ].forEach(el => socket.off(el))
    barcode.statusConnect = false
    logger.debug('Потеряна свзяь с программой для работы с периферийными устройствами')
  })
})
