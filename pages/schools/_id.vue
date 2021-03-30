<template lang="pug">
Sidebar
  h1 {{ schoolName }}
  .school-cards
    .card(v-for="(item, index) in mySchool")
      .image
        img(:src="imagePath")
      .container
        h4 {{item.title}} {{item.id}}
        p {{item.content}}
</template>

<script>
import { find, propEq } from 'ramda';
import {detail as schoolData, list} from '@/constant/schools/list';
import Sidebar from "@/components/Sidebar";
import {siteType} from "@/constant/website";

export default {
  meta: { genre: siteType.school },
  data() {
    return {
      mySchool: schoolData[this.$route.params.id]
    }
  },
  created() {
    console.log(this.$route.params.id);
    console.log('school data:', schoolData);
    console.log('school mces:', schoolData['mces']);
    console.log('school current:', schoolData[this.$route.params.id]);
    console.log('My school:', this.mySchool)
  },
  computed: {
    schoolName() {
      return find(propEq('key', this.$route.params.id))(list)?.name;
    },
    imagePath() {
      try {
        return require(`@/assets/images/schools/${$route.params.id}/${item.id}.jpg`);
      } catch(error) {
        return require(`@/assets/images/schools/default.jpg`);
      }
    }
  },
  components: { Sidebar }
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

      font-size: 16px;
      text-align: center;
      letter-spacing: 0.122em;
      h4 {
        line-height: 0.1;
        font-weight: 500;
      }
      p {
        line-height: 1;
        font-weight: 400;
      }
    }
  }
}
</style>
