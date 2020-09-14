<template>
  <div id="app">
    <router-view/>
    <Menu />
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  components: {
    Menu
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
  html {
    --back1: #333333;
    --back2: #555555;
    --text1: #DDDDDD;
    --text2: #BBBBBB;
    --display: #00B2B2;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--back1);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }

  section {
    max-width: 700px;
    height: calc(100vh - 75px);
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1 {
    font-size: 1em;
    text-align: center;
    color: var(--text1);
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  
</style>
