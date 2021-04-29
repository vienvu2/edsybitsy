<template>
  <div>
    <Navigator v-if="isMobile && isChild" />
    <Header v-else />
    <div class="layout container">
      <div class="layout-left" v-if="!isChild || !isMobile">
        <Sidebar />
      </div>
      <div class="layout-right">
        <router-view />
      </div>
    </div>
    <WelcomePopup ref="welcomePopup" @close="closePopup()" />
  </div>
</template>
<script>
import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";
import Navigator from "./../components/Navigator";
import WelcomePopup from "./../components/WelcomePopup";
export default {
  components: { Header, Sidebar, Navigator, WelcomePopup },
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    },
    isChild() {
      return this.$route.path != "/library" && this.$route.path != "/explore";
    },
  },
  mounted() {
    if (this.$route.query.welcome) {
      this.$refs.welcomePopup.open();
    }
  },
  methods: {
    closePopup() {
      this.$router.push({ query: {} });
    },
  },
  watch: {
    "$route.path"() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
