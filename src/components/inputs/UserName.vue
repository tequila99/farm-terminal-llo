<template lang='pug'>
CommonInput(
  :modelValue='modelValue'
  @update:modelValue='$emit("update:modelValue", $event)'
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
  components: { CloseIcon, PersonIcon, CommonInput }
}
</script>
