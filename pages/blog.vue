<template>
  <div>
    <h1>
      Blog
    </h1>

    <!-- eslint-disable vue/no-v-html -->
    <div
        v-if="blog.Intro"
        v-html="$md.render(blog.Intro)"
    />
    <!-- eslint-enable vue/no-v-html -->

    <div class="posts">
        <p v-for="post in posts" :key="post.id">
            {{ post.Title }}
        </p>
    </div>
    
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    return {
      blog: await $strapi.find('blog'),
      posts: await $strapi.find('posts')
    };
  },
}
</script>