<template>
    <div class="research-card">
        <span>type</span>
        <span>title</span>
        <div class="people">
            <PeopleList
                v-for="{ name, data } in peopleLists"
                :key="name"
                :name="name"
                :list="data"
            />
        </div>
    </div>
</template>

<script>
import { reduceAffiliationList, matchSupscript } from '@/assets/affiliations'

import PeopleList from '@/components/PeopleList'

export default {
    name: 'ResearchCard',

    props: {
        metropolisData: {
            type: Object,
            required: true
        }
    },

    components: {
        PeopleList
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

            return peopleLists
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
    height: 29.9rem;
    margin: 0 auto;
    padding: 2.4rem 3.6rem;
    background: var(--white);
}
</style>
