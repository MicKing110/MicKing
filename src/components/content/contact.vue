<template>
  <div class="wrapper">
    <v-banner :img="bannerImg" :text="bannerText"/>
    <div class="body contact">
      <div class="contactText">
        <h4>北京众捷国际环境清洁有限公司</h4>
        <p>座机:010-65488518</p>
        <p>手机:xxxxxxxx</p>
        <p>QQ:18710009726</p>
        <p>邮箱:18710009726@sina.cn</p>
        <p>地址:北京市双桥路西6号3-2-402</p>
      </div>
      <div class="amap-page-container">
        <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
          <el-amap-info-window
            :position="currentWindow.position"
            :content="currentWindow.content"
            :visible="currentWindow.visible"
            :events="currentWindow.events">
          </el-amap-info-window>
        </el-amap>
        <button @click="switchWindow(0)">Show First Window</button>
        <button @click="switchWindow(1)">Show Second Window</button>
      </div>
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
      bannerImg: bannerImg,
      bannerText: "联系我们",
       msg: 'vue-amap向你问好！',
      zoom: 14,
      center: [116.571916,39.887537],
      windows: [
        {
          position: [116.571916,39.887537],
          content: '北京众捷国际环境清洁有限公司',
          visible: true,
          events: {
            close() {
              console.log('close infowindow1');
            }
          }
        }
      ],
      slotWindow: {
        position: [116.571916,39.887537]
      },
      currentWindow: {
        position: [0, 0],
        content: '',
        events: {},
        visible: false
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    switchWindow(tab) {
          this.currentWindow.visible = false;
          this.$nextTick(() => {
            this.currentWindow = this.windows[tab];
            this.currentWindow.visible = true;
          });
        }
  },
  created() {},
  mounted() {
    this.currentWindow = this.windows[0];
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  .contact{
    padding: 50px;
    display: flex;
    justify-content: space-around;
    .contactText{
      h4{
      font-size: 30px;
        line-height: 100px;
      }
      p{
        font-size: 18px;
        line-height: 50px;
      }
    }
    .amap-page-container{
      width: 500px;
      height: 500px;
    }
    
  }
}
</style>