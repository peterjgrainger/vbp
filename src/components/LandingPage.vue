<template>

  <div class="hello">
    <div class="ui stackable three column centered grid">
        <div class="column">
          <ImFeelingConfident class="image"/><br>
          <button><h2>create your plan</h2></button>
        </div>
    </div>
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

@keyframes waggle {
  0% {
    transform: none;
  }
  50% {
    transform: rotateZ(-20deg) scale(1.2);
  }
  60% {
    transform: rotateZ(25deg) scale(1.2);
  }
  67.5% {
    transform: rotateZ(-15deg) scale(1.2);
  }
  75% {
    transform: rotateZ(15deg) scale(1.2);
  }
  82.5% {
    transform: rotateZ(-12deg) scale(1.2);
  }
  85% {
    transform: rotateZ(0) scale(1.2);
  }
  100% {
    transform: rotateZ(0) scale(1);
  }
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
  animation: waggle 2s 1s forwards ease-out 1;
  font-size: 1.1rem
}

button:active {
  border-color: #aaa;
}

button:focus {
  outline: none;
}

</style>
