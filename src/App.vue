<template>
    <div id="app">
        <ThankYouHeader />
        <ResearchCard :metropolis-data="metropolisData" />
    </div>
</template>

<script>
import metropolisData from '@/data/metropolisData.json'

import ThankYouHeader from '@/components/ThankYouHeader'
import ResearchCard from '@/components/ResearchCard'

export default {
    name: 'App',

    components: {
        ThankYouHeader,
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
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
