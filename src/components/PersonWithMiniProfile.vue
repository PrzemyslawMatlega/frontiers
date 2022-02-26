<template>
    <div class="person-with-mini-profile">
        <span class="person">
            <span class="full-name" @click="isMiniProfileActive = true">
                {{ person.fullName }}</span
            >
            <sup>{{ supscripts }}</sup>
        </span>
        <WithClickOutsideDetection
            :handler="isMiniProfileActive ? 'close' : null"
        >
            <MiniProfile :person="person" v-if="isMiniProfileActive" />
        </WithClickOutsideDetection>
    </div>
</template>
<script>
import MiniProfile from '@/components/MiniProfile'
import WithClickOutsideDetection from '@/components/WithClickOutsideDetection'

export default {
    name: 'PersonWithMiniProfile',

    components: {
        MiniProfile,
        WithClickOutsideDetection
    },

    props: {
        person: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            isMiniProfileActive: false
        }
    },

    computed: {
        supscripts() {
            return this.person.affiliations
                .map(({ supscript }) => supscript)
                .sort((a, b) => a - b)
                .join(',')
        }
    },

    methods: {
        close() {
            this.isMiniProfileActive = false
        }
    }
}
</script>
<style lang="scss" scoped>
.person-with-mini-profile {
    position: relative;

    .person {
        font-weight: var(--font-thin);
    }

    .full-name {
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>
