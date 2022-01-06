<template lang='pug'>
Pdf.q-px-xl(
  :src='src'
  :page='1'
)
</template>

<script>
import Pdf from 'vue3-pdf'
import { pdfSymbol } from 'src/api/dependency'
export default {
  name: 'PdfView',
  inject: { pdf: pdfSymbol },
  props: {
    uuid: {
      type: String,
      default: ''
    }
  },
  watch: {
    uuid: {
      handler (value) {
        if (!value) return
        this.src = this.pdf.loadingPdf(value)
      },
      immediate: true
    }
  },
  data () {
    return {
      src: null
    }
  },
  components: { Pdf }
}
</script>
