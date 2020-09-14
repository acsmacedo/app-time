<template>
  <nav class="menu">
    <ul>
      <li>
        <router-link to="/">
          <i class="las la-home"></i>
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/date">
          <i class="las la-calendar-day"></i>
          <span>Date</span>
        </router-link>
      </li>
      <li>
        <router-link to="/timer">
          <i class="las la-hourglass-half"></i>
          <span>Timer</span>
        </router-link>
      </li>
      <li>
        <router-link to="/stopwatch">
          <i class="las la-stopwatch"></i>
          <span>Stopwatch</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped lang="scss">
  .menu {
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--back2);
    ul {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 0.5rem;
      color: var(--text2);
    }
    i {
      font-size: 1.5em;
    }
  }
</style>
