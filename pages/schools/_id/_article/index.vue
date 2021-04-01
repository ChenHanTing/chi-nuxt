<template lang="pug">
  Sidebar
    h1
      span.article-title {{article.title}}
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
import {equals} from 'ramda';
import {article as schoolData} from "@/constant/school";

export default {
  meta: { genre: siteType.school },
  components: { Sidebar },
  data() {
    return {
      schoolArticle: schoolData[this.$route.params.id],
      article: schoolData[this.$route.params.id][parseInt(this.$route.params.article)-1],
      position: 0,
    }
  },
  computed: {
    schoolArticleLength() {
      return this.schoolArticle.length
    }
  },
  methods: {
    plus() {
      const articleId = equals(parseInt(this.$route.params.article) + 1, this.schoolArticleLength) ? 1 : parseInt(this.$route.params.article) + 1

      this.$router.push({ params: { id: this.$route.params.id, article: articleId } })
    },
    minus() {
      const articleId = equals(this.$route.params.article - 1, 0) ?
                        this.schoolArticleLength - 1 :
                        parseInt(this.$route.params.article) - 1

      this.$router.push({ params: { id: this.$route.params.id, article: articleId } })
    },
    imagePath() {
      try {
        return require(`@/assets/images/articles/${this.$route.params.id}/${this.$route.params.article.toString().padStart(2, '0')}.jpg`);
      } catch(error) {
        console.log('Error:', error);
        return require(`@/assets/images/articles/default/${this.$route.params.article}.jpg`);
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
  top: 50%;
}

.prev { left: 5% }
.next { right: 5% }

@media screen and (max-width: 991px) {
  .prev, .next {top: 100%}
  .prev {left: 42%}
  .next {left: 52%}
}

@media screen and (max-width: 576px) {
  .prev { left: 44% }
  .next { left: 56% }
  .prev,
  .next {
    font-size: 2rem;
  }
}

.swipe-image {
  position: relative;
  height: 1000px;
  img {
    max-width: 80%;
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
