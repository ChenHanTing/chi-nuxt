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
import website from "@/mixins/website";

export default {
  layout: "schoolOneNine",
  mixins: [website],
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
      try {
        return `${this.imageBase}/schools/${this.$route.params.id}/${item.toString().padStart(2, '0')}-2.jpg`;
      } catch(e) {
        try {
          return `${this.imageBase}/schools/${this.$route.params.id}/${item.toString().padStart(2, '0')}-2.tif`;
        } catch(err) {
          return `${this.imageBase}/schools/${Math.floor(Math.random()*2)}_default.jpg`;
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
</style>
