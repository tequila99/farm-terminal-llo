<template lang='pug'>
q-btn(rounded unelevated :color='color' :padding='padding')
  template(#default)
    slot(name='default')
</template>

<script>
export default {
  name: 'CommonButton',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    padding: {
      type: String,
      default: '12px'
    }
  }
}
</script>
