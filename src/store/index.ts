import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import indexs from './module/index'
import second from './module/second'
export default new Vuex.Store({
    modules: {  
        indexs,
        second
    }
})