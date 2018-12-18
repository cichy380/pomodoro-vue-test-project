<template>
    <p class="btn-group" role="group">
        <button type="button" class="btn btn-outline-primary" @click="start()" :disabled="state==='started'">Play</button>
        <button type="button" class="btn btn-outline-primary" @click="pause()" :disabled="state!=='started'">Pause</button>
        <button type="button" class="btn btn-outline-primary" @click="stop()" :disabled="state!=='started' && state!=='paused'">Stop</button>
    </p>
</template>

<script>
    export default {
        name: 'Controls',
        props: ['state'],
        methods: {
            start () {
                this.$emit('start')
            },
            pause () {
                this.$emit('pause')
            },
            stop () {
                this.$emit('stop')
            }
        }
    }
</script>
