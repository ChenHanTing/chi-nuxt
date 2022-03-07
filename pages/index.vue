<template lang="pug">
</template>

<script>
import {siteType} from "@/constant/website";

export default {
  meta: { genre: siteType.chi },
  head () {
    return {
      title: "心之所向",
      meta: [
        { property: 'og:title', content: '心之所向' },
        { property: 'og:description', content: `臺北市 ${this.$route.query.y ?? 109} 學年度 各級學校美術班聯合展覽` },
        { property: 'og:site_name', content: '心之所向' },
        { property: 'og:locale', content: 'zh_TW' },
        {
          hid: "description",
          name: "description",
          content: `臺北市${this.$route.query.y ?? 109}學年度 各級學校美術班聯合展覽`,
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">

</style>
