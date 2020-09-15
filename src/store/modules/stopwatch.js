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

      const s1 = s > 0 ? s : d || h || m ? '00' : '0';
      const m1 = m > 0 && m < 10 ? `0${m} : ` : m >= 10 ? `${m} : ` : d || h ? '00 : ' : '';
      const h1 = h > 0 && h < 10 ? `0${h} : ` : h > 10 ? h : d ? '00' : '';
      const d1 = d > 0 ? `${d} : ` : '';

      const el = document.querySelector('.stopwatch__time');
      if (m1) el.classList.add('set-m');
      if (h1) el.classList.remove('set-m');
      if (h1) el.classList.add('set-h');
      if (d1) el.classList.remove('set-h');
      if (d1) el.classList.add('set-d');

      return `${d1}${h1}${m1}${s1}`;
      /*
      const time = new Date(state.time);

      const s2 = time.getUTCSeconds();
      const m2 = time.getUTCMinutes();
      const h2 = time.getUTCHours();
      const d2 = time.getUTCDate() - 1;

      const s = m2 && s2 == 0 ? `00` : m2 && s2 < 10 ? `0${s2}` : s2;
      const m1 = d2 && m2 == 0 ? `00` : h2 && m2 < 10 ? `0${m2}` : m2;
      const m = m2 ? `${m1}:` : '';
      const h1 = d2 && h2 == 0 ? `00` : d2 && h2 < 10 ? `0${h2}` : h2;
      const h = h2 || d2 ? `${h1}:` : '';
      const d = d2 ? `${d2}:` : '';
      
      const el = document.querySelector('.stopwatch__time');
      if (m) el.classList.add('set-m');
      if (h) el.classList.remove('set-m');
      if (h) el.classList.add('set-h');
      if (d) el.classList.remove('set-h');
      if (d) el.classList.add('set-d');

      return `${d}${h}${m}${s}`;
      */
    },
    timeDec(state) {
      const time = state.time;
      const mil = time.toString().slice(-3).padStart(3, '0');
      return `${mil[0]}${mil[1]}`;
      /*
      const time = new Date(state.time);
      const mil = time.getUTCMilliseconds().toString().padStart(3, '0');      
      return `${mil[0]}${mil[1]}`;
      */
    }
  },
  mutations: {
    incrementTime(state) {
      if(state.active === null) {
        state.active = setInterval(() => { state.time += 1000 }, 10);
      } else {
        clearInterval(state.active);
        state.active = null;
      }
    },
    resetTime(state) {
      const el = document.querySelector('.stopwatch__time');
      el.classList.remove('set-m');
      el.classList.remove('set-h');
      el.classList.remove('set-d');

      clearInterval(state.active);
      state.active = null;
      state.time = 0;
    },
    cleanerTime(state) {
      clearInterval(state.active);
      state.active = null;
      state.time = 0;
    }
  }
}
