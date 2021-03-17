<template>
  <div
    class="jumpButton-wrap"
    :style="{
      backgroundColor: btnData.backgroundColor,
      color: btnData.color
    }"
  >
    <router-link :to="btnData.path">VIEW MORE</router-link>
    <i class="iconfont">&#xe684;</i>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    btnData: Object
  },
  mounted() {},

  methods: {}
};
</script>

<style scoped>
.jumpButton-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 44px;
  text-align: center;
  border-radius: 5px;
}

.jumpButton-wrap:hover i {
  transform: translateX(10px);
}

.jumpButton-wrap i {
  margin-left: 6px;
  font-size: 20px;
  transition: all 0.6s;
}
</style>
