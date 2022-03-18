<template lang="pug">
  main
    img.full-width(:src="`${imageBaseOneTen}/partial-banner.jpg`")
    .title
      h1 展場介紹
    .article
      h1 高中作品
    .gallery
      figure(v-for="item in senior")
        img(:src="`${imageBaseOneNine}/${item.image}`" alt="預設文字")
    .article
      h1 國中作品
    .gallery
      figure(v-for="item in junior")
        img(:src="`${imageBaseOneNine}/${item.image}`" alt="預設文字")
    .article
      h1 國小作品
    .gallery
      figure(v-for="item in elementory")
        img(:src="`${imageBaseOneNine}/${item.image}`" alt="預設文字")
</template>

<script>
import website from "@/mixins/website";

export default {
  layout: 'OneTen',
  mixins: [website],
  data() {
    return {
      senior: [...Array(12).keys()].map(n => ({ image: `exhibition/senior/H${n+1}.JPG`, description: '展場圖片' })),
      junior: [...Array(12).keys()].map(n => ({ image: `exhibition/junior/J${n+1}.JPG`, description: '展場圖片' })),
      elementory: [...Array(12).keys()].map(n => ({ image: `exhibition/elementary/E${n+1}.JPG`, description: '展場圖片' }))
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
