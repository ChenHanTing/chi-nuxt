<template lang="pug">
  Sidebar
    h1
      span.article-title {{article.title}}
    .content-wrapper
      .swipe-image(@contextmenu.prevent="handler")
        i.fas.fa-chevron-circle-left.prev(@click="minus")
        i.fas.fa-chevron-circle-right.next(@click="plus")
        img(:src="imagePath")
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
import {articleOneTen as schoolData} from "@/constant/school";
import website from "@/mixins/website";
import {host} from "@/constant/website";

export default {
  head() {
    return {
      title: this.article.title,
      meta: [
        { hid: 'og:image', property: 'og:image', content: this.imagePath },
        { hid: 'og:title'  , property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/110y.png' },
      ]
    };
  },
  layout: "SchoolOneTen",
  components: { Sidebar },
  mixins: [website],
  data() {
    return {
      schoolArticle: schoolData[this.$route.params.id],
      article: schoolData[this.$route.params.id][parseInt(this.$route.params.article)-1],
      showModal: false,
      position: 0,
      firstMp4: `${host}/110/video/${this.$route.params.id}/${this.$route.params.article.toString()}.mp4`,
      secondMp4: `${host}/110/video/${this.$route.params.id}/${this.$route.params.article.toString().padStart(2, '0')}.MP4`,
      imagePath: `${host}/110/schools/${this.$route.params.id}/${this.$route.params.article.toString().padStart(2, '0')}.jpg`,
    }
  },
  computed: {
    schoolArticleLength() {
      return this.schoolArticle.length
    },
    showVideoIcon() {
      /**
       * Access to XMLHttpRequest at 'http://super-ninenine.synology.me/110/video/fhsh/4.mp4' from origin 'http://localhost:3000'
       * has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
       */

      // return await this.checkImage(this.firstMp4) || await this.checkImage(this.secondMp4)
      return true;
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
    videoPath() {
      return this.firstMp4;
      // return await this.checkImage(this.firstMp4) ? this.firstMp4 :
      //        await this.checkImage(this.secondMp4) ? this.secondMp4 :
      //        null
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
