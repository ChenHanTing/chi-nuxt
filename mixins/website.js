import { mapGetters } from 'vuex';
import {host} from "@/constant/website";

const computed = {
  ...mapGetters({ getWebsite: 'getWebsite' }),
}

export default {
  data() {
    return {
      imageBaseOneNine: `${host}/109`,
      imageBaseOneTen: `${host}/110`,
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
