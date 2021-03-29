<template lang="pug">
Sidebar
  h1 {{ schoolName }}
</template>

<script>
import { find, propEq } from 'ramda';
import { list } from '@/constant/schools/list';
import Sidebar from "@/components/Sidebar";
import {siteType} from "@/constant/website";

export default {
  meta: { genre: siteType.school },
  computed: {
    schoolName() {
      return find(propEq('key', this.$route.params.id))(list)?.name;
    }
  },
  components: { Sidebar }
};
</script>

<style scoped lang="scss">
@import "@/assets/mixins/school.scss";
</style>
