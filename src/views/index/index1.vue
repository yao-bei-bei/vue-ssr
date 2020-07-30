<template>
  <div class="g-bd">
    <div id="j-bd">
      <div class="g-row m-index">
       <div>wo1111{{data}}</div>
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
export default {
  name: "Index",
  components: {
    vHeader,
    vBanner,
    vFloorOne,
    vBottomNav
  },
  head(){
    return {
      'title': 'index1', // 默认title
      'author': 'index12', // 默认author
      'keywords': '2222', // 默认keywords
      'description': '22222', //默认description
    };
  },
  data() {
    return {
      headNavData: [],
      botNavData: []
    };
  },
  created() {
    // console.log(this.data)
  },
  methods: {
  },
  asyncData({ store, route }) {
    return store.dispatch('get')
  },
  computed: {
    data () {
      return this.$store.state.movie
    }
  }
};
</script>
<style lang="less" scoped>
.mint-field {
  background: #666;
}
</style>
