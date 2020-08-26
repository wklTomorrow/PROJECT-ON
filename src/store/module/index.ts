import { ActionTree } from 'vuex';
export const state: any = {
    time: 1
}
export const actions: ActionTree<any, any> = {
    async getTime({state, commit}, times: any) {
        commit('setTime', times)
    }
}
export const mutations: any = {
    setTime(state: any, value: any) {
        state.time = value
    }
}
export default {
    state,
    actions,
    mutations
}