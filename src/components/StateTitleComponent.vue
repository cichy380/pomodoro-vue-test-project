<template>
  <span>
    <span :class="{'alert-danger':isWorking, 'alert-success':!isWorking, }">{{ title }}</span>
  </span>

</template>

<script>
    import { mapGetters } from 'vuex'

    const TITLE = {
        WORK: 'Work time',
        REST: 'Rest time!'
    }

    export default {
        name: 'StateTitle',

        computed: {
            ...mapGetters(['isWorking']),

            title: function () {
                return this.isWorking ? TITLE.WORK : TITLE.REST
            }
        }
    }
</script>
