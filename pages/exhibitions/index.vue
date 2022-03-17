<template lang="pug">
main
  img.full-width(:src="`${imageBase}/banner.jpg`")
</template>

<script>
import website from "@/mixins/website";

export default {
  layout: 'OneNine',
  mixins: [website],
}
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";
</style>
