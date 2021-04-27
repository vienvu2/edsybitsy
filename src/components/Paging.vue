<template>
  <div class="text-center">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item "
          :class="{ disabled: currentPage == 1 }"
          @click="currentPage == 1 ? null : changePage(currentPage - 1)"
        >
          <a class="page-link">
            <
          </a>
        </li>
        <li class="page-item" v-for="page in pages" :key="page">
          <a
            class="page-link"
            :class="{ active: currentPage == page }"
            @click="changePage(page)"
            >{{ page }}</a
          >
        </li>
        <li
          class="page-item hide-sm"
          :class="{ disabled: currentPage == total }"
          @click="currentPage == total ? null : changePage(currentPage + 1)"
        >
          <a class="page-link">
          >
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: ["total", "currentPage", "itemPerPage"],
  watch: {
    total: function(newVal) {
      this.getPages(newVal, this.$props.currentPage);
    },
    currentPage: function(newVal) {
      this.getPages(this.$props.total, newVal);
    },
  },
  data: function() {
    return {
      pages: [],
    };
  },
  methods: {
    getPages(total, current) {
      let out = [];
      for (let i = 1; i <= total; i++) {
        let range = 2;
        if (current == 1) {
          range = 4;
        }
        if (current == 2) {
          range = 3;
        }
        if (current == this.$props.total) {
          range = 4;
        }
        if (current == this.$props.total - 1) {
          range = 3;
        }
        if (current - i >= range * -1 && current - i <= range) {
          out.push(i);
        }
      }
      this.pages = out;
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
  mounted() {
    this.getPages(this.$props.total, this.$props.currentPage);
  },
};
</script>
<style lang="scss" scoped></style>
