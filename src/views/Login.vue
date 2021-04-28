<template>
  <div>
    <Header />
    <div class="login">
      <div class="login-form">
        <div class="login-tabs">
          <div
            class="login-tab"
            :class="{ active: tabActive == 'login' }"
            @click="tabActive = 'login'"
          >
            Login
          </div>
          <div
            class="login-tab"
            :class="{ active: tabActive == 'signup' }"
            @click="tabActive = 'signup'"
          >
            Sign up
          </div>
        </div>
        <template v-if="tabActive == 'login'">
          <button class="btn btn-google">
            <img src="/img/ic-google.svg" />
            Continue with Google
          </button>
          <div class="login-or">or</div>

          <label>Email or username </label>
          <input placeholder="wisteria1906@gmail.com " />
          <label>Password </label>
          <input placeholder="*********" />
          <p>
            <a>Forgot password?</a>
          </p>
          <button class="btn btn-login" @click="$router.push('/?welcome=true')">Log in</button>
          <p class="text-center">
            Don’t have an account? <a @click="tabActive = 'signup'">Sign up</a>
          </p>
        </template>

        <template v-if="tabActive == 'signup'">
          <button class="btn btn-google">
            <img src="/img/ic-google.svg" />
            Continue with Google
          </button>
          <div class="login-or">or</div>

          <label>Email</label>
          <input placeholder="wisteria1906@gmail.com " />
          <label>Username</label>
          <input placeholder="wisteria_ingalls " />
          <label>Password </label>
          <input placeholder="*********" />
          <p>
            By signing up, you agree to Edsy Bitsy’s <a>Terms of Service</a> and
            <a>Privacy Policy</a>
          </p>
          <button class="btn btn-login" @click="$router.push('/')">
            Sign up
          </button>
          <p class="text-center">
            Already have an account? <a @click="tabActive = 'login'">Log in</a>
          </p>
        </template>
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
