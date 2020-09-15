export default {
  namespaced: true,
  state: {
    time: 0,
    timeInput: 0,
    active: null,
    sound: false
  },
  getters: {
    timeNumbers(state) {
      const time = state.time;
      const s = time % 60;
      const m = ((time - s) % 3600) / 60
      const h = ((time - s - (m * 60)) % 86400) / 3600
      const d = (time - s - (m * 60) - (h * 3600)) / 86400;

      const s1 = !m && !h && !d ? `${s}s` : s > 0 && s < 10 ? `0${s}s` : s >= 10 ? `${s}s` : d || h || m ? '00s' : '0s';
      const m1 = !h && !d && m != 0 ? `${m}m ` : h && m > 0  && m < 10 ? `0${m}m ` : h && m >= 10 ? `${m}m ` : d || h ? '00m ' : '';
      const h1 = !d && h != 0 ? `${h}h ` : d && h > 0  && h < 10 ? `0${h}h ` : d && h >= 10 ? `${h}h ` : d ? '00h ' : '';
      const d1 = d > 0 ? `${d}d ` : '';

      if (state.active && time === 0) {
        const audio = document.getElementById('audio');
        const input = document.querySelector('.timer input');
        state.sound = true;
        audio.play();
        clearInterval(state.active);
        state.active = null;
        input.value = '';
        state.time = 0;
        state.timeInput = 0;
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
      if (state.time > 0) {
        if(state.active === null) {
          state.active = setInterval(() => { state.time -= 1 }, 1000);
        } else {
          clearInterval(state.active);
          state.active = null;
        }
      }
    },
    incrementTimer(state) {
      if(state.active) {
        state.time += 60;
      } else {
        state.time = state.timeInput;
      }
    },
    soundOff(state) {
      const audio = document.querySelector('#audio');
      audio.pause();
      audio.currentTime = 0;
      state.sound = false;
    },
    cleanerTimer(state) {
      state.time = 0;
      state.timeInput = 0;
      clearInterval(state.active);
      state.active = null;
    }
  }
}
