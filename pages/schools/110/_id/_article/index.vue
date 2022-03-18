<template lang="pug">
  Sidebar
    h1
      span.article-title {{article.title}}
    .content-wrapper
      .swipe-image(@contextmenu.prevent="handler")
        i.fas.fa-chevron-circle-left.prev(@click="minus")
        i.fas.fa-chevron-circle-right.next(@click="plus")
        img(:src="imagePath()")
      .info-wrapper
        .author {{article.author}}
        .method {{article.tool}}
        .teacher {{article.teacher}}{{teacherSuffix(article.teacher)}}
        .article
          .title-and-video
            .title 作品說明
            .image(@click="openModal()" v-if="showVideoIcon")
              img(:src="`${this.imageBaseOneNine}/camera.png`")
          hr.border
          .desc {{article.description}}

    .modal-vue
      .overlay(v-if="showModal" @click="closeModal()")
      .modal(v-if='showModal')
        button.close(@click="closeModal()") x
        .videoWrapper
          video.video(controls)
            source(:src="videoPath()" type="video/mp4")

</template>

<script>
import Sidebar from "@/components/Sidebar110";
import {equals} from 'ramda';
import {article as schoolData} from "@/constant/school";
import website from "@/mixins/website";

export default {
  layout: "SchoolOneTen",
  components: { Sidebar },
  mixins: [website],
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
    },
    showVideoIcon() {
      try {
        return !!`${this.imageBaseOneNine}/video/${this.$route.params.id}/${this.$route.params.article.toString().padStart(2, '0')}.mp4`;
      } catch {
        try {
          return !!`${this.imageBaseOneNine}/video/${this.$route.params.id}/${this.$route.params.article.toString().padStart(2, '0')}.MP4`;
        } catch {
          return false
        }
      }
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
      const articleId = equals(parseInt(this.$route.params.article), this.schoolArticleLength) ? 1 : parseInt(this.$route.params.article) + 1

      this.$router.push({ params: { id: this.$route.params.id, article: articleId } })
    },
    minus() {
      const articleId = equals(parseInt(this.$route.params.article), 1) ?
                        this.schoolArticleLength :
                        parseInt(this.$route.params.article) -1

      this.$router.push({ params: { id: this.$route.params.id, article: articleId } })
    },
    imagePath() {
      try {
        return `${this.imageBaseOneNine}/articles/${this.$route.params.id}/${this.$route.params.article.toString().padStart(2, '0')}.jpg`;
      } catch(error) {
        return `${this.imageBaseOneNine}/articles/default/${this.$route.params.article}.jpg`;
      }
    },
    videoPath() {
      try {
        return `${this.imageBaseOneNine}/video/${this.$route.params.id}/${this.$route.params.article.toString().padStart(2, '0')}.mp4`;
      } catch(error) {
        try {
          return `${this.imageBaseOneNine}/video/${this.$route.params.id}/${this.$route.params.article.toString().padStart(2, '0')}.MP4`;
        } catch(error2) {
        }
      }
    },
    handler(e) {
      e.preventDefault();
    },
    teacherSuffix(teacher) {
      return (teacher.length === 0) ? null : '老師 指導'
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/mixins/school.scss";
@import "@/assets/mixins/school-article.scss";
</style>
