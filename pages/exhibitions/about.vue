<template lang="pug">
main
  img.full-width(src="~@/assets/images/schools/partial-banner.jpg")
  .title
    h1 關於展覽
  p.content 藝術是一座城市的文明指標，臺北市多元的藝文活動是城市美學的具體實踐，也為市民提供更美好的生活品質。
  p.content 藝術教育能培養欣賞與感受的能力，生活中的美俯拾即是，都可做為創作的素材，並傳達對社會的人文關懷，使心靈因藝術而美好。每年四月，臺北市10所藝術才能美術班的師生，齊聚臺北市藝文推廣處共同舉行美術聯合展演，將藝術創作分享給大家，希望為社會增添更多美感的觸動。
  p.content 今年的主題「心之所向」展現本年度臺北市各級學校美術班學生的創作成果，透過充滿原創力與想像力的作品，我們能感受到學子們傾注熱情追求藝術的堅定心情。
  p.content.last-content 由衷感謝臺北市復興高中、建安國小、民族國小、東園國小、古亭國中、金華國中、五常國中、百齡高中(國中部)、中正高中及明倫高中等10校美術班師長們的用心指導，以及臺北市藝文推廣處提供的專業展場，讓極具藝術天賦的學子們有展現創作的舞台，也為本市的藝術教育做更有效的推廣，歡迎各界人士一起來參觀指教。
  p.content-bottom 臺北市政府教育局局長  曾燦金  謹識
  p.content-bottom 民國110年3月12日
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
.content,
.content-bottom {
  margin: 40px 60px;
}

@media screen and (min-width: 768px) {
  .content,
  p.content-bottom {
    margin: 40px 120px;
  }
}

@media screen and (min-width: 1280px) {
  .content,
  p.content-bottom {
    margin: 40px 300px;
  }
}

.last-content {
  margin-bottom: 80px;
}

p.content-bottom {
  text-align: right;
}

.content-bottom {
  margin: 30px 60px;
}
</style>
