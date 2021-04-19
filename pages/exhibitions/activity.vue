<template lang="pug">
  main
    img.full-width(src="~@/assets/images/schools/partial-banner.jpg")
    .title
      h1 活動花絮
    .gallery
      figure(v-for="item in gallery")
        img(:src="item.image" alt="預設文字")
        //- figcaption {{item.description}}
</template>

<script>
import {siteType} from "@/constant/website";

export default {
  meta: { genre: siteType.school },
  data() {
    return {
      gallery: [...Array(34).keys()].map(n => ({ image: require(`@/assets/images/activity/O${n+1}.JPG`), description: '展場圖片' }))
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";
@import "@/assets/mixins/activity-and-introduction.scss";
</style>
