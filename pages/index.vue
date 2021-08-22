<template>
  <div>
    <h1>
      HEADER test
    </h1>

    <p>
      test test test
    </p>

    <div>
      <p v-for="page in pages" :key="page.id">
        {{ page }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    return {
      pages: await $strapi.find("pages"),
    };
  },
}
</script>

<style lang="scss" scoped>
div {
  font-family: 'Inconsolata', sans-serif;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    font-variation-settings: 'wdth' 200;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    font-variation-settings: 'wdth' 100;
  }
}
</style>