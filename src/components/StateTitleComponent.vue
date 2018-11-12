<template>
  <span>
    <span :class="{'alert-danger':hasWorking, 'alert-success':!hasWorking, }">{{ title }}</span>
  </span>

</template>

<script>
    const TITLE = {
        WORK: 'Work time',
        REST: 'Rest time!'
    }

    export default {
        name: 'StateTitle',

        props: ['hasWorking'],

        computed: {
            title: function () {
                return this.hasWorking ? TITLE.WORK : TITLE.REST
            }
        }
    }
</script>
