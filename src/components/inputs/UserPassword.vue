<template lang='pug'>
CommonInput(
  ref='common-input'
  :modelValue='modelValue'
  :type='showPwd ? "text" : "password"'
  @update:modelValue='$emit("update:modelValue", $event)'
  :rules='[val => !!val || "Поле ввода пароля не должно быть пустым"]'
  )
  template(#prepend)
    LockIcon(:color='color')
  template(#append)
    .cursor-pointer(@click='showPwd=!showPwd')
      EyeIcon(v-if='showPwd' :color='color')
      EyeSlashIcon(v-else :color='color')

</template>

<script>
import CommonInput from 'components/inputs/CommonInput.vue'
import LockIcon from 'components/icons/LockIcon.vue'
import EyeIcon from 'components/icons/EyeIcon.vue'
import EyeSlashIcon from 'components/icons/EyeSlashIcon.vue'

export default {
  name: 'UserPassword',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      showPwd: false
    }
  },
  methods: {
    focus () {
      this.$refs['common-input'].focus()
    }
  },
  components: { CommonInput, LockIcon, EyeIcon, EyeSlashIcon }
}
</script>
