<template lang="pug">
  .chi-layout
    header#header.l-header.scroll-header
      nav.nav.bd-container
        a.nav__logo.ten-school-110(href='#')
          div 臺北市110學年度 各級學校美術班聯合展覽
        .nav-menu.nav__menu(:class="showNav")
          ul.nav__list
            li.nav__item(v-for="item in schoolNavItem" @click="closeNav")
              router-link.nav__link.ten-school-110(:to="item.path")
                span {{ item.name }}
                span {{ item.en }}
        .nav-toggle.ten-school-110.d-lg-none(@click="toggleNav")
          i.bx.bx-menu
    nuxt
    footer.footer.section.footer-container
      .footer__container.bd-grid
        .footer__content
          .footer-abc
            a.footer__logo.ten-school-110(href='#') 參與單位
            ul
              li
                .footer__link.ten-school-110-hover 主辦單位: 臺北市政府教育局
              li
                .footer__link.ten-school-110-hover 承辦單位: 臺北市立五常國民中學
        .footer__content
          .footer-abc
            a.footer__logo.ten-school-110(href='#') 協辦單位
            ul
              li(v-for="item in schoolsFront")
                router-link.footer__link.ten-school-110-hover(:to="item.path") {{ item.name }}
        .footer__content
          .footer-abc
            a.footer__logo.ten-school-110(href='#')
            ul.y-shift
              li(v-for="item in schoolsRear")
                router-link.footer__link.ten-school-110-hover(:to="item.path") {{ item.name }}
</template>

<script>
import website from "@/mixins/website";
import { map, equals, filter, slice } from "ramda";
import {schoolExhibitionOneTen as schoolExhibition} from "@/constant/website";
import { school as schoolList } from "@/constant/school";
import pkg from "@/package.json";

export default {
  head() {
    return {
      title: "藝情時代",
      meta: [
        { hid: "description", name: "十校聯展", content: "臺北市110學年度各級學校美術班聯合展覽" },
        { hid: 'og:image', property: 'og:image', content: '/110y.png'},
        { hid: 'og:title'  , property: 'og:title', content: '藝情時代' },
        { hid: 'og:url'  , property: 'og:url', content: 'http://super-ninenine.synology.me/exhibitions/110/' },
        { hid: 'og:description', property: 'og:description', content: "藝情時代 - 臺北市110學年度各級學校美術班聯合展覽" },
        { hid: 'robots', name: "robots", content: "index,follow" },
        { hid: 'keywords', name: "keywords", content: "藝情時代,十校聯展,疫情時代,110,十校,九九數位,九九" },
        { hid: 'og:keywords', name: "og:keywords", content: "藝情時代,十校聯展,疫情時代,110,十校,九九數位,九九" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/110y.png' },
      ]
    };
  },
  mixins: [website],
  name: "navbar",
  computed: {
    schools() {
      return map(el => ({ name: el.name, path: `/schools/${el.key}` }), schoolList.filter(e => e.key !== "wjhs"));
    },
    schoolsFront() {
      return slice(0, 5, this.schools);
    },
    schoolsRear() {
      return slice(5, 10, this.schools);
    },
    schoolNavItem() {
      return [
        ...map(
          el => ({ path: el.path, name: el.name.split("-")[1], en: el.en }),
          filter(el => !equals(el.onNav, false), schoolExhibition)
        )
      ];
    },
  },
  created() {},
  layout: 'OneTen'
};
</script>

<style lang="scss" scoped>
.ten-school-110 {
  span {
    text-align: center;
    text-transform: capitalize;
  }
  span + span {
    display: block;
  }
}
</style>
<style lang="scss">
@import "@/assets/mixins/navbar.scss";
@import "@/assets/mixins/footer.scss";
@import "@/assets/mixins/109y.scss";
</style>
