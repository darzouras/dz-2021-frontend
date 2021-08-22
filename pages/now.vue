<template>
    <div>
        <h1>
            Now
        </h1>

        <component
            :is="getComponentName(component.__component)"
            v-for="component in now.Components"
            :key="component.id"
            v-bind="component"
        />

        <!-- div v-for="component in now.Components" :key="component.id">
            {{ component }}
        </div -->
    </div>
</template>

<script>
export default {
    async asyncData({ $strapi }) {
        return {
            now: await $strapi.find('now')
        }
    },
    methods: {
        getComponentName(comp) {
            return comp.replace('.', '-')
        }
    }
}
</script>
