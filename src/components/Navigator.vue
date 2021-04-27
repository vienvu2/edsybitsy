<template>
  <div class="navigator">
    <div class="navigator-back" @click="$router.go(-1)">
      <img src="/img/ic-back.svg" />
    </div>
    <div class="navigator-space" />
    <router-link class="navigator-item" to="/" tag="div">
      <img src="/img/ic-home.svg" />
      <p>
        Home
      </p>
    </router-link>
    <router-link class="navigator-item" to="/library" tag="div">
      <img src="/img/ic-book.svg" />
      <p>
        Library
      </p>
    </router-link>
  </div>
</template>
