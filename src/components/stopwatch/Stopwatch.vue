<template>
  <section class="stopwatch">
    <h1>Stopwatch</h1>
    <div class="stopwatch__time" :class="{ active: active }">
      <div class="stopwatch__content">
        <span class="stopwatch__int">{{ timeInt }}</span>
        <span class="stopwatch__dec">.{{ timeDec }}</span>
      </div>
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
    ...mapMutations('Stopwatch', ['incrementTime', 'resetTime']),
    fitText() {
      const maxFontSize = 16;
      let outputDiv = document.querySelector('.stopwatch__content');
      let width = outputDiv.clientWidth;
      let contentWidth = outputDiv.scrollWidth;
      let fontSize = parseInt(window.getComputedStyle(outputDiv, null).getPropertyValue('font-size'),10);

      if (contentWidth > width){
        fontSize = Math.ceil(fontSize * width/contentWidth,10);
        fontSize =  fontSize > maxFontSize  ? fontSize = maxFontSize  : fontSize - 1;
        outputDiv.style.fontSize = fontSize+'px';   
      } else {
        while (contentWidth === width && fontSize < maxFontSize) {
          fontSize = Math.ceil(fontSize) + 1;
          fontSize = fontSize > maxFontSize  ? fontSize = maxFontSize  : fontSize;
          outputDiv.style.fontSize = fontSize+'px';   
      
          width = outputDiv.clientWidth;
          contentWidth = outputDiv.scrollWidth;
          if (contentWidth > width){
            outputDiv.style.fontSize = fontSize-1+'px'; 
          }
        }
      }
    }
  },
  watch: {
    timeDec() {
      this.fitText();
    }
  },
  beforeDestroy() {
    this.resetTime();
  }
}
</script>

<style scoped lang="scss">
  .stopwatch {
    text-align: center;
    &__time {
      align-self: center;
      border: 0.2rem solid var(--back2);
      border-radius: 1000rem;
      margin-bottom: 2.5rem;
      margin-top: 0.5rem;
      padding: 1.5rem;
      &.active {
        border: 0.2rem solid var(--display);
      }
    }
    &__content {
      width: 10rem;
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      color: var(--display);
    }
    &__int {
      font-family: 'Roboto Mono', monospace;
      font-size: 5em;
      font-weight: 400;
      white-space: nowrap;
    }
    &__dec {
      font-family: 'Roboto Mono', monospace;
      font-size: 2.5em;
      font-weight: 600;
      position: relative;
      top: 0.35em;
      white-space: nowrap;
    }
    &__button {
      display: flex;
      justify-content: center;
      button:first-of-type {
        margin-right: 1rem;
        span {
          background-color: var(--display);
          color: #FFFFFF;
        }
      }
      button:last-of-type {
        font-size: 0.6em;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--text1);
        background-color: var(--back2);
        padding: 0.5rem 1.2rem;
        border-radius: 1000rem;
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
