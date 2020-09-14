export default {
  namespaced: true,
  state: {
    time: 0,
    timeInput: 0,
    active: null
  },
  getters: {
    timeNumbers(state) {
      const time = state.time;
      const s = time % 60;
      const m = ((time - s) % 3600) / 60
      const h = ((time - s - (m * 60)) % 86400) / 3600
      const d = (time - s - (m * 60) - (h * 3600)) / 86400;

      const s1 = s > 0 ? s + 's' : '';
      const m1 = m > 0 ? m + 'm ' : '';
      const h1 = h > 0 ? h + 'h ' : '';
      const d1 = d > 0 ? d + 'd ' : '';

      const el = document.querySelector('.timer__value');
      if (s1) el.classList.remove('set-m');
      if (s1) el.classList.remove('set-h');
      if (s1) el.classList.remove('set-d');

      if (m1) el.classList.add('set-m');
      if (h1) el.classList.add('set-h');
      if (d1) el.classList.add('set-d');

      if (time === 0) {
        clearInterval(state.active);
        state.active = null;
      }

      if (time) return `${d1}${h1}${m1}${s1}`;
      if (!time) return `0s`;


      
    }
  },
  mutations: {
    changeTimer(state, e) {
      state.time = e.target.value;
      state.timeInput = e.target.value;
    },
    decrementTimer(state) {
      if(state.active === null) {
        state.active = setInterval(() => { state.time -= 1 }, 1000);
      } else {
        clearInterval(state.active);
        state.active = null;
      }
    },
    incrementTimer(state) {
      if(state.active) {
        state.time += 60;
      } else {
        state.time = state.timeInput;
      }
    },
    cleanerTimer(state) {
      state.time = 0;
      state.timeInput = 0;
      clearInterval(state.active);
      state.active = null;
    }
  }
}