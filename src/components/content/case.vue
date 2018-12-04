<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText"/>
    <div>
      <ul>
        <li v-for="(item,index) in caseData" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import banner from "../banner/AboutBanner";
import bannerImg from "../../assets/image/About.jpg";
export default {
  components: {
    "v-banner": banner
  },
  props: {},
  data() {
    return {
      caseData: ["石材翻新", "开荒保洁", "外墙清洗"],
      bannerImg: bannerImg,
      bannerText: "工程案例"
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>