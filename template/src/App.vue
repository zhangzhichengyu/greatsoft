<style>
.main {
  height: 100%;
  width: 100%;
}
</style>

<template>
  <div>
    <div class="main-view">
      <router-view></router-view>
    </div>
    <gs-alert></gs-alert>
    <gs-autotip></gs-autotip>
    <gs-loading></gs-loading>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  ready () {
    let userInfo = this.$root.userInfo || true
    if (!userInfo) {
      this.$go('/login')
    } else {
      this.$go('/home')
    }
  }
}
</script>
