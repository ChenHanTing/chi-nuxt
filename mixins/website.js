import { mapGetters } from 'vuex';
import {map} from "ramda";
import {superNineNine} from "@/constant/website";

const computed = {
  ...mapGetters({ getWebsite: 'getWebsite' }),
}

export default {
  data() {
    return {
      isShowNav: false
    };
  },
  methods: {
    /* @click="toggleNav */
    toggleNav() {
      this.isShowNav = !this.isShowNav;
    },
    openNav() {
      this.isShowNav = true;
    },
    closeNav() {
      this.isShowNav = false;
    }
  },
  computed: {
    showNav() {
      return { "show-menu": this.isShowNav };
    },
  },
}
