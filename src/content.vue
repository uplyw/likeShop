<template>
  <div class="content-box">
    <mt-header fixed title="类商城"></mt-header>
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/contact" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/cart" class="mui-tab-item">
        <span class="mui-icon fa fa-shopping-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="search" class="mui-tab-item">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <transition>
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="sass" scoped>
.content-box{
  padding-top:40px;
  padding-bottom:54px;
}
.v-enter,.v-leave-to{
  opacity:0;
  transform:translateX(100%)
}
.v-leave-to{
  opacity:0;
  transform:translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition:all .5s ease;
}
</style>
