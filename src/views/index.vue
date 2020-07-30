<template>
  <div class="g-bd">
    <div id="j-bd">
      <div class="g-row m-index">
        <a href="/home1">111</a>
        <div v-html="data"></div>
        <!--        <v-header :nav-data="headNavData" />-->
        <!--        <v-banner />-->
        <!--        <v-floor-one />-->
                <v-bottom-nav :bot-nav-data="data1" />
      </div>
    </div>
  </div>
</template>
<script>
  import "@/assets/views/index.css";
  import vHeader from "@/components/Header.vue";
  import vBanner from "@/components/Banner.vue";
  import vFloorOne from "@/components/FloorOne.vue";
  import vBottomNav from "@/components/BottomNav.vue";
  import Service from "@/service"
  export default {
    name: "Index",
    components: {
      vHeader,
      vBanner,
      vFloorOne,
      vBottomNav
    },
    head() {
      return {
        'title': '1', // 默认title
        'author': '2', // 默认author
        'keywords': '我是keywords1111', // 默认keywords
        'description': '我是description1111', //默认description
      };
    },
    data() {
      return {
        headNavData: [],
        botNavData: [],
      };
    },
    beforeMount(){
      this.dataPromise.then(()=>{
        //对数据再处理
        //computed是在被调用时才会加载数据,data在初始化时不能直接调用computed的数据否则会抛出异常,可以把赋值操作放到这里
      })
    },
    created() {
      // console.log('服务')
      // console.log(this.data)

    },
    asyncData({store, route}) {
       return store.dispatch('getMovieList')
    },
    mounted() {
      // this.box()
    },
    methods:{
      // box(){
      //   Service.get().then(res=>{
      //     console.log(res.content)
      //   })
      // }
    },
    computed: {
      // 从 store 的 state 对象中的获取 item。
      data1 () {
        return this.$store.state.datalist
      },
      data () {
        return this.$store.state.movieList
      }

    },

  }
  ;
</script>
<style lang="less" scoped>
  .mint-field {
    background: #666;
  }
</style>
