<template lang='pug'>
MenuButton
  q-menu(fit)
    .column.q-ma-md
      .text-h6.text-center.q-mb-sm.text-primary Настройки
      q-separator.q-mb-sm
      q-toggle.text-subtitle1(v-model='darkMode' label='Тема оформления')
      q-toggle.text-subtitle1(v-model='fullScreen' label='Режим отображения')
</template>

<script>
import MenuButton from 'src/components/buttons/MenuButton.vue'
export default {
  name: 'MainMenu',
  computed: {
    darkMode: {
      get () {
        return this.$q.dark.isActive
      },
      set (val) {
        this.$q.dark.set(val)
      }
    },
    fullScreen: {
      get () {
        return this.$q.fullscreen.isActive
      },
      set (val) {
        if (val) {
          this.$q.fullscreen.request().catch(err => console.error(err))
        } else {
          this.$q.fullscreen.exit().catch(err => console.error(err))
        }
      }
    }
  },
  components: { MenuButton }
}
</script>
