<template>
  <section class="stopwatch">
    <h1>Stopwatch</h1>
    <div class="stopwatch__time">
      <span class="stopwatch__int">{{ timeRoundedInt }}</span>
      <span class="stopwatch__dec">.{{ timeRoundedDec }}</span>
    </div>
    <div class="stopwatch__button">
      <button v-on:click="incrementTime">
        <span v-if="!active"><i class="las la-play"></i></span>
        <span v-else><i class="las la-pause" ></i></span>
      </button>
      <button v-on:click="zerarTime">Reset</button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: 'Stopwatch',
  computed: {
    ...mapState('Stopwatch', ['active']),
    ...mapGetters('Stopwatch', ['timeRoundedInt', 'timeRoundedDec'])
  },
  methods: {
    ...mapMutations('Stopwatch', ['incrementTime', 'zerarTime'])
  }
}
</script>

<style scoped lang="scss">
  .stopwatch {
    text-align: center;
    &__time {
      width: 10rem;
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--display);
      border: 0.2rem solid var(--back2);
      border-radius: 1000rem;
      align-self: center;
      margin-bottom: 2rem;
    }
    &__int {
      font-size: 4em;
      font-variant-numeric: tabular-nums;
    }
    &__dec {
      font-size: 2em;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
      position: relative;
      top: 0.5rem;
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
      }
      span {
        width: 3em;
        height: 3em;
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
