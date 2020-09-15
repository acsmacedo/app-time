<template>
  <section class="timer">
    <h1>Timer</h1>
    <input type="number" v-on:input="changeTimer" placeholder="Informe o tempo em segundos" min="0">
    <div class="timer__value" id="timer" :class="{ active: active }">
      <div class="timer__content">
        <span>{{ timeNumbers }}</span>
      </div>
    </div>
    <div class="timer__button">
      <button v-on:click="decrementTimer">
        <span v-if="!active"><i class="las la-play"></i></span>
        <span v-else><i class="las la-pause" ></i></span>
      </button>
      <button v-on:click="incrementTimer" :class="{ active: active }">{{active ? '+1:00' : 'reset'}}</button>
      <button v-on:click="soundOff" v-if="sound">
        <span><i class="las la-volume-off"></i></span>
      </button>
    </div>
    <audio id="audio" loop>
      <source src="/alarm.mp3">
    </audio>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Timer',

  computed: {
    ...mapState('Timer', ['active', 'timeInput', 'sound']),
    ...mapGetters('Timer', ['timeNumbers'])
  },
  methods: {
    ...mapMutations('Timer', ['changeTimer', 'decrementTimer', 'incrementTimer', 'cleanerTimer', 'soundOff']),
    fitText() {
      
      setTimeout(()=> {
        const maxFontSize = 16;
        let outputDiv = document.querySelector('.timer__content');
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
        
      }, 1)

    }
  },
  watch: {
    timeNumbers() {
      this.fitText();
    }
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
      font-size: 1em;
      font-weight: 300;
      letter-spacing: 0.05em;
      text-align: center;
      color: var(--text1);
      padding-bottom: 0.5rem;
      border-bottom: 0.0625rem solid var(--back2);
      margin-bottom: 2rem;
      &::placeholder {
        color: var(--back2);
      }
    }
    &__value {
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
      span {
        font-size: 4em;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
    }
    &__button {
      display: flex;
      justify-content: center;
      button:nth-child(1) {
        span {
          background-color: var(--display);
          color: #FFFFFF;
        }
      }
      button:nth-of-type(2) {
        font-size: 0.6em;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--text1);
        background-color: var(--back2);
        padding: 0.5rem 1.2rem;
        border-radius: 1000rem;
        margin-left: 1rem;
        &.active {
          letter-spacing: 0;
          font-size: 0.8em;
        }
      }
      button:nth-of-type(3) {
        color: var(--text2);
        background-color: var(--back2);
        border-radius: 1000rem;
        margin-left: 1rem;
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
