<template lang="pug">
  #sidebar
    .school-layout
      .sidebar
        ul
          li(v-for="item in schools")
            router-link(:to="item.path" :class="selected(item.id)")
              span {{ item.name }}
              .en {{ item.en }}
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
      return map( el => ({ name: el.name, path: `/schools/110/${el.key}`, id: el.key, en: el.en }), schoolList)
    },
    abbrSchools () {
      return map( el => ({ abbr: el.abbr, path: `/schools/110/${el.key}` }), schoolList)
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
@import "@/assets/mixins/sidebar.scss";

.en {
  width: 80%;
  margin: 0;
  padding-bottom: 1rem;
  font-size: .5rem;
  line-height: 1;
}
.sidebar {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 1%,
    rgba(255, 255, 255, 1)), url('http://super-ninenine.synology.me/110/schools/bg-01.jpg');

  li {
    a.selected {
      color: #004566 !important;

      &:before {
        color: #004566 !important;
      }
    }
  }
}
</style>
