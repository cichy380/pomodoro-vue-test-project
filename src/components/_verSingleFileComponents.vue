<template>
  <div class="container pt-4 pb-4">
    <h3>Pomodoro timer</h3>
    <h5 class="mb-4 text-muted">single file components + vuex</h5>

    <section class="jumbotron p-2">
      <div class="timer display-4">
        <state-title></state-title>
        {{ minute | leftpad }}:{{ second | leftpad }}
      </div>
    </section>

    <control-buttons></control-buttons>

    <cat-pics v-if="!isWorking"></cat-pics>
  </div>
</template>

<script>
    import StateTitle from './StateTitleComponent'
    import ControlButtons from './ControlsComponent'
    import CatPics from './CatPicsComponent'
    import { mapGetters } from 'vuex'
    import leftpad from './../filters/Leftpad'

    export default {
        name: 'PomodoroSingleFileComponents',

        components: { StateTitle, ControlButtons, CatPics },

        computed: {
            ...mapGetters(['isWorking']),
            ...mapGetters({minute: 'getMinutes', second: 'getSeconds'})
        },

        filters: {
            leftpad
        }
    }
</script>

<style scoped>
  .timer {
    font-family: monospace;
  }
</style>
