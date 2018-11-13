<template>
  <div class="container pt-4 pb-4">
    <h3>Pomodoro timer</h3>
    <h5 class="mb-4 text-muted">single file components</h5>

    <section class="jumbotron p-2">
      <div class="timer display-4">
        <state-title :has-working="pomodoroState==='work'"></state-title>
        {{ minute | leftpad }}:{{ second | leftpad }}
      </div>
    </section>

    <p class="btn-group" role="group">
      <button type="button" class="btn btn-outline-primary" @click="start()" :disabled="state==='started'">Play</button>
      <button type="button" class="btn btn-outline-primary" @click="pause()" :disabled="state!=='started'">Pause</button>
      <button type="button" class="btn btn-outline-primary" @click="stop()" :disabled="state!=='started' && state!=='paused'">Stop</button>
    </p>

    <cat-pics v-if="pomodoroState==='rest'"></cat-pics>
  </div>
</template>

<script>
    import StateTitle from './StateTitleComponent'
    import Control from './ControlsComponent'
    import CatPics from './CatPicsComponent'

    const POMODORO_STATES = {
        WORK: 'work',
        REST: 'rest'
    }
    const STATES = {
        STARTED: 'started',
        STOPPED: 'stopped',
        PAUSED: 'paused'
    }
    const WORKING_TIME = 1
    const RESTING_TIME = 1

    export default {
        name: 'PomodoroSingleFileComponents',

        components: { StateTitle, Control, CatPics },

        data () {
            return {
                state: STATES.STOPPED,
                minute: WORKING_TIME,
                second: 0,
                pomodoroState: POMODORO_STATES.WORK
            }
        },

        methods: {
            start () {
                this.state = STATES.STARTED
                this._tick()
                this.interval = setInterval(this._tick, 1000)
            },

            pause () {
                this.state = STATES.PAUSED
                clearInterval(this.interval)
            },

            stop () {
                this.state = STATES.STOPPED
                clearInterval(this.interval)
                this.pomodoroState = POMODORO_STATES.WORK
                this.minute = WORKING_TIME
                this.second = 0
            },

            _tick () {
                // update timestamp for cat-image
                if (this.second % 10 === 0) {
                    let date = new Date()
                    this.timestamp = date.getTime()
                }

                if (this.second !== 0) {
                    this.second--
                    return null
                }

                if (this.minute !== 0) {
                    this.minute--
                    this.second = 59
                    return null
                }

                // this.minute===0 && this.second===0
                this.pomodoroState = (this.pomodoroState === POMODORO_STATES.WORK) ? POMODORO_STATES.REST : POMODORO_STATES.WORK

                // timer reset
                if (this.pomodoroState === POMODORO_STATES.WORK) {
                    this.minute = WORKING_TIME
                } else {
                    this.minute = RESTING_TIME
                }
            }
        }
    }
</script>

<style scoped>
  .timer {
    font-family: monospace;
  }
</style>
