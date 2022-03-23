<template lang="pug">
main
  img.full-width(:src="`${imageBaseOneTen}/partial-banner.jpg`")
  .title
    h1 關於展覽
  p.content 藝術是改變文化的關鍵，更是一座城市向上提升的要素。它可以營造都市的文化氛圍，彰顯國家文化的品味，進而激發民眾對未來生活的想像與創造。
  p.content 臺北市推動美感教育不遺餘力，從國小到國高中完整串連，小學是廣度的學習探索，在國高中則著重培養思考判斷與處理的能力，由下而上，扎根培力，提升國民的美感素養，厚植未來社會的軟實力。
  p.content 每年四月，臺北市10所藝術才能美術班的師生，共同舉行美術作品聯合展演，透過作品傳遞美感，也讓一般民眾感受生活中的美學。今年聯合展演的主題是「藝情時代」，運用水墨、素描、水彩等創作，展現各類風格，多元且豐富，作品反映出創作者對於這個時代的關心與想法，實踐對生命的熱愛，傳遞對共榮的期盼，藉以發揮創新、分享的當責力量，同時，亦充分呈現對藝術的熱忱及創作的旺盛企圖心。
  p.content 從全球化的思維與趨勢下，美感藝術也是一個國家的文化底蘊與競爭力的一環。由衷感謝臺北市建安國小、民族國小、東園國小、古亭國中、金華國中、五常國中、復興高中、百齡高中（國中部）、中正高中及明倫高中等10校美術班師長們的用心指導，以及臺北市青少年發展處提供的展覽空間，讓孩子們充分展現藝術原創力量，也為本市的美感教育做更有效的推廣，歡迎各界人士一起來參觀指教。

  p.content-bottom 臺北市政府教育局局長  曾燦金  謹識
  p.content-bottom 民國111年2月
</template>

<script>
import website from "@/mixins/website";

export default {
  layout: 'OneTen',
  mixins: [website],
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/full-image.scss";
@import "@/assets/mixins/10schools-about.scss";

h1 {
  border-bottom: 4px var(--ten-school-110) solid !important;
}
</style>
