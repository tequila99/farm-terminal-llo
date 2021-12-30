<template lang='pug'>
CommonInput(
  v-model='search'
  ref='common-input'
  hide-bottom-space
  input-class='q=mx-sm'
  @keyup.esc='search=""'
  @keyup.enter='handleSearch'
)
  template(#prepend)
    SearchIcon(:color='color')
  template(#append)
    CloseIcon.cursor-pointer(
      v-if='search'
      :color='color'
      @click='handleClear'
    )
</template>

<script>
import { v4 } from 'uuid'
import CommonInput from 'components/inputs/CommonInput.vue'
import SearchIcon from 'components/icons/SearchIcon.vue'
import CloseIcon from 'components/icons/CloseIcon.vue'
export default {
  name: 'Search',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    path () {
      return this.$route.path
    }
  },
  methods: {
    focus () {
      this.$refs['common-input'].focus()
    },
    handleClear () {
      this.search = ''
      this.handleSearch()
    },
    handleSearch () {
      this.$router.replace({
        path: this.path,
        query: { q: this.search, _: v4() }
      })
    }
  },
  components: { CommonInput, SearchIcon, CloseIcon }
}
</script>

<style lang='scss' scoped>
</style>
