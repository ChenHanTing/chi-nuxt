<template lang="pug">
main
  img.full-width(:src="image")
  .home-page-container
    router-link.home-page-btn(type="button" to="/schools/mces")
      span 進入線上藝廊
</template>

<script>
import {host} from "@/constant/website";

export default {
  layout: 'OneTen',
  created() {},
  computed: {
    image() {
      return `${host}/110/banner.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";

.home-page-container {
  display: flex;
  margin-top: 50px;
  width: 100%;

  .home-page-btn {
    background-color: #dcdcdd;
    cursor: pointer;
    font-weight: bold;
    margin: 100px auto 0;
    height: 64px;
    width: 250px;
    z-index: 3;
    border: white 3px solid;
    box-shadow: 0 0 0 10px #9f9fa0;
    position: relative;
    display: flex;

    span {
      margin: 14px auto 0;
      font-size: 1.33rem;
      color: #3e3a39;
      position: relative;

      &::before {
        content: '\f105';
        color: #3e3a39 !important;
        font-family: 'Font Awesome 5 Free';
        position: absolute;
        right: -30px;
        top: 4px;
      }

      &:hover {
        color: var(--brownish-grey);
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
      background: #9f9fa0;
      z-index: 2;
      height: 70px;
      width: 250px;

      box-shadow: 0 0 36px 30px #9f9fa0;
      transform: scale(.7);
      opacity: .2;
    }
  }
}
</style>

