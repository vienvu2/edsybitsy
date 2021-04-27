<template>
  <div class="question-detail">
    <div class="question-banner">
      <img src="/img/banner.png" width="100%" />
    </div>
    <div class="question-input">
      <img src="/img/ic-search.svg" width="32" />
      <input placeholder="Search student’s name" />
      <img src="/img/ic-cancel.svg" width="32" />
    </div>
    <div class="question-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Answer</th>
            <th>Submission time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="i">
            <td>John Brown</td>
            <td>
              <img v-if="i % 2 == 0" src="/img/ic-play.svg" width="40" />
              <img v-else src="/img/ic-pause.svg" width="40" />
            </td>
            <td>04/19/2021 7:00PM</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-right">
      <Paging :total="100" :currentPage="1" :itemPerPage="25" />
    </div>
  </div>
</template>

<script>
import Paging from "./Paging";
export default {
  components: { Paging }
};
</script>
