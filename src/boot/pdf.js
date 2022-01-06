import { boot } from 'quasar/wrappers'
import PdfApi from 'src/api/PdfApi'
import TransportApi from 'src/api/TransportApi'
import { pdfSymbol } from 'src/api/dependency'

export default boot(async ({ app }) => {
  app.provide(pdfSymbol, new PdfApi(new TransportApi()))
})
