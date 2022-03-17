<template lang="pug">
  .chi-layout
    header#header.l-header.scroll-header.ten-school-bg
      nav.nav.bd-container
        a.nav__logo.ten-school(href='#' :class="articleNav")
          div {{getTitle}}
        .nav-menu.nav__menu(:class="showNav")
          ul.nav__list
            li.nav__item(v-for="item in schoolNavItem" @click="closeNav")
              router-link.nav__link(:to="item.path", :class="tenSchoolNavItemColor") {{ item.name }}
        .nav-toggle.nav__toggle(
          @click="toggleNav",
          :class="tenSchoolNavItemColor"
        )
          i.bx.bx-menu(:class="articleNav")
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
              li(v-for="item in schools_0to5")
                router-link.footer__link.ten-school-hover(:to="item.path") {{ item.name }}
        .footer__content
          .footer-abc
            a.footer__logo.ten-school(href='#')
            ul.y-shift
              li(v-for="item in schools_6to10")
                router-link.footer__link.ten-school-hover(:to="item.path") {{ item.name }}
</template>

<script>
import website from "@/mixins/website";
import { map, equals, filter, slice, includes } from "ramda";
import {
  superNineNine,
  schoolExhibition,
  host,
  currentYear
} from "@/constant/website";
import { school as schoolList } from "@/constant/school";

export default {
  head() {
    return {
      title: "心之所向", // Other meta information
      meta: [
        {
          hid: "description",
          name: "description",
          content: `臺北市 ${this.$route.query.y ??
          109} 學年度 各級學校美術班聯合展覽`
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
        }, // 漢堡 icon
        {
          rel: "stylesheet",
          href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        }
      ]
    };
  },
  mixins: [website],
  name: "navbar",
  data() {
    return {
      isShowNav: false
    };
  },
  methods: {
    /* @click="toggleNav */
    toggleNav() {
      this.isShowNav = !this.isShowNav;
    },
    /**
     * @mouseover="mouseoverNav",
     * @mouseleave="mouseleaveNav",
     */
    openNav() {
      this.isShowNav = true;
    },
    closeNav() {
      this.isShowNav = false;
    }
  },
  computed: {
    articlePage() {
      return this.isSchoolNav && !includes(this.$route.name, true);
    },
    is109y() {
      return includes(this.$route.name, ["achievement-109y_10school"]);
    },
    articleNav() {
      return { "article-nav": this.articlePage };
    },
    tenSchoolNavItemColor() {
      return {
        "ten-school": this.isSchoolNav,
        "article-nav-item": this.articlePage,
        "page-109y": this.is109y
      };
    },
    tenSchoolBG() {
      return { "ten-school-bg": this.articlePage };
    },
    schools() {
      return map(
        el => ({ name: el.name, path: `/schools/${el.key}` }),
        schoolList
      );
    },
    schools_0to5() {
      return slice(0, 5, this.schools);
    },
    schools_6to10() {
      return slice(5, 10, this.schools);
    },
    showNav() {
      return { "show-menu": this.isShowNav };
    },
    chiNavItem() {
      return [
        ...map(el => ({ path: el.path, name: el.name }), superNineNine),
        { path: "/exhibitions", name: "十校聯展" }
      ];
    },
    schoolNavItem() {
      return [
        ...map(
          el => ({ path: el.path, name: el.name.split("-")[1] }),
          filter(el => !equals(el.onNav, false), schoolExhibition)
        )
      ];
    },
    getTitle() {
      if (this.$route.name === "achievement-110y_10school") {
        return `臺北市 110 學年度 各級學校美術班聯合展覽`;
      } else if (this.$route.name === "achievement-109y_10school") {
        return `臺北市 109 學年度 各級學校美術班聯合展覽`;
      }
    }
  },
  created() {
  },
  layout: 'schoolOneNine'
};
</script>

<style lang="scss">
@import "@/assets/mixins/navbar.scss";
@import "@/assets/mixins/footer.scss";
@import "@/assets/mixins/109y.scss";

.ten-school-bg {
  background: url("http://super-ninenine.synology.me/schools/bg-02.jpg");
  background-repeat: repeat;
}
</style>
