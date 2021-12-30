<template lang='pug'>
MenuButton
  q-menu(fit)
    .column.q-ma-md
      .text-h6.text-center.q-mb-sm.text-primary.relative Настройки
      .absolute-top-right
        q-btn(flat round size='sm' v-close-popup)
          CloseIcon
          q-tooltip Закрыть меню
      q-separator.q-mb-sm
      q-toggle.text-subtitle1(v-model='darkMode' label='Тема оформления')
      q-toggle.text-subtitle1(v-model='fullScreen' label='Режим отображения')
  q-tooltip Меню настроек программы
</template>

<script>
import MenuButton from 'components/buttons/MenuButton.vue'
import CloseIcon from 'components/icons/CloseIcon.vue'
export default {
  name: 'MainMenu',
  data () {
    return {
      visible: false
    }
  },
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
  components: { MenuButton, CloseIcon }
}
</script>
