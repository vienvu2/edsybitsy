<template>
  <div>
    <Navigator v-if="isMobile && isChild" />
    <Header v-else />
    <div class="layout container">
      <div class="layout-left" v-if="!isChild">
        <Sidebar />
      </div>
      <div class="layout-right">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";
import Navigator from "./../components/Navigator";
export default {
  components: { Header, Sidebar, Navigator },
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    },
    isChild() {
      return this.$route.path != "/library" && this.$route.path != "/explore";
    },
  },
  watch: {
    "$route.path"() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
