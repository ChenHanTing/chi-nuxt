<template lang="pug">
main
  img.full-width(:src="`${imageBase}/banner.jpg`")
</template>

<script>
import {siteType} from "@/constant/website";
import website from "@/mixins/website";

export default {
  // layout: 'default',
  meta: { genre: siteType.school },
  mixins: [website],
}
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";
</style>
