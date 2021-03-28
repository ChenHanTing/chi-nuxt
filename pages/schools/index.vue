<template lang="pug">
  Sidebar
    h1 學校
</template>

<script>
import Sidebar from "@/components/Sidebar";
import {siteType} from "@/constant/website";

export default {
  meta: { genre: siteType.school },
  components: { Sidebar }
}
</script>
