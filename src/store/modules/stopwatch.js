export default {
  namespaced: true,
  state: {
    time: 0,
    active: null
  },
  getters: {
    timeRoundedInt(state) {
      const time = new Date(state.time);

      const s2 = time.getUTCSeconds();
      const m2 = time.getUTCMinutes();
      const h2 = time.getUTCHours();
      const d2 = time.getUTCDate() - 1;

      const s = m2 && s2 < 10 ? `0${s2}}` : s2;
      const m1 = h2 && m2 < 10 ? `0${m2}` : m2;
      const m = m2 ? `${m1} : ` : '';
      const h1 = d2 && h2 < 10 ? `0${h2}` : h2;
      const h = h2 ? `${h1} : ` : '';
      const d = d2 ? `${d2} : ` : '';
      
      return `${d}${h}${m}${s}`;
    },
    timeRoundedDec(state) {
      const time = new Date(state.time);
      const mil = time.getUTCMilliseconds().toString().padStart(3, '0');      
      return `${mil[0]}${mil[1]}`;
    }
  },
  mutations: {
    incrementTime(state) {
      if(state.active === null) {
        state.active = setInterval(() => { state.time += 10 }, 10);
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
