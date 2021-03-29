<template lang="pug">
main
  img.full-width(src="~@/assets/images/schools/partial-banner.jpg")
  .title
    h1 關於展覽
  p.content Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</template>

<script>
import {siteType} from "@/constant/website";

export default {
  meta: { genre: siteType.school },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";

.title {
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  h1 {
    text-align: center;
    padding-bottom: 1px;
    border-bottom: 4px var(--ten-school-title-blue) solid;
  }
}
.content {
  margin: 40px 40px 80px 40px;
}
</style>
