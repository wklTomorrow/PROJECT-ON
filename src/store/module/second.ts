import { ActionTree } from 'vuex';
import * as types from '../module-types'
export const state: any = {
    name: 'wang',
    value: '100'
}
export const actions: ActionTree<any, any> = {
    async getName({state, commit}, name: any) {
        commit('setNameValue', name)
    }
}
export const mutations: any = {
    setNameValue(state: any, value: any) {
        state.name = value
    }
}
types.TYPE
export default {
    state,
    namespaced: true,
    actions,
    mutations
}