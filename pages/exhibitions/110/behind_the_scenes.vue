<template lang="pug">
  main
    img.full-width(:src="`${imageBaseOneTen}/partial-banner.jpg`")
    .title
      h1 側錄影片
    .gallery
      video.video(v-for="item in b" controls)
        source(:src="`${imageBaseOneTen}/${item.image}`" type="video/mp4")
    .article
      span 有沒有學生想要留悄悄話在這裡，可以來信k445566778899k@gmail.com
</template>

<script>
import website from "@/mixins/website";

export default {
  layout: 'OneTen',
  mixins: [website],
  data() {
    return {
      b: [...Array(6).keys()].map(n => ({ image: `activity/video/${n+1}.mp4`, description: '展場圖片' })),
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
.secret {

}

@import "@/assets/mixins/full-image.scss";
@import "@/assets/mixins/activity-and-introduction.scss";
</style>
