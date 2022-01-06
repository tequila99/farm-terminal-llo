<template lang='pug'>
PdfView(:uuid='uuid')
</template>

<script>
import PdfView from 'components/views/PdfView'
export default {
  name: 'PdfTab',
  props: {
    uuid: {
      type: String,
      default: ''
    }
  },
  components: { PdfView }
}
</script>
