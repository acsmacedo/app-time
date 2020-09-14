export default {
  namespaced: true,
  state: {
    time: 0,
    active: null
  },
  getters: {
    timeRounded(state) {
      return state.time.toFixed(2);
    }
  },
  mutations: {
    incrementTime(state) {
      if(state.active === null) {
        state.active = setInterval(() => { state.time += 0.01 }, 10);
      } else {
        clearInterval(state.active);
        state.active = null;
      }
    },
    zerarTime(state) {
      clearInterval(state.active);
      state.active = null;
      state.time = 0;
    }
  }
}
