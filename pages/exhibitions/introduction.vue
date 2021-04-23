<template lang="pug">
  main
    img.full-width(src="~@/assets/images/schools/partial-banner.jpg")
    .title
      h1 展場介紹
    .article
      h1 高中作品
    .gallery
      figure(v-for="item in senior")
        img(:src="item.image" alt="預設文字")
        //- figcaption {{item.description}}
    .article
      h1 國中作品
    .gallery
      figure(v-for="item in junior")
        img(:src="item.image" alt="預設文字")
        //- figcaption {{item.description}}
    .article
      h1 國小作品
    .gallery
      figure(v-for="item in elementory")
        img(:src="item.image" alt="預設文字")
        //- figcaption {{item.description}}
</template>

<script>
import {siteType} from "@/constant/website";

export default {
  meta: { genre: siteType.school },
  data() {
    return {
      senior: [...Array(12).keys()].map(n => ({ image: require(`@/assets/images/exhibition/senior/H${n+1}.JPG`), description: '展場圖片' })),
      junior: [...Array(12).keys()].map(n => ({ image: require(`@/assets/images/exhibition/junior/J${n+1}.JPG`), description: '展場圖片' })),
      elementory: [...Array(12).keys()].map(n => ({ image: require(`@/assets/images/exhibition/elementary/E${n+1}.JPG`), description: '展場圖片' }))
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";
@import "@/assets/mixins/activity-and-introduction.scss";

.article,
.gallery {
  margin: 0 10%;
}

.article {
  padding-left: 2%;
}
</style>
