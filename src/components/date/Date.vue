<template>
  <section class="date">
    <h1>Date</h1>

    <div class="date-time">{{ time }}</div>
    <div class="date-day">{{ week }}, {{ day }} de {{ month }}</div>

    <h2>Frase do dia</h2>
    <button v-on:click="luckRandomChange">Descubra</button>
    <div class="luck">{{ luck[luckRandom] }}</div>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Date',
  computed: {
    ...mapState('Date', ['luck', 'luckRandom']),
    ...mapGetters('Date', ['time', 'day', 'week', 'month'])
  },
  methods: {
    changeDateValue() {
      this.$store.commit('Date/changeDate');
    },
    luckRandomChange() {
      this.$store.commit('Date/luckRandomChange');
    }
  },
  created() {
    setInterval(this.changeDateValue, 1000)
  }
  
}
</script>

<style scoped lang="scss">
  .date {
    div {
      color: #FFF;
    }
  }
</style>
