<template lang="pug">
  .chi-layout
    header#header.l-header.scroll-header
      nav.nav.bd-container
        a.nav__logo(v-if="isChiNav" href='#') LOGO
        .nav-menu.nav__menu(v-if="isChiNav" :class="showNav")
          ul.nav__list
            li.nav__item(v-for="item in chiNavItem")
              router-link.nav__link(:to="item.path") {{ item.name }}
            li
              i.theme-button.bx.bx-moon.change-theme
        a.nav__logo(v-if="isSchoolNav" href='#')
          div 台北市109學年度
          div 各級學校美術班聯合展覽
        .nav-menu.nav__menu(v-if="isSchoolNav" :class="showNav")
          ul.nav__list
            li.nav__item(v-for="item in schoolNavItem")
              router-link.nav__link(:to="item.path") {{ item.name }}
            li
              i.theme-button.bx.bx-moon.change-theme
        .nav-toggle.nav__toggle(@click="toggleNav")
          i.bx.bx-menu
    nuxt
</template>

<script>
import website from "@/mixins/website";
import { map, equals, filter } from 'ramda';
import { superNineNine, schoolExhibition } from '@/constant/website'

export default {
  head () {
    return {
      title: 'Payment Page - My awesome project', // Other meta information
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css'} // 漢堡 icon
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
    toggleNav() {
      this.isShowNav = !this.isShowNav;
    },
  },
  computed: {
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
        { path: '/', name: '返回首頁' }
      ]
    }
  },
}
</script>



<style>

</style>
