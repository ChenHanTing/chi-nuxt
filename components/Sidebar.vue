<template lang="pug">
#sidebar
  .school-layout
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
@import "@/assets/mixins/sidebar.scss";

.sidebar {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 1%,
    rgba(255, 255, 255, 1)), url('http://super-ninenine.synology.me/109/schools/bg-01.jpg');
}
</style>
