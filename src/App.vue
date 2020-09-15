<template>
  <div id="app">
    <div class="color-mode" v-on:click="changeModeColor">
      <span><span></span></span>
    </div>
    <transition name="transition" mode="out-in">
      <router-view />
    </transition>
    <Menu />
  </div>
</template>

<script>
import Menu from './components/Menu'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    Menu
  },
  computed: {
    ...mapState(['modeColor'])
  },
  methods: {
    ...mapMutations(['changeModeColor'])
  },
  mounted() {
    if(window.localStorage.getItem('modeColor') === 'true') {
      this.changeModeColor();
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');

  #app {
    max-width: 450px;
    margin: 0 auto;
    position: relative;
  }

  * {
    box-sizing: border-box;
  }

  body {
    --back1: #EDF0F2;
    --back2: #CDD0D2;
    --text1: #3E424C;
    --text2: #4B505D;
    --display: #6B5EBF;
    &.dark-mode {
      --back1: #2E323C;
      --back2: #3D424F;
      --text1: #EDF0F2;
      --text2: #BDC0C2;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--back1);
    font-family: 'Montserrat', sans-serif;
  }

  section {
    min-height: calc(100vh - 67px);
    padding: 92px 1rem 92px 1rem;
    display: flex;
    flex-direction: column;
    justify-content:  center;
  }

  h1 {
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 0.05em;
    padding: 0;
    margin: 0 0 2rem 0;
    color: var(--display);
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }

  input[type="number"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  .transition-enter, .transition-leave-to {
   opacity: 0;
  }
  
  .transition-enter-active { 
    transition: opacity 1s linear;
  }

  .transition-leave-active { 
    transition: opacity 0.5s ease-in;
  }

  .color-mode {
    position: absolute;
    top: 1rem;
    right: 1rem;
    > span {
      width: 2rem;
      height: 1rem;
      background-color: var(--back2);
      border-radius: 1000rem;
      border: 0.3rem solid var(--back2);
      display: flex;
      align-items: center;
      > span {
        width: 0.8rem;
        height: 0.8rem;
        background-color: var(--text2);
        border-radius: 1000rem;
        margin-left: -0.1rem;
      }
    }
    > span.active {
      border: 0.2rem solid var(--text2);
      span {
        width: 1.45rem;
      } 
    }
  }
</style>
