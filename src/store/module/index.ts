import { ActionTree } from 'vuex';
import * as types from '../module-types'
interface MyState {
    times: number,
    name?: string
}
export const state: MyState = {
    times: 1
}
export const actions: ActionTree<any, any> = {
    async getValue({state, commit}, times: any) {
        commit('setTimesValue', times)
    }
}
export const mutations: any = {
    setTimesValue(state: any, value: any) {
        state.times = value
    }
}
types.TYPE
export default {
    state,
    actions,
    mutations
}