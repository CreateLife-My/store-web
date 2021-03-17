<template src="./footer.html"></template>
<style src="./footer.less" lang="less" scope></style>

<script>
export default {
  components: {},
  data() {
    return {
      navInfo: [
        {
          name: "首页",
          path: "/"
        },
        {
          name: "产品中心",
          path: "/product"
        },
        {
          name: "解决方案",
          path: "/solution"
        },
        {
          name: "新闻动态",
          path: "/newmove"
        },
        {
          name: "关于我们",
          path: "/aboutus"
        },
        {
          name: "联系我们",
          path: "/contactus"
        }
      ]
    };
  }
};
</script>
