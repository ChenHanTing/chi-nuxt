<template lang="pug">
  Sidebar
    h1
      span.article-title 我的秘密花園
    .content-wrapper
      .swipe-image
        i.fas.fa-chevron-circle-left.prev(@click="minus")
        i.fas.fa-chevron-circle-right.next(@click="plus")
        img(:src="imagePath(position)")
      .info-wrapper
        .author {{article.author}}
        .method {{article.tool}}
        .teacher {{article.teacher}}老師 指導
        .article
          .title 作品說明
          .desc {{article.description}}
</template>

<script>
import Sidebar from "@/components/Sidebar";
import {siteType} from "@/constant/website";
import {content} from "@/constant/schools/content";
import {equals} from 'ramda';

export default {
  meta: { genre: siteType.school },
  components: { Sidebar },
  data() {
    return {
      article: content[0],
      position: 0,
    }
  },
  methods: {
    plus() {
      this.position = (equals(this.position, this.article.picNum) ? 0 : this.position + 1);
    },
    minus() {
      this.position = (equals(this.position, 0) ? this.article.picNum - 1 : this.position - 1);
    },
    imagePath(position) {
      try {
        return require(`@/assets/images/articles/${this.article.genre}/${position+1}.jpg`);
      } catch(error) {
        return require(`@/assets/images/articles/default/${position+1}.jpg`);
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/mixins/school.scss";

.article-title {
  border-bottom: 3px var(--ten-school-pink) solid;
}
.swipe-image {
  display: flex;
  justify-content: center;
  margin: 80px auto 20px;
}

.prev,
.next {
  font-size: 3rem;
  position: absolute;
  top: 250px;
}

.prev { left: 5% }
.next { right: 5% }

@media screen and (max-width: 991px) {
  .prev, .next {top: 110%}
  .prev {left: 45%}
  .next {left: 55%}
}

@media screen and (max-width: 576px) {
  .prev { left: 44% }
  .next { left: 56% }
}

.swipe-image {
  position: relative;
  height: 500px;
  img {
    max-width: 90%;
    object-fit: contain;
  }
}

.info-wrapper {
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (max-width: 991px) {
    padding: 80px 20px 20px 50px;
  }
  text-align: left;
  font-size: 21px;
  line-height: 1.4;
  font-weight: 300;
  letter-spacing: 0.12em;

  .author {
    font-size: 22px;
    font-weight: 500;
    line-height: 85px;
  }

  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: 7.5px;
  }

  .teacher {
    margin-bottom: 30px;
  }
}
</style>
