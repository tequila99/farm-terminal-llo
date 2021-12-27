<template lang='pug'>
q-header(:style='{"background-color": isDark ? "#121212" : "#ffffff"}')
  q-toolbar.q-px-xl.q-py-sm.text-primary
    .row.align-center(style='width:132px;min-width:132px;height:100%')
      MainAvatar
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
        SearchIcon(color='primary')
      template(#append)
        CloseIcon.cursor-pointer(v-if='search' @click='search=""' color='primary')
    .row.justify-end(style='width:132px;min-width:132px;')
      MainMenu
      SignOutButton
</template>

<script>
import SearchIcon from 'components/icons/SearchIcon.vue'
import CloseIcon from 'components/icons/CloseIcon.vue'
import MainMenu from 'components/menus/MainMenu.vue'
import SignOutButton from 'components/buttons/SignOutButton.vue'
import MainAvatar from 'components/avatars/MainAvatar.vue'
export default {
  name: 'MainHeader',
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    isDark () {
      return this.$q.dark.isActive
    }
  },
  components: {
    SearchIcon, CloseIcon, MainMenu, SignOutButton, MainAvatar
  }
}
</script>
