<template lang='pug'>
q-input(
  ref='base-input'
  rounded
  outlined
  v-model='value'
  :type='type'
  @keyup.esc='value=""'
  :rules='rules'
  :input-class='inputClass'
  :hide-bottom-space='hideBottomSpace'
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
    },
    rules: {
      type: Array,
      default: () => []
    },
    inputClass: {
      type: String,
      default: ''
    },
    hideBottomSpace: {
      type: Boolean,
      default: false
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
  },
  methods: {
    focus () {
      this.$refs['base-input'].focus()
    }
  }
}
</script>
