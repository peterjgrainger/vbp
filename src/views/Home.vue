<template>
  <div class="home">
    
    <LandingPage/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LandingPage from '@/components/LandingPage.vue';

@Component({
  components: {
    LandingPage,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.pic {
  padding: 10%
}
</style>
