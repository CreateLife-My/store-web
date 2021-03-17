<template>
  <div class="product" style="height:5000px">
    this is the news page.the transform param is
    {{ this.$route.params.order }} this is the news page.the transform param is
    {{ this.$route.query.order }}
  </div>
</template>

<script>
import { asd } from "@/unit/asd.js";

export default {
  components: {},
  data() {
    return {
      loading: false,
      post: null,
      error: null
    };
  },
  computed: {},
  watch: {
    $router: "fetchData"
  },
  created() {
    this.fetchData();
    asd(1, 2);
  },
  mounted() {},
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
    }
  }
};
</script>

<style scoped></style>
