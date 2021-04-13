<template lang="pug">
  .chi-layout
    header#header.l-header.scroll-header(:class="tenSchoolBG")
      nav.nav.bd-container
        a.nav__logo(v-if="isChiNav" href='#') LOGO
        .nav-menu.nav__menu(v-if="isChiNav" :class="showNav")
          ul.nav__list
            li.nav__item(v-for="item in chiNavItem" @click="closeNav")
              router-link.nav__link(:to="item.path") {{ item.name }}
            // li
            //   i.theme-button.bx.bx-moon.change-theme
        a.nav__logo.ten-school(v-if="isSchoolNav" href='#')
          div 臺北市109學年度 各級學校美術班聯合展覽
        .nav-menu.nav__menu(v-if="isSchoolNav" :class="showNav")
          ul.nav__list
            li.nav__item(v-for="item in schoolNavItem" @click="closeNav")
              router-link.nav__link(:to="item.path", :class="tenSchoolColor") {{ item.name }}
            // li
            //   i.theme-button.bx.bx-moon.change-theme
        .nav-toggle.nav__toggle(
          @click="toggleNav",
          :class="tenSchoolColor"
        )
          i.bx.bx-menu
    nuxt
    footer.footer.section.footer-container(v-if="isSchoolNav", :class="footerRightShift")
      .footer__container.bd-grid
        .footer__content
          .footer-abc
            a.footer__logo.ten-school(href='#') 參與單位
            ul
              li
                .footer__link.ten-school-hover 主辦單位: 臺北市政府教育局
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
      // p.footer__copy
      //   span © 2021
      //   a.sweat-nonstop(href="https://han-react.netlify.app/sweat-nonstop/index")
      //     span 汗不停
</template>

<script>
import website from "@/mixins/website";
import { map, equals, filter, slice, includes } from 'ramda';
import { superNineNine, schoolExhibition } from '@/constant/website'
import {school as schoolList} from "@/constant/school";

export default {
  head () {
    return {
      title: '心之所向', // Other meta information
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '臺北市109學年度，各級學校美術班聯合展覽'
        }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' }, // 漢堡 icon
        { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css" }
      ],
    }
  },
  mixins: [website],
  name: "navbar",
  data() {
    return {
      isShowNav: false
    }
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
    openNav(){
      this.isShowNav = true
    },
    closeNav(){
      this.isShowNav = false
    }
  },
  computed: {
    tenSchoolColor() {
      return { "ten-school": this.isSchoolNav }
    },
    tenSchoolBG() {
      return { "ten-school-bg": this.isSchoolNav }
    },
    footerRightShift () {
      console.log('What is:', this.$route.name);
      const isShift = !includes(this.$route.name, ['exhibitions', 'exhibitions-about']);

      return { "footer-minus-sidebar": isShift }
    },
    schools () {
      return map( el => ({ name: el.name, path: `/schools/${el.key}` }), schoolList)
    },
    schools_0to5 () {
      return slice(0,5, this.schools)
    },
    schools_6to10 () {
      return slice(6,10, this.schools)
    },
    showNav() {
      return {'show-menu': this.isShowNav}
    },
    chiNavItem() {
      return [
        ...map(el => ({ path: el.path, name: el.name }), superNineNine),
        { path: '/exhibitions', name: '十校聯展' }
      ]
    },
    schoolNavItem() {
      return [
        ...map(
          el => ({ path: el.path, name: el.name.split('-')[1] }),
          filter( el => !equals(el.onNav, false), schoolExhibition)),
      ]
    }
  },
}
</script>



<style>
@import "@/assets/mixins/navbar.scss";
@import "@/assets/mixins/footer.scss";

.nav__logo.ten-school {
  font-size: 1.4rem;
}

.ten-school-bg {
  background: url('@/assets/images/schools/bg-02.jpg');
  background-repeat: repeat;
}

a.nav__logo.ten-school {
  color: var(--body-color);
}

i.bx.bx-menu {
  color: var(--body-color);
}

@media screen and (min-width: 768px) {
  .ten-school {
    color: var(--body-color);
  }

  .ten-school:hover {
    color: var(--ten-school-pink) !important;
  }
}
</style>
