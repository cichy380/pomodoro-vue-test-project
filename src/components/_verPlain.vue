<template>
  <div class="container pt-4 pb-4">
    <h3>Pomodoro timer</h3>
    <h5 class="mb-4 text-muted">plain version</h5>

    <section class="jumbotron p-2">
      <div class="timer display-4 text-center">{{ minute }}:{{ second }}</div>

    </section>

    <div class="btn-group btn-group-sm" role="group">
      <button type="button" class="btn btn-outline-primary disabled" disabled>Stop</button>
      <button type="button" class="btn btn-outline-primary" @click="start()">Play</button>
      <button type="button" class="btn btn-outline-primary">Pause</button>
    </div>
  </div>
</template>

<script>
    const STATES = {
        WORK: 'work',
        REST: 'rest'
    }
    const WORKING_TIME = 25
    const RESTING_TIME = 5

    export default {
        name: 'PomodoroPlain',
        data () {
            return {
                minute: WORKING_TIME,
                second: 0,
                state: STATES.WORK,
                timestamp: 0
            }
        },
        methods: {
            start () {
                this._tick()
                this.interval = setInterval(this._tick, 1000)
            },
            _tick () {
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
                this.state = (this.state === STATES.WORK) ? STATES.REST : STATES.WORK

                // timer reset
                if (this.state === STATES.WORK) {
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
