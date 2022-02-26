<template>
    <div class="affiliation-list">
        <div class="header" @click="isExpanded = !isExpanded">
            Affiliations
            <span> svg</span>
        </div>
        <ul class="list" v-show="isExpanded" :class="{ visible: isExpanded }">
            <li v-for="item in list" :key="item" v-html="item" class="item" />
        </ul>
    </div>
</template>
<script>
export default {
    name: 'AffiliationList',

    data() {
        return {
            isExpanded: false
        }
    },

    props: {
        affiliations: {
            type: Array,
            required: true
        }
    },

    computed: {
        list() {
            return this.affiliations.map(
                ({ supscript, name, city, country }) => {
                    return `<sup>${supscript}</sup> ${name}, ${city}, ${country}`
                }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
.affiliation-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .header {
        font-size: 1.3rem;
        line-height: 2.2rem;
        color: var(--08_air);
        fill: var(--08_air);
        cursor: pointer;
        user-select: none;
    }

    .list {
        height: 0;
        list-style: none;
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 1.6rem;
        font-weight: var(--font-thin);
        color: var(--carbon);

        sup {
            font-size: 1.3rem;
        }

        &.visible {
            height: auto;
        }
    }
}
</style>
