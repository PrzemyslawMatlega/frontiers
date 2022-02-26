<template>
    <div class="mini-profile"></div>
</template>
<script>
export default {
    name: 'MiniProfile',

    props: {
        person: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.mini-profile {
    z-index: 2;
    position: absolute;
    width: 38.5rem;
    height: 16.2rem;
    padding: 1.6rem;
    background: var(--white);
    box-shadow: 0rem -0.2rem 1rem rgba(0, 0, 0, 0.08),
        0rem 1.4rem 2.8rem rgba(0, 0, 0, 0.1);
}
</style>
