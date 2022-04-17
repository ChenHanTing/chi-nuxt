<template lang="pug">
  main
    img.full-width(:src="`${imageBaseOneTen}/partial-banner.jpg`")
    .title
      h1 展場介紹
    .article
      h1 佈展照片
    .gallery
      figure(v-for="item in a")
        img(:src="`${imageBaseOneTen}/${item.image}`" alt="預設文字")
</template>

<script>
import website from "@/mixins/website";

export default {
  layout: 'OneTen',
  mixins: [website],
  data() {
    return {
      a: [ ...[...Array(15).keys()].map(n => ({ image: `exhibition/a/${n+1}.jpg`, description: '展場圖片' })),
           ...[...Array(30).keys()].map(n => ({ image: `exhibition/b/${n+1}.jpg`, description: '展場圖片' }))]
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
