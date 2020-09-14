<template>
  <section class="timer">
    <h1>Timer</h1>
    <input type="number" v-on:input="changeTimer" placeholder="Informe o tempo em segundos">
    <div class="timer__value">{{ timeNumbers }}</div>
    <div class="timer__button">
      <button v-on:click="decrementTimer">
        <span v-if="!active"><i class="las la-play"></i></span>
        <span v-else><i class="las la-pause" ></i></span>
      </button>
      <button v-on:click="incrementTimer" :class="{ active: active }">{{active ? '+1:00' : 'reset'}}</button>
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
    ...mapMutations('Timer', ['changeTimer', 'decrementTimer', 'incrementTimer', 'cleanerTimer'])
  },
  beforeDestroy() {
    this.cleanerTimer();
  }
}
</script>

<style scoped lang="scss">
  .timer {
    text-align: center;
    input {
      background-color: transparent;
      border: none;
      outline: none;
      padding-bottom: 0.5rem;
      border-bottom: 0.0625rem solid var(--back2);
      margin-bottom: 2rem;
      color: var(--text1);
      font-weight: 300;
      font-size: 1em;
      letter-spacing: 0.05em;
      text-align: center;
    }
    &__value {
      width: 12rem;
      height: 12rem;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      color: var(--display);
      border: 0.2rem solid var(--back2);
      border-radius: 1000rem;
      margin-bottom: 2rem;
      font-size: 4em;
      font-variant-numeric: tabular-nums;
      &.set-m {
        font-size: 2.2em;
      }
      &.set-h {
        font-size: 1.6em;
      }
      &.set-d {
        font-size: 1.2em;
      }
    }
    &__button {
      display: flex;
      justify-content: center;
      button {
        background-color: transparent;
        padding: 0;
        margin: 0;
        border: 0;
        outline: 0;
      }
      button:first-of-type {
        margin-right: 1rem;
        span {
          background-color: var(--display);
          color: var(--text1);
        }
      }
      button:last-of-type {
        text-transform: uppercase;
        color: var(--text1);
        background-color: var(--back2);
        padding: 0.5rem 1.2rem;
        border-radius: 1000rem;
        letter-spacing: 0.2em;
        font-size: 0.6em;
        &.active {
          letter-spacing: 0;
        }
      }
      span {
        width: 3.5em;
        height: 3.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
      i {
        font-size: 2em;
      }
    }
  }
</style>
