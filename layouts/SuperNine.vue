<template lang="pug">
  .chi-layout
    header#header.l-header.scroll-header.ten-school-bg
      nav.nav.bd-container
        a.nav__logo(href='#') 九九數位
        .nav-menu.nav__menu(:class="showNav")
          ul.nav__list
            li.nav__item(v-for="item in navItem" @click="closeNav")
              router-link.nav__link(:to="item.path") {{ item.name }}
        .nav-toggle.nav__toggle(@click="toggleNav")
    nuxt.p-100
    footer.footer.section.footer-container
      .footer__container.bd-grid
        .footer__content
          .footer-abc
            a.footer__logo.ten-school(href='#') 九九數位
            ul
              li
                .footer__link.ten-school-hover -
              li
                .footer__link.ten-school-hover -
        .footer__content
          .footer-abc
            a.footer__logo.ten-school(href='#') 服務項目
            ul
              li(v-for="item in ['-']")
                router-link.footer__link.ten-school-hover(to="#") {{ item }}
        .footer__content
          .footer-abc
            a.footer__logo.ten-school(href='#')
            ul.y-shift
              li(v-for="item in ['-']")
                router-link.footer__link.ten-school-hover(to="#") {{ item }}
</template>

<script>
import website from "@/mixins/website";
import { map } from "ramda";
import { superNineNine } from "@/constant/website";

export default {
  head() {
    return {
      title: "九九數位",
      meta: [
        { hid: "title", name: "九九數位", content: "九九數位" },
        { hid: "description", name: "九九數位", content: "九九數位" },
        { hid: 'og:image', property: 'og:image', content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtm3dp9sYNV25HMrjT9ECXwBSAN4QnWoAgSQ&usqp=CAU" }
      ]
    };
  },
  mixins: [website],
  name: "navbar",
  computed: {
    navItem() {
      return [
        ...map(el => ({ path: el.path, name: el.name }), superNineNine)
      ];
    },
  },
  layout: "SuperNine",
};
</script>

<style lang="scss" scoped>
.p-100 {
  padding-top: 80px;
}
header {
  background-color: white;
}
</style>

<style lang="scss">
@import "@/assets/mixins/navbar.scss";
@import "@/assets/mixins/footer.scss";
</style>
