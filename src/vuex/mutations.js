import * as types from './mutation_types'
import { WORKING_TIME, RESTING_TIME } from './../config'

function _tick (state) {
    state.counter = state.counter - 1
    if (state.counter <= 0) {
        _toggle(state)
    }
}

function _reset (state) {
    state.started = false
    state.paused = false
    clearInterval(state.interval)
    state.working = true
    state.counter = WORKING_TIME
}

function _toggle (state) {
    state.working = !state.working
    state.counter = state.working ? WORKING_TIME : RESTING_TIME
}

export default {
    [types.START] (state) {
        state.started = true
        state.paused = false
        state.interval = setInterval(() => _tick(state), 1000)
    },
    [types.PAUSE] (state) {
        state.started = false
        state.paused = true
        clearInterval(state.interval)
    },
    [types.STOP] (state) {
        _reset(state)
    }
}
