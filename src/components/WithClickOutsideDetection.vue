<script>
export default {
    name: 'WithClickOutsideDetection',

    props: {
        handler: {
            type: String,
            default: null
        },
        exclude: {
            type: Array,
            default: () => []
        }
    },

    watch: {
        handler(newHandler, oldHandler) {
            if (newHandler && newHandler !== oldHandler) {
                this.bindEventListeners()
            }

            if (newHandler === null) {
                this.unbindEventListeners()
            }
        }
    },

    mounted() {
        this.bindEventListeners()
    },

    beforeDestroy() {
        this.unbindEventListeners()
    },

    methods: {
        bindEventListeners() {
            // handler - function name of close handler in component context
            const { handler } = this

            if (handler) {
                document.addEventListener('mousedown', this.vueOutsideClick)
                document.addEventListener('touchstart', this.vueOutsideClick)
            }
        },

        unbindEventListeners() {
            document.removeEventListener('mousedown', this.vueOutsideClick)
            document.removeEventListener('touchstart', this.vueOutsideClick)
        },

        vueOutsideClick(ev) {
            ev.stopPropagation()

            // exclude - ref names to elements which we want to exclude from detecting click outside
            const { exclude } = this

            let clickedOnExcludedEl = false
            const vnode = this.$slots.default[0]

            exclude.forEach(refName => {
                if (!clickedOnExcludedEl) {
                    const excludedEl = vnode.context.$refs[refName]

                    clickedOnExcludedEl = excludedEl.contains(ev.target)
                }
            })

            if (
                !vnode.elm.contains(ev.target) &&
                !clickedOnExcludedEl &&
                this.handler
            ) {
                vnode.context[this.handler](ev)
            }
        }
    },

    render() {
        return this.$slots.default
    }
}
</script>
