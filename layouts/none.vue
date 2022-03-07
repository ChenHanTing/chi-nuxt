<template lang="pug">
  nuxt
</template>

<script>
export default {
  name: "none.vue",
  head () {
    return {
      title: '心之所向', // Other meta information
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `臺北市 ${this.$route.query.y ?? 109} 學年度 各級學校美術班聯合展覽`
        }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' }, // 漢堡 icon
        { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css" }
      ],
    }
  },
}
</script>

<style scoped>

</style>
