<template>
  <figure>
    <img :src="catimgsrc" />
    <figcaption class="small text-muted">
      It is your rest time, so look on the cat picture from <a href="http://thecatapi.com/" target="_blank">thecatapi.com</a>
    </figcaption>
  </figure>
</template>

<script>
    export default {
        name: 'CatPics',

        computed: {
            catimgsrc () {
                let date = new Date()
                return 'http://thecatapi.com/api/images/get?type=gif&size=med&ts=' + date.getTime()
            }
        }
    }
</script>
