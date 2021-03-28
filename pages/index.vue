<template lang="pug">
  div
    h2 Welcome to the best corny dad jokes app on the web
</template>

<script>
import {siteType} from "@/constant/website";

export default {
  meta: { genre: siteType.chi },
  head() {
    return {
      title: "10校聯合",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "10校聯合展覽",
        }

      ]
    };
  }
};
</script>

<style scoped lang="scss">

</style>
