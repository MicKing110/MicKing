<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText" />
    <div class="body">
     <p>  众捷国际环境清洁（北京）有限公司成立于2014年，是一家集商业、写字楼、小区、酒店、公寓、政府机关、工厂的环境清洁、石材翻新、外墙清洗粉刷、大型餐饮、城市园林绿化、虫害防治等一体的综合性环境清洁服务公司。
公司实行现代化管理模式，为下岗职工和农村剩余劳动力提供就业机会。</p>
    <p>公司组织机构健全，管理制度完善，运行廉洁高效。公司下设保洁部、工程部、市场部、品质部、财务部等职能机构；公司大力实施人才战略，各部门管理人员和技术人员均受过不同程度的专业技术培训。公司注重企业文化，始终强调管理和服务的重要性，积极探索市场变幻，多方面、立体式进行自我完善与发展。
公司现有员工500多人，管理人员30多人以及国际一流的专业清洁设备、产品，全体员工在“为客户提供方便、快捷、高品质的清洁服务”目标的指导和共同努力下，先后承接了诸多知名楼盘和品牌的日常保洁、楼宇开荒、外墙清洗、石材翻新、外景灯具安装、绿化及养护工程等项目，得到各项目管理部的大力好评，今后公司会进一步适应现代的要求，与国际接轨，以专业创造品质，满足广大客户对清洁水平的更高要求。
</p>
    <p>公司自成立以来，坚持勇于开拓、创新、信守合同、以服务质量争市场为立身之本，注重培养员工素质与专业技能，在竞争激烈的市场中，以优质高效的服务、专业的技术技能，以赢得客户的长久信赖与支持为目标。
</p>
    <p>  众捷将以更加至诚，更加专业，更高服务的标准回报客户，回报社会。</p>
    </div>
  </div>
</template>

<script>
import banner from '../banner/AboutBanner';
import bannerImg from '../../assets/image/About.jpg'
export default {
  components:{
    'v-banner':banner
  },
  props:{},
  data(){
    return {
      "bannerImg":bannerImg,
      "bannerText":'关于我们'
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
.wrapper{
  .body{
    padding: 40px 0 40px 0;
    p{
      font-size: 14px;
      line-height: 30px;
      text-indent: 2em;
    }
  }
}
</style>