export default {
  namespaced: true,
  state: {
    time: 0,
    active: null
  },
  getters: {
    timeInt(state) {
      const time = state.time;
      const mil = Number(time.toString().slice(-3));
      const time2 = (time - mil) / 1000;
      const s = time2 % 60;
      const m = ((time2 - s) % 3600) / 60
      const h = ((time2 - s - (m * 60)) % 86400) / 3600
      const d = (time2 - s - (m * 60) - (h * 3600)) / 86400;

      const s1 = !m && !h && !d ? s : s > 0 && s < 10 ? `0${s}` : s >= 10 ? s : d || h || m ? '00' : '0';
      const m1 = !h && m != 0 ? `${m}:` : h && m > 0  && m < 10 ? `0${m}:` : h && m >= 10 ? `${m}:` : d || h ? '00:' : '';
      const h1 = !d && h != 0 ? `${h}:` : d && h > 0  && h < 10 ? `0${h}:` : d && h >= 10 ? `${h}:` : d ? '00:' : '';
      const d1 = d > 0 ? `${d}:` : '';

      return `${d1}${h1}${m1}${s1}`;
    },
    timeDec(state) {
      const time = state.time;
      const mil = time.toString().slice(-3).padStart(3, '0');
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
    resetTime(state) {
      const el = document.querySelector('.stopwatch__content');
      
      clearInterval(state.active);
      state.active = null;
      state.time = 0;

      setTimeout(() => {
        el.removeAttribute('style');
      }, 10)
    }
  }
}
