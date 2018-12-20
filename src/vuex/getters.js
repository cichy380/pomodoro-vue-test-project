export default {
    isStarted: state => state.started,
    isPaused: state => state.paused,
    isWorking: state => state.working,
    getMinutes: state => Math.floor(state.counter / 60),
    getSeconds: state => (state.counter % 60)
}
