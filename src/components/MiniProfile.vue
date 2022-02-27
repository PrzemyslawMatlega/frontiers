<template>
    <div class="mini-profile">
        <div class="content">
            <div class="info">
                <div class="full-name">{{ person.fullName }}</div>
                <div class="affiliations">
                    <div
                        v-for="item in affiliations"
                        :key="item"
                        v-html="item"
                        class="affiliation"
                    />
                </div>
                <div class="stats">
                    <div
                        class="stat"
                        v-for="{ field, number } in stats"
                        :key="field"
                    >
                        <div class="number">{{ number | comaAtThousands }}</div>
                        <div class="field">{{ field }}</div>
                    </div>
                </div>
            </div>
            <div class="photo">
                <img
                    v-if="showPicture"
                    :src="person.pictureUrl"
                    :alt="person.fullName"
                    @error="showPicture = !showPicture"
                />
                <div v-else class="initials">
                    {{ person.fullName | initials }}
                </div>
            </div>
            <div class="link">
                <a :href="person.profileUrl" target="_blank">view profile</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MiniProfile',

    data() {
        return {
            showPicture: true
        }
    },

    props: {
        person: {
            type: Object,
            required: true
        }
    },

    computed: {
        stats() {
            const { publications, views, followers } = this.person

            return [
                { field: 'Publications', number: publications },
                { field: 'Views', number: views },
                { field: 'Followers', number: followers }
            ]
        },

        affiliations() {
            return this.person.affiliations.map(({ name, city, country }) => {
                return `${name}, ${city},</br> ${country}`
            })
        }
    },

    filters: {
        comaAtThousands(value) {
            return value.toLocaleString('en-US')
        },

        initials(value) {
            return value
                .split(' ')
                .map(el => el.charAt(0))
                .join('')
        }
    }
}
</script>
<style lang="scss" scoped>
.mini-profile {
    z-index: 2;
    position: absolute;
    width: 38.5rem;
    min-height: 16.2rem;
    padding: 1.6rem;
    background: var(--white);
    box-shadow: 0rem -0.2rem 1rem rgba(0, 0, 0, 0.08),
        0rem 1.4rem 2.8rem rgba(0, 0, 0, 0.1);

    .content {
        position: relative;
    }

    .info {
        margin-bottom: 1.6rem;
    }

    .full-name {
        margin-bottom: 0.4rem;
        font-size: 1.8rem;
        line-height: 2.5rem;
        font-weight: var(--font-semi-bold);
        color: var(--carbon);
    }

    .affiliations {
        margin-bottom: 0.8rem;
    }

    .affiliation {
        margin-bottom: 0.2rem;
        font-size: 1.3rem;
        line-height: 2rem;
        font-weight: var(--font-thin);
        color: var(--grey_55);
    }

    .stats {
        display: flex;

        &:last-of-type(.stat) {
            margin-right: 0;
        }
    }

    .stat {
        display: flex;
        margin-right: 1.6rem;
        font-size: 1.3rem;
        line-height: 2rem;
        font-weight: var(--font-thin);
        color: var(--carbon);
    }

    .number {
        margin-right: 0.4rem;
        font-weight: var(--font-semi-bold);
        color: var(--08_air);
    }

    .photo {
        position: absolute;
        right: 0;
        top: 0;
        width: 5.6rem;
        height: 5.6rem;
        background: rgba(0, 160, 210, 0.05);
        border-radius: 99999999rem;

        .initials,
        img {
            width: 100%;
            border-radius: 99999999rem;
        }

        .initials {
            @extend %flex-cc;
            font-size: 1.8rem;
            line-height: 2.5rem;
            font-weight: var(--font-semi-bold);
            color: var(--08_air);
            height: 100%;
            text-transform: uppercase;
            border: 0.1rem solid var(--08_air);
        }

        img {
            object-position: 50% 50%;
            object-fit: cover;
        }
    }

    .link {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: var(--08_air);
        fill: var(--08_air);

        a {
            font-size: 1.1rem;
            line-height: 1.7rem;
            text-transform: uppercase;
        }
    }
}
</style>
