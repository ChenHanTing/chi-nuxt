<template lang="pug">
  main
    img.full-width(:src="`${imageBaseOneNine}/partial-banner.jpg`")
    .title
      h1 活動花絮
    .gallery
      figure(v-for="item in gallery")
        img(:src="`${imageBaseOneNine}/${item.image}`" alt="預設文字")
        //- figcaption {{item.description}}
</template>

<script>
import website from "@/mixins/website";

export default {
  layout: 'OneNine',
  mixins: [website],
  data() {
    return {
      gallery: [
        ...[...Array(34).keys()].map(n => ({ image: `activity/O${n+1}.JPG`, description: '展場圖片' })),
        ...[...Array(19).keys()].map(n => ({ image: `activity/L${n+1}.jpg`, description: '展場圖片' }))
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";
@import "@/assets/mixins/activity-and-introduction.scss";
</style>
