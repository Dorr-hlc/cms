<template>
  <div class="home">
    <MyHeader />
    <section class="home"></section>
    <div class="content">1121</div>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    handleScroll() {
      const nav = document.querySelector(".nav");
      if (window.pageYOffset > 50) {
        nav.classList.add("affix");
        console.log("OK");
      } else {
        nav.classList.remove("affix");
      }
    },
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="less" scoped>
.home {
  .content {
    min-height: 500px;
  }
}
</style>
