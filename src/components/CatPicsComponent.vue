<template>
  <figure>
    <img :src="catimgsrc" />
    <figcaption class="small text-muted">
      It is your rest time, so look on the cat picture from <a href="http://thecatapi.com/" target="_blank">thecatapi.com</a>
    </figcaption>
  </figure>
</template>

<script>
    import { CAT_IMG_URL } from './../config'

    export default {
        name: 'CatPics',
        computed: {
            catimgsrc () {
                return `${CAT_IMG_URL}&ts=${(new Date()).getTime()}`
            }
        }
    }
</script>
