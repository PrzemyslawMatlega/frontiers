<template>
    <div id="app">
        <AppHeader />
        <ResearchCard :metropolis-data="metropolisData" />
    </div>
</template>

<script>
import metropolisData from '@/data/metropolisData.json'

import AppHeader from '@/components/AppHeader'
import ResearchCard from '@/components/ResearchCard'

export default {
    name: 'App',

    components: {
        AppHeader,
        ResearchCard
    },

    beforeCreate() {
        this.metropolisData = metropolisData
    }
}
</script>

<style lang="scss">
#app {
    width: 100%;
    min-height: 100vh;
    padding-top: 16rem;
    background-color: var(--mercury);
    box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
}
</style>
