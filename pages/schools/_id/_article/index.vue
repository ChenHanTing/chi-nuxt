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
          .title-and-video
            .title 作品說明
            .image(@click="openModal()")
              img(:src="require('@/assets/images/camera.png')")
          hr.border
          .desc {{article.description}}

    .modal-vue
      .overlay(v-if="showModal" @click="closeModal()")
      .modal(v-if='showModal')
        button.close(@click="closeModal()") x
        .videoWrapper
          iframe(src='https://www.youtube.com/embed/BS6blX035NM' title='YouTube video player')
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
      showModal: false,
      position: 0,
    }
  },
  computed: {
    schoolArticleLength() {
      return this.schoolArticle.length
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
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

/*============ 彈跳視窗 ============*/
.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, .5); */
}

.modal-vue .modal {
  position: fixed;
  top: 150vh;
  left: 20%;
  width: 80%;
  max-width: 600px;
  height: auto;
  z-index: 9999;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 7px;
}

@media screen and (max-width: 575px) {
  .modal-vue .modal {
    height: 50vh;
    left: 10%;
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .modal-vue .modal {
    height: 60vh;
    left: 10%;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .modal-vue .modal {
    height: 65vh;
    left: 15%;
  }
}

@media screen and (min-width: 991px) {
  .modal-vue .modal {
    height: 400px;
  }
}


.modal-vue .close{
  position: absolute;
  top: 4px;
  right: 6px;
  border: none;
  padding: 8px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.videoWrapper {
  height: 0;
  margin: auto;
  z-index: 1;
  position: relative;
  padding-top: 25px;
  padding-bottom: 56.25%;
  display: block;
  /* overflow: hidden; */

  iframe {
    display: block;
    top: 30px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
  }
}
/*============ 彈跳視窗 ============*/

.article-title {
  border-bottom: 3px var(--ten-school-pink) solid;
}

hr.border {
  border: 1px var(--ten-school-pink) solid;
}

.title-and-video {
  display: flex;
  .title {
    padding-bottom: 12px;
    margin-right: 20px;
  }
  .image {
    width: 40px;
    height: 40px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
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
  .prev { left: 40% }
  .next { left: 52% }
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
    font-size: 26px;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: 7.5px;
  }

  .teacher {
    margin-bottom: 30px;
  }
}
</style>
