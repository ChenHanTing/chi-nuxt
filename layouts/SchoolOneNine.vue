<template lang="pug">
  .chi-layout
    header#header.l-header.scroll-header.ten-school-bg
      nav.nav.bd-container
        a.nav__logo.ten-school.article-nav(href='#')
          div
        .nav-menu.nav__menu(:class="showNav")
          ul.nav__list
            li.nav__item(v-for="item in schoolNavItem" @click="closeNav")
              router-link.nav__link.ten-school.article-nav-item(:to="item.path") {{ item.name }}
        .nav-toggle.nav__toggle(@click="toggleNav")
          i.bx.bx-menu.article-nav
    nuxt
    footer.footer.section.footer-container.footer-minus-sidebar
      .footer__container.bd-grid
        .footer__content
          .footer-abc
            a.footer__logo.ten-school(href='#') 參與單位
            ul
              li
                .footer__link.ten-school-hover 主辦單位: 臺北市政府教育局12345
              li
                .footer__link.ten-school-hover 承辦單位: 臺北市復興高級中學
        .footer__content
          .footer-abc
            a.footer__logo.ten-school(href='#') 協辦單位
            ul
              li(v-for="item in schoolsFront")
                router-link.footer__link.ten-school-hover(:to="item.path") {{ item.name }}
        .footer__content
          .footer-abc
            a.footer__logo.ten-school(href='#')
            ul.y-shift
              li(v-for="item in schoolsRear")
                router-link.footer__link.ten-school-hover(:to="item.path") {{ item.name }}
</template>

<script>
import website from "@/mixins/website";
import { schoolExhibition } from "@/constant/website";
import { school as schoolList } from "@/constant/school";
import { map, equals, filter, slice } from "ramda";

export default {
  head() {
    return {
      title: "心之所向",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "臺北市109學年度 各級學校美術班聯合展覽"
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/109y.png' },
      ]
    };
  },
  mixins: [website],
  name: "navbar",
  computed: {
    schools() {
      return map(
        el => ({ name: el.name, path: `/schools/${el.key}` }),
        schoolList
      );
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
          el => ({ path: el.path, name: el.name.split("-")[1] }),
          filter(el => !equals(el.onNav, false), schoolExhibition)
        )
      ];
    },
  },
  created() {
  },
  layout: 'SchoolOneNine'
};
</script>

<style lang="scss" scoped>
.ten-school-bg {
  background: url("http://super-ninenine.synology.me/schools/bg-02.jpg");
  background-repeat: repeat;
}
</style>

<style lang="scss">
@import "@/assets/mixins/navbar.scss";
@import "@/assets/mixins/footer.scss";
@import "@/assets/mixins/109y.scss";
</style>
