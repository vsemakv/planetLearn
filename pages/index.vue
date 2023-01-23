<template lang="pug">
  .page
    .container 
      VHeader
      VHero
      VPopup
</template> 

<script>
import VHeader from '@/components/VHeader.vue';
import VPopup from '../components/VPopup.vue';
import VHero from '@/components/VHero.vue';

export default {
  components: {
    VHeader,
    VHero,
    VPopup,
  },
}
</script>

<style lang="scss" scoped>
.page { 
  background-color: rgba(255,255,255, 0.95);
  background-size: cover;
  height: max-content;
  min-height: 100vh;
}
</style>