<template>
  <div class="sidebar">
    <div class="sidebar-user">
      <img src="/img/face.png" />
      <p class="sidebar-user-name">Laura Ingalls</p>
    </div>
    <div class="sidebar-menu">
      <router-link
        tag="div"
        :to="menu.url"
        class="sidebar-menu-item"
        v-for="menu in menus"
        :key="menu.key"
      >
        <img class="ic-active" :src="menu.iconActive" />
        <img class="ic" :src="menu.icon" />
        <p>
          {{ menu.name }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          url: "/explore",
          key: "explore",
          name: "Explore",
          icon: "/img/ic-explore.svg",
          iconActive: "/img/ic-explore-active.svg",
        },
        {
          url: "/library",
          key: "library",
          name: "Library",
          icon: "/img/ic-library.svg",
          iconActive: "/img/ic-library-active.svg",
        },
      ],
    };
  },
};
</script>
