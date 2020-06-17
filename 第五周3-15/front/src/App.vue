<template>
  <div id="app">
    <dong-header></dong-header>
    <router-view></router-view>
    <dong-footer></dong-footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    'dong-header': Header,
    'dong-footer': Footer
  }
}
</script>
<style lang="scss">
@import 'assets/layui/css/layui.css';
@import 'assets/css/global.css';
@import 'assets/layui/css/modules/layer/default/layer.css';

.error {
  color: red;
}
.svg {
  top: -4px;
}
</style>
