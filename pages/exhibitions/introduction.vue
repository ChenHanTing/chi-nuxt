<template lang="pug">
  main
    img.full-width(src="~@/assets/images/schools/partial-banner.jpg")
    .title
      h1 展場介紹
    .article
      h1 範例標題
    .gallery
      figure(v-for="item in gallery")
        img(:src="item.image" alt="預設文字")
        figcaption {{item.description}}
</template>

<script>
import {siteType} from "@/constant/website";

export default {
  meta: { genre: siteType.school },
  data() {
    return {
      gallery: Array(30).fill({image: 'http://placeimg.com/640/360/any', description: '展場圖片'})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";
@import "@/assets/mixins/activity-and-introduction.scss";
</style>
