<template>
  <div>
    <text-heading :display="'title'" :level="1" :text="'DarZouras.com'" />

    <!-- eslint-disable vue/no-v-html -->
    <div
        v-if="home.Intro"
        v-html="$md.render(home.Intro)"
    />
    <!-- eslint-enable vue/no-v-html -->
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    return {
      home: await $strapi.find("home")
    };
  },
}
</script>

<style lang="scss" scoped>
  p {
    font-size: 1.2rem;
    font-weight: 400;
    font-variation-settings: 'wdth' 100;
  }
</style>