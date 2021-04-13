<template lang="pug">
Sidebar
  h1 {{ schoolName }}
  .school-cards
    .card(v-for="(item, index) in mySchool" @contextmenu.prevent="handler")
      NuxtLink(:to="`/schools/${$route.params.id}/${index+1}`")
        .image
          img(:src="imagePath(index+1)")
        .container
          h4 {{item.title}}
          p {{item.author}}
</template>

<script>
import { find, propEq } from 'ramda';
import {article as schoolData, school} from '@/constant/school';
import Sidebar from "@/components/Sidebar";
import {siteType} from "@/constant/website";

export default {
  meta: { genre: siteType.school },
  data() {
    return {
      mySchool: schoolData[this.$route.params.id],
    }
  },
  created() {
  },
  computed: {
    schoolName() {
      return find(propEq('key', this.$route.params.id))(school)?.name;
    },
  },
  components: { Sidebar },
  methods: {
    /**
     * 謝謝踩雷，雷坑:
     * https://forum.freecodecamp.org/t/problem-with-image-path-generated-from-function-in-react/249420
     */
    imagePath(item) {
      const forwardLink = `@/assets/images/schools/${this.$route.params.id}/${item.toString().padStart(2, '0')}-2`
      const fallbackLink = `@/assets/images/schools/${Math.floor(Math.random()*2)}_default.jpg`

      try {
        console.log('What is the link(1):', `${forwardLink}.jpg`);
        return require(`@/assets/images/schools/${this.$route.params.id}/${item.toString().padStart(2, '0')}-2.jpg`);
      } catch(e) {
        console.log('First layer error: ', e);
        try {
          console.log('What is the link(2):', `${forwardLink}.tif`);
          return require(`@/assets/images/schools/${this.$route.params.id}/${item.toString().padStart(2, '0')}-2.tif`);
        } catch(err) {
          console.log('Second layer error: ', err);
          console.log('What is the link(3):', fallbackLink);
          return require(`@/assets/images/schools/${Math.floor(Math.random()*2)}_default.jpg`);
        }
      }
    },
    handler(e) {
      e.preventDefault();
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/mixins/school.scss";

.school-cards {
  display: grid;
  padding-left: 20px;
  padding-right: 2rem;
  gap: 20px 2rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  .card {
    height: 250px;
    .image {
      display: flex;
      justify-content: center;
      height: 184px;
      img {
        height: 100%
      }
    }
    .container {
      height: 80px;
      padding-left: 14px;
      padding-right: 14px;
      font-size: 16px;
      text-align: center;
      letter-spacing: 0.122em;
      h4 {
        color: #3e3a39;
        line-height: 1rem;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p {
        color: #3e3a39;
        line-height: 1;
        font-weight: 400;
      }
    }
  }
}
</style>
