<template>
  <div class="popup" :class="{ show: isShow }" @click.self="close()">
    <div class="popup-content">
      <img class="popup-close" src="/img/ic-close.svg" @click="close()" />

      <img class="popup-banner" src="/img/welcom.svg" />
      <p>Congrats, Wisteria!</p>
      <h3>Welcome to Edsy Bitsy</h3>
      <h6>Thank you for joining our community!</h6>
      <button @click="close()">Let’s explore</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    open() {
      this.isShow = true;
    },
    close() {
      this.isShow = false;
      this.$emit("close");
    },
  },
};
</script>
