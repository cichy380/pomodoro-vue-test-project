<template>
    <p class="btn-group" role="group">
        <button type="button" class="btn btn-outline-primary" @click="start" :disabled="isStarted">Play</button>
        <button type="button" class="btn btn-outline-primary" @click="pause" :disabled="!isStarted">Pause</button>
        <button type="button" class="btn btn-outline-primary" @click="stop" :disabled="!isStarted && !isPaused">Stop</button>
    </p>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'Controls',
        computed: {
            ...mapGetters(['isStarted', 'isPaused'])
        },
        methods: {
            ...mapActions(['start', 'pause', 'stop'])
        }
    }
</script>
