<template lang="pug">
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
