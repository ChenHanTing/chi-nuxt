<template lang="pug">
  main
    img.full-width(:src="`${imageBaseOneTen}/partial-banner.jpg`")
    .title
      h1 活動花絮
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
      a: [...Array(15).keys()].map(n => ({ image: `activity/photo/${n+1}.jpg`, description: '展場圖片' })),
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  video {
    width: 90%;
    height: auto;
  }
}

.article {
  span {
    color: white;
  }
}


@import "@/assets/mixins/full-image.scss";
@import "@/assets/mixins/activity-and-introduction.scss";
</style>
