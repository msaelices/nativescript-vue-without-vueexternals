const state = {
  items: ['Apple', 'Banana', 'Tomato'],
}

const mutations = {
  add (state, fruit) {
    state.items.push(fruit)
  },
}

const actions = {
  add: ({commit}, fruit) => {
    return new Promise((resolve, reject) => {
      commit('add', fruit)
      resolve()
    })
  },
}

export default {
  state,
  mutations,
  actions,
  namespaced: true,
}
