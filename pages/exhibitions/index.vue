<template lang="pug">
main
  img.full-width(src="~@/assets/images/banner-new.jpg")
</template>

<script>
import {siteType} from "@/constant/website";

export default {
  // layout: 'default',
  meta: { genre: siteType.school },
}
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";
</style>
