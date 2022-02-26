<template>
    <div class="people-list">
        <span>{{ name }}</span>
        <span v-for="person in list" :key="person.id">
            <PersonWithMiniProfile :person="person" />
        </span>
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
    }
}
</script>
<style lang="scss" scoped></style>
