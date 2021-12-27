<template lang='pug'>
CommonInput(
  ref='common-input'
  :modelValue='modelValue'
  @update:modelValue='$emit("update:modelValue", $event)'
  :rules='[val => !!val || "Поле ввода имени пользователя не должно быть пустым"]'
  )
  template(#prepend)
    PersonIcon(:color='color')
  template(#append)
    CloseIcon.cursor-pointer(
      v-if='modelValue'
      :color='color'
      @click='$emit("update:modelValue","")'
    )
</template>

<script>
import CommonInput from 'components/inputs/CommonInput.vue'
import PersonIcon from 'components/icons/PersonIcon.vue'
import CloseIcon from 'components/icons/CloseIcon.vue'
export default {
  name: 'UserName',
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
  emits: ['update:modelValue'],
  methods: {
    focus () {
      this.$refs['common-input'].focus()
    }
  },
  components: { CloseIcon, PersonIcon, CommonInput }
}
</script>
