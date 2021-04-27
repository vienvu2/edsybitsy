<template>
  <div class="page">
    <h3 class="page-title">Library</h3>
    <div class="page-list">
      <div class="page-list-item" v-for="(item, idx) in list" :key="idx">
        <QuizItem :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import QuizItem from "./../components/QuizItem.vue";
import {library} from "./../assets/data.js"
export default {
  data() {
    return {
      list: library,
    };
  },
  components: { QuizItem },
};
</script>
