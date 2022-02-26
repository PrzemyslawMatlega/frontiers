<template>
    <div class="research-card">
        <h3 class="reasearch-text">{{ metropolisData.type }}</h3>
        <h2 class="title">{{ metropolisData.title }}</h2>
        <div class="people">
            <PeopleList
                v-for="{ name, data } in peopleLists"
                :key="name"
                :name="name"
                :list="data"
                :class="name"
            />
        </div>

        <div style="margin: 8px 0">AFFILIATONS</div>
        <h3>{{ metropolisData.journal }} | {{ metropolisData.section }}</h3>
    </div>
</template>

<script>
import { reduceAffiliationList, matchSupscript } from '@/assets/affiliations'

import PeopleList from '@/components/PeopleList'

export default {
    name: 'ResearchCard',

    components: {
        PeopleList
    },

    props: {
        metropolisData: {
            type: Object,
            required: true
        }
    },

    computed: {
        peopleData() {
            const { editor, yourself, authors } = this.metropolisData

            return { editor, yourself, authors }
        },

        peopleLists() {
            const { peopleData, affiliations: placesList } = this

            const setGroupAffiliations = group => {
                return {
                    ...group,
                    affiliations: matchSupscript(placesList, group.affiliations)
                }
            }

            let peopleLists = {}
            const pepoleDataEntries = Object.entries(peopleData)

            pepoleDataEntries.forEach(([key, value]) => {
                let people

                if (Array.isArray(value)) {
                    people = value.map(el => setGroupAffiliations(el))
                } else {
                    people = [setGroupAffiliations(value)]
                }

                peopleLists = {
                    ...peopleLists,
                    [key]: {
                        name: key,
                        data: people
                    }
                }
            })
            const { authors, editor, yourself } = peopleLists

            return [authors, editor, yourself]
        },

        affiliations() {
            const affiliationsList = Object.values(this.peopleData)
                .map(el => {
                    if (Array.isArray(el)) {
                        return el.map(person => person.affiliations).flat()
                    }
                    return el.affiliations
                })
                .flat()

            return reduceAffiliationList(affiliationsList).map((el, index) => ({
                ...el,
                supscript: ++index
            }))
        }
    }
}
</script>

<style lang="scss" scoped>
.research-card {
    width: 65.9rem;
    margin: 0 auto;
    padding: 2.4rem 3.6rem;
    background: var(--white);

    .reasearch-text {
        color: var(--grey_55);
        font-weight: var(--font-thin);
    }

    .title {
        margin-bottom: 1.6rem;
    }

    .people {
        .authors {
            margin-bottom: 0.8rem;
        }
    }
}
</style>
