<template lang='pug'>
q-header.bg-white
  q-toolbar.text-primary.q-px-xl.q-mt-sm
    q-input.q-mx-auto(
      v-model='search'
      rounded
      outlined
      style='width: 100%; max-width: 789px;'
      hide-bottom-space
      input-class='q-mx-sm'
      @keyup.esc='search=""'
      @keyup.enter='$emit("search", search)'
      )
      template(#prepend)
        search-icon(color='primary')
      template(#append)
        close-icon.cursor-pointer(v-if='search' @click='search=""' color='primary')
</template>

<script>
import SearchIcon from 'components/icons/SearchIcon.vue'
import CloseIcon from 'components/icons/CloseIcon.vue'
export default {
  name: 'MainHeader',
  data () {
    return {
      search: ''
    }
  },
  components: {
    SearchIcon, CloseIcon
  }
}
</script>
