<template lang="pug">
#sidebar
  .school-layout(v-if="isSchoolNav")
    .sidebar
      ul
        li(v-for="item in schools")
          router-link(:to="item.path") {{ item.name }}
    .tab-mobile
      table.mobile-tabs-wrapper
        tr(v-for="i in formatMobileTab")
          td(v-for="j in i")
            nuxt-link.mobile-tab(:to="j.path || ''")
              span {{ j.abbr }}
    .content
      slot
</template>

<script>
import website from "@/mixins/website";
import { map, splitEvery, last } from 'ramda';
import { list as schoolList } from "@/constant/schools/list"

const data = function () {
  return {
    dummyTab: { abbr: null, link: '#' },
  };
};

const methods = {
  formatDataWithDummy(givenData) {
    switch (givenData.length) {
      case 1:
        return [...givenData, ...Array(2).fill(this.dummyTab)];
      case 2:
        return [...givenData, this.dummyTab];
      default:
        return givenData;
    }
  },
};

export default {
  mixins: [website],
  name: "sidebar",
  methods,
  data,
  computed: {
    schools () {
      return map( el => ({ name: el.name, path: `/schools/${el.key}` }), schoolList)
    },
    abbrSchools () {
      return map( el => ({ abbr: el.abbr, path: `/schools/${el.key}` }), schoolList)
    },
    formatMobileTab() {
      const formattedData = splitEvery(3, this.abbrSchools);
      const lastData = last(formattedData);
      const formattedLastData = this.formatDataWithDummy(lastData);

      return [...formattedData.slice(0, -1), formattedLastData];
    },
  },
}
</script>

<style lang="scss" scoped>
  .content {
    @media screen and (min-width: 992px) {
      transform: translate3d(300px, 55px, 0);
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
      transform: translate3d(0, 55px, 0);
    }
    @media screen and (max-width: 767px) {
      transform: translate3d(0, 0, 0);
    }
  }

  .tab-mobile {
    @media screen and (min-width: 992px) {
      display: none;
    }
    @media screen and (max-width: 991px) {
      display: block;
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
      transform: translate3d(0, 72px, 0);
    }

    table,th,td {
      border: 1px solid var(--very-light-pink-two);
    }

    table {
      border-collapse: collapse;
    }

    th,td {
      padding: 10px 0;
    }

    table {
      table-layout: fixed;
      width: 100%;
    }

    /* 手機版頁籤 */
    a.mobile-tab {
      span {
        color: var(--brownish-grey);
        display: block;
        text-align: center;
      }
      &:hover {
        text-decoration: none;
        span {
          color: var(--sepia);
        }
      }
    }

    /* 手機版頁籤共同部分 */
    .mobile-seemore,
    .mobile-collapse {
      cursor: pointer;
      padding: 14px 0;
      text-align: center;
      span {
        &:after {
          font-family: 'Font Awesome 5 Free', serif;
          vertical-align: middle;
          display: inline-block;
          padding-left: 0.5rem;
          padding-right: 1rem;
          font-weight: 700;
        }
      }
    }
  }

  .sidebar {
    left: 0;
    height: 100%;
    margin: 0;
    padding: 0;
    /* 寬度訂工規較好設計 */
    @media screen and (max-width: 991px) and (min-width: 768px) {
      min-width: 270px;
    }
    @media screen and (min-width: 992px) {
      width: 300px;
      position: fixed;
    }
    @media screen and (max-width: 991px) {
      display: none;
    }

    box-shadow: 0 4px 4px rgba(0,0,0,.1);

    ul {
      /* default pl: 40px */
      padding-left: 0;
      padding-top: 60px;
      list-style: none;
      text-decoration: none;

      a {
        height: 100%;
        width: 100%;
        line-height: 30px;
        font-size: 16px;
        display: block;
        text-align: left;
        margin-left: 18px;
        color: var(--text-color);
        font-weight: var(--font-medium);
        text-decoration: none;
        box-sizing: border-box;
        border-top: 1px solid rgba(255, 255, 255, .1);
      }
    }
  }
</style>
