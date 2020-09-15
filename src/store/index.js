import Vue from 'vue'
import Vuex from 'vuex'

import Date from './modules/date'
import Timer from './modules/timer'
import Stopwatch from './modules/stopwatch'

Vue.use(Vuex)

export default new Vuex.Store({
  data: {
    modeColor: false
  },
  mutations: {
  changeModeColor(state) {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.color-mode > span').classList.toggle('active');
    state.modeColor = !state.modeColor;
    window.localStorage.setItem('modeColor', state.modeColor);
  }
  },
  modules: {
    Date,
    Timer,
    Stopwatch
  }
})
