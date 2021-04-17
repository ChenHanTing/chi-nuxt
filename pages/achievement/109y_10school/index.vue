<template lang="pug">
main
  img.full-width(src="~@/assets/images/banner-new.jpg")
  .home-page-container
    router-link.home-page-btn(type="button" to="/schools/mces")
      span 進入線上藝廊
</template>

<script>
import {siteType} from "@/constant/website";

export default {
  // layout: 'default',
  meta: { genre: siteType.school },
  created() {
    // console.log(this.$route)
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";

.home-page-container {
  display: flex;
  margin-top: 50px;
  width: 100%;

  .home-page-btn {
    background-image: linear-gradient(to right, #1B5BAF, #142A90);
    cursor: pointer;
    font-weight: bold;
    margin: 100px auto 0;
    height: 64px;
    width: 250px;
    z-index: 3;
    border-radius: 56px;
    border: white 3px solid;
    box-shadow: 0 0 0 10px #1845A1;
    position: relative;
    display: flex;

    span {
      margin: 14px auto 0;
      font-size: 1.33rem;
      color: white;
      position: relative;

      &::before {
        content: '\f105';
        color: white !important;
        font-family: 'Font Awesome 5 Free';
        position: absolute;
        right: -30px;
        top: 4px;
      }

      &:hover {
        color: yellow;
      }
    }

    /* 加入陰影 */
    &::before {
      content: '';
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      bottom: -6px;
      background: #1B5BAF;
      z-index: 2;
      height: 70px;
      width: 250px;

      border-radius: 32px;
      box-shadow: 0 0 36px 30px #1B5BAF;
      transform: scale(.7);
      opacity: .2;
    }
  }
}
</style>

