<template>
  <div class="toolBar" @click="isShowTool = !isShowTool">
    <i class="iconfont">&#xe612;</i>
    <transition name="fade">
      <div class="tool" v-show="isShowTool">
        <i class="iconfont "></i>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isShowTool: false,
      toolList: [
        { path: "/home", icon: "&#xe60f;", class: "one" },
        { path: "/search", icon: "&#xe616;", class: "two" },
        { path: "/tel", icon: "&#xe64b;", class: "three" },
        { path: "/email", icon: "&#xe654;", class: "four" }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.toolBar {
  position: fixed;
  top: 50%;
  left: 8px;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #888888;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 999;
}

.toolBar .iconfont {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 40px;
  color: #999;
}

.tool {
  position: relative;
}

.tool .iconfont {
  border-radius: 50%;
  font-size: 24px;
}

.tool .one {
  transform: translateX(-12px) translateY(-50px);
}
.tool .two {
  transform: translateX(-70px) translateY(-15px);
}

.tool .three {
  transform: translateX(-70px) translateY(35px);
}
.tool .four {
  transform: translateX(-12px) translateY(80px);
}
</style>
