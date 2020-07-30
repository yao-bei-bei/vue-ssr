<template>
  <nav class="m-tabBar">
    <a href="/home1">跳转</a>
   <div style="color: red">
     {{botNavData}}
   </div>
<!--    <a :class="item.type === 'index' ? 'item active' : 'item'" :href="item.href" v-for="(item, index) in botNavData" :key="index">-->
<!--      <i :name="'tabBar-' + item.type " :class="'u-icon u-icon-tabBar-' + item.type "></i>-->
<!--      <span class="txt">{{item.value}}111</span>-->
<!--    </a>-->
  </nav>
</template>
<script>
  export default {
    name: 'BottomNav',
    props: {
      botNavData: {
        type: Array,
        default() {
          return
        }
      }
    }
  }
</script>
