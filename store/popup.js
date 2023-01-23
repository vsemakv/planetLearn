export const state = () => ({
  showPopup: false,
})

export const mutations = {
  open(state) {
    state.showPopup = true
  },
  close(state) {
    state.showPopup = false
  },
}

export const getters = {
  showPopup: (state) => {
    return state.showPopup;
  },
}

export const actions = {
  toggle({ commit, state }, value) {
    if (state.showPopup === true) {
      commit('close')
    } else {
      commit('open')
    }
  },

  close({ commit, state }) {
        commit('close')
    },
}