<template lang='pug'>
q-btn(flat round)
  MenuIcon
  slot(name='default')
</template>

<script>
import MenuIcon from 'components/icons/MenuButton.vue'
export default {
  name: 'MenuButton',
  components: { MenuIcon }
}
</script>
