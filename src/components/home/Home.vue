<template>
  <section class="home">
    <h1>Toolbox</h1>
    <i class="las la-toolbox"></i>
    <p>Toolbox é uma de caixa ferramentas úteis que irá facilitar o seu dia.</p>
    <span>Desenvolvido por <a href="https://github.com/acsmacedo">Anderson Macedo</a></span>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
  .home {
    text-align: center;
    color: var(--text2);
    i {
      font-size: 10em;
      color: var(--display);
    }
    p {
      font-weight: 300;
      line-height: 1.5em;
      letter-spacing: 0.07em;
      margin: 0;
    }
    span {
      font-size: 0.8em;
      font-weight: 300;
      letter-spacing: 0.07em;
      margin-top: 2.7rem;
    }
    a {
      color: var(--text1);
      font-weight: 700;
      border-bottom: 0.0625rem dotted var(--text1);
    }
  }
</style>
