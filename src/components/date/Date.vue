<template>
  <section class="date">
    <h1>Date</h1>
    <div class="date__time">{{ time }}</div>
    <div class="date__day">{{ week }}, {{ day }} de {{ month }}</div>
    <button v-on:click="luckRandomChange">Sorte do dia</button>
    <div class="date__luck">{{ luck[luckRandom] }}</div>
  </section>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: 'Date',
  computed: {
    ...mapState('Date', ['luck', 'luckRandom']),
    ...mapGetters('Date', ['time', 'day', 'week', 'month'])
  },
  methods: {
    ...mapMutations('Date', ['luckRandomChange', 'changeDate'])
  },
  created() {
    setInterval(this.changeDate, 1000)
  }
}
</script>

<style scoped lang="scss">
  .date {
    text-align: center;
    color: var(--text2);
    &__time {
      font-size: 3.2em;
      font-variant-numeric: tabular-nums;
      letter-spacing: 0.05em;
      color: var(--display);
    }
    &__day {
      font-size: 1.5em;
    }
    &__luck {
      font-weight: 300;
      line-height: 1.5em;
      letter-spacing: 0.02em;
      padding: 0 3rem;
      position: relative;
      display: none;
      &::before, &::after {
        font-size: 7em;
        color: var(--back2);
        position: absolute;
      }
      &::before {
        content: '\201C';
        top: 1.5rem; 
        left: 0;
      }
      &::after {
        content: '\201D';
        bottom: -2rem;
        right: 0;
      }
    }
    button {
      font-size: 0.7em;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin: 3rem 0 1rem 0;
      padding: 0.5rem 1rem;
      align-self: center;
      color: var(--display);
      background-color: transparent;
      border: 0.0625rem solid var(--display);
      outline: none;
      &:hover {
        color: var(--text1);
        background-color: var(--display);
      }
    }
  }
</style>
