<template>
  <div class="stopwatch">
    <h1>Stopwatch</h1>
    <div class="time">{{ timeRounded }}</div>
    <div>
      <button v-on:click="play">{{active ? 'pausar' : 'play' }}</button>
      <button v-on:click="zerar">zerar</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Stopwatch',
  computed: {
    ...mapState('Stopwatch', ['active']),
    ...mapGetters('Stopwatch', ['timeRounded'])
  },
  methods: {
    play() {
      this.$store.commit('Stopwatch/incrementTime');
    },
    zerar() {
      this.$store.commit('Stopwatch/zerarTime');
    }
  }
}
</script>

<style scoped lang="scss">
  .stopwatch {

  }
</style>
