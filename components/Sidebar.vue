<template lang="pug">
#sidebar
  .school-layout(v-if="isSchoolNav")
    .sidebar
      ul
        li(v-for="item in schools")
          router-link(:to="item.path" :class="selected(item.id)") {{ item.name }}
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
import { map, splitEvery, last, equals } from 'ramda';
import { school as schoolList } from "@/constant/school"

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
  selected(id) {
    return { selected: equals(this.$route.params.id, id) }
  }
};

export default {
  mixins: [website],
  name: "sidebar",
  methods,
  data,
  computed: {
    schools () {
      return map( el => ({ name: el.name, path: `/schools/${el.key}`, id: el.key }), schoolList)
    },
    abbrSchools () {
      return map( el => ({ abbr: el.abbr, path: `/schools/${el.key}` }), schoolList)
    },
    formatMobileTab () {
      const formattedData = splitEvery(3, this.abbrSchools);
      const lastData = last(formattedData);
      const formattedLastData = this.formatDataWithDummy(lastData);

      return [...formattedData.slice(0, -1), formattedLastData];
    },
  },
}
</script>

<style lang="scss" scoped>
  $sidebar-width: 300px;

  .content {
    @media screen and (min-width: 992px) {
      width: calc(100% - 300px);
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
          color: var(--ten-school-light-blue);
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
    padding-left: 10px;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 1%,
      rgba(255,255,255,1)), url('http://super-ninenine.synology.me/schools/bg-01.jpg');

    /* 寬度訂工規較好設計 */
    @media screen and (min-width: 992px) {
      width: $sidebar-width;
      position: fixed;
    }
    @media screen and (max-width: 991px) {
      display: none;
    }

    box-shadow: 0 4px 4px rgba(0, 0, 0, .1);

    ul {
      /* default pl: 40px */
      padding-left: 0;
      padding-top: 60px;
      text-decoration: none;

      a.selected {
        color: var(--ten-school-pink);

        &:before {
          content: '▶';
          color: var(--ten-school-pink);
          position: absolute;
          left: 4px;
        }
      }

      a {
        height: 100%;
        width: 100%;
        line-height: 40px;
        font-size: 16px;
        display: block;
        text-align: left;
        margin-left: 18px;
        font-size: 1.13rem;
        color: var(--body-color);
        font-weight: var(--font-semi-bold);
        text-decoration: none;
        box-sizing: border-box;
        border-top: 1px solid rgba(255, 255, 255, .1);

        //&:hover {
        //  color: var(--ten-school-pink);
        //  font-weight: 800;
        //}

        &:hover:before {
        }
      }
    }
  }
</style>
