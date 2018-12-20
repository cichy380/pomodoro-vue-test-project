import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { WORKING_TIME } from './../config'

Vue.use(Vuex)

const state = {
    started: false,
    paused: false,
    working: true,
    counter: WORKING_TIME,
    interval: null
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
