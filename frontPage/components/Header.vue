<template>
  <div>
    <nav class="nav">
      <div class="container">
        <div class="logo">
          <a href="#">Hlc</a>
        </div>
        <div id="mainListDiv" class="main_list">
          <ul class="navlinks">
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <span class="navTrigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Nav",
  components: {},
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped></style>
