<template>
  <div class="page-quiz">
    <div class="page-quiz-banner">
      <img :src="data.thumbnail" />
      <div class="page-quiz-action">
        <p class="page-quiz-title">{{ data.title }}</p>
        <button class="btn btn-basic" v-if="data.type == 'library'">
          <img src="/img/ic-delete.svg" />
          Delete
        </button>
        <button class="btn btn-outline-info">
          <img src="/img/ic-share.svg" />
          Share
        </button>
      </div>
    </div>

    <div class="question-list">
      <p class="question-list-title">Questions (3)</p>
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
    </div>
    <div class="page-quiz-footer" v-if="isMobile">
      <button class="btn btn-basic" v-if="data.type == 'library'">
        <img src="/img/ic-delete.svg" />
        Delete
      </button>
      <button class="btn btn-outline-info">
        <img src="/img/ic-share.svg" />
        Share
      </button>
    </div>
  </div>
</template>
<script>
import { library } from "./../assets/data.js";
import QuestionItem from "./../components/QuestionItem";
export default {
  components: { QuestionItem },
  data() {
    return {
      data: {},
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    },
  },
  created() {
    const id = this.$route.params.id;
    this.data = library.find((i) => i.id == id);
  },
};
</script>
