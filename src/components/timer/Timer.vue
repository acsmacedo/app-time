<template>
  <section class="timer">
    <h1>Timer</h1>
    <input type="number" v-on:input="changeTimer">
    
    <div>
      
      <div>Marcador</div>
      <div>{{timeNumbers}}</div>
      <button v-on:click="incrementTimer">{{active ? '+1:00' : 'zerar'}}</button>
      <button v-on:click="decrementTimer">{{active ? 'pausar' : 'play'}}</button>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Timer',
  computed: {
    ...mapState('Timer', ['active']),
    ...mapGetters('Timer', ['timeNumbers'])
  },
  methods: {
    ...mapMutations('Timer', ['changeTimer', 'decrementTimer', 'incrementTimer'])
  }
}
</script>

<style scoped lang="scss">

</style>
