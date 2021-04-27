<template>
  <div>
    <div class="question" @click="isMobile ? $router.push('/question/12') : null">
      <div class="question-thumb">
        <img
          src="https://znews-photo.zadn.vn/w660/Uploaded/mzjyy/2021_04_13/z2431841261287_b30a423d7a7facd5048484020ed0291b.jpg"
        />
      </div>
      <div class="question-content">
        <p class="question-index">Question 1</p>
        <h4 class="question-title">
          The body of the Egyptian Sphinx was based on which animal?
        </h4>
        <a v-if="isShow" class="question-action" @click="isShow = false">
          Hide answer <img src="/img/ic-up.svg" />
        </a>
        <a v-else class="question-action" @click="isShow = true">
          View answer <img src="/img/ic-down.svg" />
        </a>
      </div>
    </div>
    <QuestionDetail v-if="isShow" />
  </div>
</template>
<script>
import QuestionDetail from "./QuestionDetail";
export default {
  components: { QuestionDetail },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    },
  },
};
</script>
