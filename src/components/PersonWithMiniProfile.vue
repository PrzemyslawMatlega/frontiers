<template>
    <div class="person-with-mini-profile">
        {{ person.fullName }}
    </div>
</template>
<script>
export default {
    name: 'PersonWithMiniProfile',

    props: {
        person: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped></style>
