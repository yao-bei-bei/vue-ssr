<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name:'APP',
  mounted() {
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState() {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  }
}
</script>
