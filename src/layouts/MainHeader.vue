<template lang='pug'>
q-header.relative(:style='{"background-color": isDark ? "#121212" : "#ffffff"}')
  q-toolbar.q-px-xl.q-py-sm.text-primary
    .row(style='width:132px;min-width:132px;')
      MainAvatar
    Search.q-mx-auto(style='width: 100%; max-width: 789px;')
    .row(style='width:132px;min-width:132px;')
      MainMenu
      SignOutButton
  .column.absolute-top-right.q-pa-sm
    DisposalIcon.q-mb-sm(size='1.4rem')
    ScannerIcon(size='1.4rem')
</template>

<script>
import DisposalIcon from 'components/icons/DisposaIcon.vue'
import ScannerIcon from 'components//icons/ScannerIcon.vue'
import MainMenu from 'components/menus/MainMenu.vue'
import SignOutButton from 'components/buttons/SignOutButton.vue'
import MainAvatar from 'components/avatars/MainAvatar.vue'
import Search from 'components/inputs/Search.vue'
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
    MainMenu, SignOutButton, MainAvatar, DisposalIcon, ScannerIcon, Search
  }
}
</script>
