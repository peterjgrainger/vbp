<template>
    
  <div class="hello">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <ImFeelingConfident class="image"/><br>
        <router-link to="question/feelings">
          <button><h2>create your plan</h2></button>
        </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ImFeelingConfident from '@/assets/birth-plan-svgs/im-feeling-confident.vue';


@Component({
  components: {
    ImFeelingConfident,
  },
})
export default class LandingPage extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

.image {
  max-width: 400px
}

button {
  background: #42b983;
  border: 6px solid #eee;
  border-radius: 1em;
  color: #fff;
  font-size: 24px;
  padding: 0.5em 1em;
  margin: 0.25em 0;
  min-width: 7em;
  font-size: 1.1rem
}

button:active {
  border-color: #aaa;
}

button:focus {
  outline: none;
}

</style>
