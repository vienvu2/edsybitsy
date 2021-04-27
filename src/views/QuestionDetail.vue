<template>
  <div class="question-detail">
    <div class="question-banner">
      <img src="/img/banner.png" width="100%" />
    </div>

    <div class="question-mobile">
      <div class="question-mobile-title">
        <p>1. The body of the Egyptian Sphinx was based on which animal?</p>
      </div>
      <div class="question-mobile-content">
        <div class="question-input">
          <img src="/img/ic-search.svg" width="32" />
          <input placeholder="Search student’s name" />
          <img src="/img/ic-cancel.svg" width="32" />
        </div>
        <div class="question-items">
          <div
            class="question-item"
            v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            :key="i"
          >
            <div>
              <p class="question-item-name">{{ i }}. John Brown</p>
              <p class="question-item-date">04/19/2021 7:00PM</p>
            </div>

            <img v-if="i % 2 == 0" src="/img/ic-play.svg" width="40" />
            <img v-else src="/img/ic-pause.svg" width="40" />
          </div>
        </div>
        <div class="text-center">
          <Paging :total="100" :currentPage="1" :itemPerPage="25" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Paging from "./../components/Paging";
export default {
  components: { Paging },
};
</script>
