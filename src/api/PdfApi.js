import Pdf from 'vue3-pdf'
import { RECIPE_API_URL } from 'src/helpers/config'

export default class PdfApi {
  constructor (transportApi) {
    if (PdfApi.instance) return PdfApi.instance
    this.transportApi = transportApi
    PdfApi.instance = this
  }

  get token () {
    return this.transportApi.token
  }

  loadingPdf (uuid) {
    return Pdf.createLoadingTask({
      url: `${RECIPE_API_URL}${uuid}`,
      httpHeaders: {
        Accept: 'application/pdf',
        Authorization: `Bearer ${this.token}`
      }
    })
  }
}
