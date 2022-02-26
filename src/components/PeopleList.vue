<template>
    <div class="people-list">
        <div class="content">
            <span class="list-name">{{ name | capitalize }}&nbsp;</span>
            <div
                class="person"
                v-for="(person, index) in list"
                :key="person.id"
            >
                <PersonWithMiniProfile :person="person" />
                {{ getSpacer(index) }}
            </div>
        </div>
    </div>
</template>
<script>
import PersonWithMiniProfile from '@/components/PersonWithMiniProfile'

export default {
    name: 'PeopleList',

    components: {
        PersonWithMiniProfile
    },

    props: {
        list: {
            type: Object,
            required: true
        },

        name: {
            type: String,
            required: true
        }
    },

    methods: {
        getSpacer(index) {
            if (index === 0 || index === this.list.length - 1) {
                return ''
            } else if (index === this.list.length - 2) {
                return ',\u00A0and\u00A0'
            } else {
                return ',\u00A0'
            }
        }
    },

    filters: {
        capitalize(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>
<style lang="scss" scoped>
.people-list {
    .content {
        display: inline-flex;
        flex-wrap: wrap;
        font-size: 1.5rem;
        line-height: 2.1rem;
    }

    .person {
        display: inline-flex;
    }

    .list-name {
        font-weight: var(--font-semi-bold);
    }
}
</style>
