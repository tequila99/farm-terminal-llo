<template lang='pug'>
span(:class='color')
  slot(name='default')
</template>

<script>
export default {
  name: 'RecipeStatusLabel',
  props: {
    status: {
      type: Number,
      default: 0
    }
  },
  computed: {
    color () {
      if (this.status === 1) return 'text-grey-5'
      if (this.status === 2) return 'text-primary'
      if (this.status === 3) return 'text-grey'
      if (this.status === 4) return 'text-red'
      return 'negative'
    }
  }
}
</script>
