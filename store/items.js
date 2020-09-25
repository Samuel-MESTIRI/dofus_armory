export const state = () => ({
  items: []
})

export const mutations = {
  loadItems(state, items) {
    state.items = items
  }
}

// export const actions = {
//   addMore(context) {
//     context.commit('add', 'bobou')
//   }
// }

export const getters = {
  getSortItems: (state) => {
    return state.items
  }
}

