<template>
    <!-- eslint-disable vue/no-v-html -->
    <p
        :class="`p__${style}`"
        v-html="$md.render(content)"
    />
    <!-- eslint-enable vue/no-v-html -->
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: ''
        },
        style: {
            type: String,
            default: 'regular'
        }
    }
}
</script>

<style lang="scss" scoped>
.p__regular {
    font-size: 1rem;
    font-weight: 400;
}
</style>