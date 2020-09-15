<template>
  <nav class="menu">
    <ul>
      <li>
        <router-link to="/">
          <i class="las la-home"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/date">
          <i class="las la-calendar"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/timer">
          <i class="las la-hourglass-half"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/stopwatch">
          <i class="las la-stopwatch"></i>
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
    left: 0;
    background-color: var(--back2);
    color: var(--text2);
    ul {
      display: flex;
      justify-content: center;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0.75rem;
      color: inherit;
      &.link-active {
        color: var(--display);
      }
    }
    i {
      font-size: 2.2em;
    }
  }
</style>
