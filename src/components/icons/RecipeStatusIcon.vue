<template lang='pug'>
q-icon(:color='color')
  <svg v-if='status === 1' aria-hidden="true" focusable="false" data-prefix="far" data-icon="file" class="svg-inline--fa fa-file" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M365.3 93.38l-74.63-74.64C278.6 6.743 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.35 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM320 464H64.02c-8.836 0-15.1-7.163-16-15.1L48 64.13c-.0004-8.837 7.163-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1v288C336 456.8 328.8 464 320 464z"></path></svg>
  <svg v-else-if='status === 1' aria-hidden="true" focusable="false" data-prefix="far" data-icon="check" class="svg-inline--fa fa-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480.1 128.1l-272 272C204.3 405.7 198.2 408 192 408s-12.28-2.344-16.97-7.031l-144-144c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L192 350.1l255-255c9.375-9.375 24.56-9.375 33.94 0S490.3 119.6 480.1 128.1z"></path></svg>
  <svg v-else-if='status === 2' aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock-rotate-left" class="svg-inline--fa fa-clock-rotate-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C203.8 512 155.2 496.4 114.7 469.5C103.7 462.2 100.7 447.3 107.1 436.3C115.3 425.2 130.2 422.2 141.3 429.5C174.1 451.3 213.5 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C182.4 48 117.7 86.24 80.69 144H136C149.3 144 160 154.7 160 168C160 181.3 149.3 192 136 192H24C10.75 192 0 181.3 0 168V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V106.7C94.45 42.12 170.3 0 256 0H256zM256 128C269.3 128 280 138.7 280 152V246.1L344.1 311C354.3 320.4 354.3 335.6 344.1 344.1C335.6 354.3 320.4 354.3 311 344.1L239 272.1C234.5 268.5 232 262.4 232 256V152C232 138.7 242.7 128 256 128V128z"></path></svg>
  <svg v-else-if='status === 3' aria-hidden="true" focusable="false" data-prefix="far" data-icon="ban" class="svg-inline--fa fa-ban" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM48 256c0-48.71 16.95-93.47 45.11-128.1l291.9 291.9C349.5 447 304.7 464 256 464C141.3 464 48 370.7 48 256zM418.9 384.1L127 93.11C162.5 64.95 207.3 48 256 48c114.7 0 208 93.31 208 208C464 304.7 447 349.5 418.9 384.1z"></path></svg>
  <svg v-else-if='status === 4' aria-hidden="true" focusable="false" data-prefix="fat" data-icon="triangle-exclamation" class="svg-inline--fa fa-triangle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 320c4.406 0 8.013-3.594 8.013-8v-160c0-4.406-3.607-8-8.013-8c-4.406 0-7.987 3.594-7.987 8v160C248 316.4 251.6 320 256 320zM506.3 417l-213.3-364C284.8 39 270.4 32 256 32C241.7 32 227.2 39 218.1 53l-213.2 364C-10.62 444.9 9.848 480 42.74 480h426.6C502 480 522.7 445 506.3 417zM492.6 450.7C487.8 459 479.1 464 469.3 464H42.73c-9.789 0-18.49-4.982-23.27-13.33c-4.678-8.162-4.641-17.49 .1035-25.58L232.8 61.1C237.6 52.9 246.3 48 256 48c9.699 0 18.34 4.887 23.14 13.09l213.3 364C497.2 433.2 497.2 442.5 492.6 450.7zM256.1 368c-8.822 0-16 7.178-16 16s7.138 16 15.96 16c8.822 0 16.04-7.178 16.04-16S264.9 368 256.1 368z"></path></svg>
  <svg v-else aria-hidden="true" focusable="false" data-prefix="fat" data-icon="triangle-exclamation" class="svg-inline--fa fa-triangle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 320c4.406 0 8.013-3.594 8.013-8v-160c0-4.406-3.607-8-8.013-8c-4.406 0-7.987 3.594-7.987 8v160C248 316.4 251.6 320 256 320zM506.3 417l-213.3-364C284.8 39 270.4 32 256 32C241.7 32 227.2 39 218.1 53l-213.2 364C-10.62 444.9 9.848 480 42.74 480h426.6C502 480 522.7 445 506.3 417zM492.6 450.7C487.8 459 479.1 464 469.3 464H42.73c-9.789 0-18.49-4.982-23.27-13.33c-4.678-8.162-4.641-17.49 .1035-25.58L232.8 61.1C237.6 52.9 246.3 48 256 48c9.699 0 18.34 4.887 23.14 13.09l213.3 364C497.2 433.2 497.2 442.5 492.6 450.7zM256.1 368c-8.822 0-16 7.178-16 16s7.138 16 15.96 16c8.822 0 16.04-7.178 16.04-16S264.9 368 256.1 368z"></path></svg>
</template>

<script>
export default {
  name: 'RecipeStatusIcon',
  props: {
    status: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {

    }
  },
  watch: {},
  computed: {
    color () {
      if (this.status === 1) return 'grey-5'
      if (this.status === 2) return 'primary'
      if (this.status === 3) return 'grey'
      if (this.status === 4) return 'red'
      return 'negative'
    }
  },
  methods: {},
  created () {},
  mounted () {},
  components: {}
}
</script>

<style lang='scss' scoped>
</style>
