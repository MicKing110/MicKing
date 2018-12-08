<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText"/>
    <div class="body Qualifications">
      <ul>
        <li v-for="(itme,index) in imageAll" :key='index'>
          <div>
            <img :src="itme.image" alt="">
          </div>
          <p>{{itme.text}}</p>
        </li>
      </ul>
       <!-- <Page :total="100" /> -->
    </div>
  </div>
</template>

<script>
// import { Page } from 'iview';
import banner from "../banner/AboutBanner";
import bannerImg from "../../assets/image/About.jpg";
import AllImage1 from '../../assets/image/1.jpg';
import AllImage2 from '../../assets/image/2.jpg';
import AllImage3 from '../../assets/image/3.jpg';
import AllImage4 from '../../assets/image/4.png';
import AllImage5 from '../../assets/image/5.jpg';
import AllImage6 from '../../assets/image/6.jpg';
import AllImage7 from '../../assets/image/7.jpg';
import AllImage8 from '../../assets/image/8.jpg';
import AllImage9 from '../../assets/image/9.jpg';
export default {
  components: {
    "v-banner": banner,
  },
  props: {},
  data() {
    return {
      bannerImg: bannerImg,
      bannerText: "资质证书",
      imageAll:[{
        image:AllImage1,
        text:'北京清洁协会会员单位'
      },{
        image:AllImage2,
        text:'资质证书'
      },{
        image:AllImage3,
        text:'营业执照'
      },{
        image:AllImage4,
        text:'中国石材协会会员证书'
      },{
        image:AllImage5,
        text:'诚信企业家荣誉证书'
      },{
        image:AllImage6,
        text:'诚信经纪人荣誉证书'
      },{
        image:AllImage7,
        text:'诚信服务信誉证书'
      },{
        image:AllImage8,
        text:'重合同守信证书'
      },{
        image:AllImage9,
        text:'诚信经营示范单位证书'
      }]
    }
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
  .Qualifications{
    ul{
      padding: 20px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        margin-top: 20px;
        cursor: pointer;
        div{
          width: 280px;
          height: 340px;
          border: 1px solid #ccc;
          display: flex;
          justify-content: center;
          align-content: center;
          img{
            max-width: 270px;
            height: 330px;
          }
        }

          p{
            width: 100%;
            text-align: center;
            line-height: 28px;
          }
        div:hover{
          border-color: #f00;
        }
      }
      
    }
  }
}
</style>