<template>
  <div>
    <Header />
    <div class="verify">
      <div class="verify-form">
        <img src="/img/ic-verify.svg" />
        <h3>Please verify your email</h3>
        <p>You’re almost there! We sent an email to</p>
        <h4>wis*********@gmail.com</h4>
        <p>Just click on the button in that email to complete your sign up</p>
        <a>Can’t find the email?</a>
        <button>Resend email</button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./../components/Header";
export default {
  components: { Header },
  data() {
    return {
      tabActive: "login",
    };
  },
};
</script>
