<template>
  <section class="stopwatch">
    <h1>Stopwatch</h1>
    <div class="stopwatch__time">
      <span class="stopwatch__int">{{ timeInt }}</span>
      <span class="stopwatch__dec">.{{ timeDec }}</span>
    </div>
    <div class="stopwatch__button">
      <button v-on:click="incrementTime">
        <span v-if="!active"><i class="las la-play"></i></span>
        <span v-else><i class="las la-pause" ></i></span>
      </button>
      <button v-on:click="resetTime">Reset</button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: 'Stopwatch',
  computed: {
    ...mapState('Stopwatch', ['active']),
    ...mapGetters('Stopwatch', ['timeInt', 'timeDec'])
  },
  methods: {
    ...mapMutations('Stopwatch', ['incrementTime', 'resetTime', 'cleanerTime'])
  },
  beforeDestroy() {
    this.cleanerTime();
  }
}
</script>

<style scoped lang="scss">
  .stopwatch {
    text-align: center;
    &__time {
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
    &__time.set-m {
      .stopwatch__int {
        font-size: 2.5em;
      }
      .stopwatch__dec {
        font-size: 1.5em;
        top: 0.4rem;
      }
    }
    &__time.set-h {
      .stopwatch__int {
        font-size: 2em;
      }
      .stopwatch__dec {
        font-size: 1em;
        top: 0.3rem;
      }
    }
    &__time.set-d {
      .stopwatch__int {
        font-size: 1.5em;
      }
      .stopwatch__dec {
        font-size: 0.8em;
        top: 0.3rem;
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
