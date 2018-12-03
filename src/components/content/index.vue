<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText" />
    <div>
      服务范围
    </div>
    <div>
      新闻动态
      News information
    </div>
    <div>
      公司概况
      Enterprise general situation
    </div>
     <div>
      我们的资质认证
一张张证书，是您的保障，更是家喜保洁的负责态度
    </div>
  </div>
</template>

<script>
import banner from '../banner/AboutBanner';
import bannerImg from '../../assets/image/banner.jpg'
export default {
  components:{
    'v-banner':banner
  },
  props:{},
  data(){
    return {
      "bannerImg":bannerImg,
      "bannerText":'内容'
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.wrapper{}
</style>