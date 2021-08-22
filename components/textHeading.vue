<template>
    <component
        :is="`h${level}`"
        :class="`heading__${display}`"
    >
        {{ text }}
    </component>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        level: {
            type: Number,
            default: 2
        },
        display: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.heading__title {
    font-size: 3.5rem;
    font-weight: 700;
    font-variation-settings: 'wdth' 200;
}

.heading__heading {
    font-size: 2rem;
    font-weight: 700;
}

.heading__subheading {
    font-size: 1.5rem;
    font-weight: 600;
    font-variation-settings: 'wdth' 200;
}

.heading__kicker {
    font-size: 1.25rem;
    font-weight: 700;
    font-variation-settings: 'wdth' 200;
}
</style>