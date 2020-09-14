import Vue from 'vue'
import Vuex from 'vuex'

import Date from './modules/date'
import Timer from './modules/timer'
import Spotwatch from './modules/stopwatch'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Date,
    Timer,
    Spotwatch
  }
})
