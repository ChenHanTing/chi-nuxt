<template lang="pug">
Sidebar
  h1 {{ schoolName }}
  .school-cards
    .card(v-for="(item, index) in mySchool" @contextmenu.prevent="handler")
      NuxtLink(:to="`/schools/110/${$route.params.id}/${index + 1}`")
        .image
          img(:src="imagePath(index + 1)")
        .container
          h4 {{item.title}}
          p {{item.author}}
</template>

<script>
import { find, propEq } from 'ramda';
import { articleOneTen as schoolData, school} from '@/constant/school';
import Sidebar from "@/components/Sidebar110";
import website from "@/mixins/website";

export default {
  layout: "SchoolOneTen",
  mixins: [website],
  data() {
    return {
      mySchool: schoolData[this.$route.params.id],
    }
  },
  created() {},
  computed: {
    schoolName() {
      return find(propEq('key', this.$route.params.id))(school)?.name;
    },
  },
  components: { Sidebar },
  methods: {
    imagePath(item) {
      return `${this.imageBaseOneTen}/schools/${this.$route.params.id}/S/${item.toString().padStart(2, '0')}-1.jpg`;
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
  a {
    h4 {
      margin-bottom: 2px;
      padding-bottom: 2px;
    }

    p {
      margin-top: 2px;
      padding-top: 2px;
    }
  }
}
</style>
