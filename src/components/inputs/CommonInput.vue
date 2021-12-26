<template lang='pug'>
q-input(
  rounded
  outlined
  v-model='value'
  :type='type'
  @keyup.esc='value=""'
  )
  template(#prepend)
    slot(name='prepend')
  template(#append)
    slot(name='append')
</template>

<script>
export default {
  name: 'CommonInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
