<template>
  <router-link tag="div" :to="'/' + data.type + '/' + data.id" class="quiz">
    <img :src="data.thumbnail" />
    <div class="quiz-content">
      <p>{{ data.title }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["data"],
};
</script>
