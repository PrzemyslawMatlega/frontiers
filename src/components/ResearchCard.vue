<template>
    <div class="research-card">
        <span>type</span>
        <span>title</span>
    </div>
</template>

<script>
import { reduceAffiliationList } from '@/assets/affiliations'

export default {
    name: 'ResearchCard',

    props: {
        metropolisData: {
            type: Object,
            required: true
        }
    },

    computed: {
        peopleLists() {
            const { editor, yourself, authors } = this.metropolisData

            return { editor, yourself, authors }
        },

        affiliations() {
            const affiliationsLits = Object.values(this.peopleLists)
                .map(el => {
                    if (Array.isArray(el)) {
                        return el.map(person => person.affiliations).flat()
                    }
                    return el.affiliations
                })
                .flat()

            return reduceAffiliationList(affiliationsLits)
        }
    }
}
</script>

<style lang="scss" scoped>
.research-card {
    width: 65.9rem;
    height: 29.9rem;
    margin: 0 auto;
    padding: 2.4rem 3.6rem;
    background: var(--white);
}
</style>
