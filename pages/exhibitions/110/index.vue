<template lang="pug">
main
  img.full-width(:src="`${imageBaseOneTen}/banner.jpg`")
</template>

<script>
import website from "@/mixins/website";

export default {
  layout: 'OneTen',
  mixins: [website],
}
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";
</style>
