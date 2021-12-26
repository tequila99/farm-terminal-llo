<template lang='pug'>
q-layout view='lHh Lpr lFf'
  MainHeader
  q-page-container
    router-view
</template>

<script>
import MainHeader from './MainHeader.vue'
export default {
  name: 'MainLayout',
  components: { MainHeader }
}
</script>
