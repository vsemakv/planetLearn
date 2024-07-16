export const VForm = () => import('../../components/VForm.vue' /* webpackChunkName: "components/v-form" */).then(c => wrapFunctional(c.default || c))
export const VHeader = () => import('../../components/VHeader.vue' /* webpackChunkName: "components/v-header" */).then(c => wrapFunctional(c.default || c))
export const VHero = () => import('../../components/VHero.vue' /* webpackChunkName: "components/v-hero" */).then(c => wrapFunctional(c.default || c))
export const VPopup = () => import('../../components/VPopup.vue' /* webpackChunkName: "components/v-popup" */).then(c => wrapFunctional(c.default || c))
export const VRewards = () => import('../../components/VRewards.vue' /* webpackChunkName: "components/v-rewards" */).then(c => wrapFunctional(c.default || c))
export const VSelect = () => import('../../components/VSelect.vue' /* webpackChunkName: "components/v-select" */).then(c => wrapFunctional(c.default || c))
export const VTimer = () => import('../../components/VTimer.vue' /* webpackChunkName: "components/v-timer" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
