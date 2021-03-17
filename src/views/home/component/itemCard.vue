<template>
  <div
    class="itemCard"
    @click="$router.push({ name: 'product', params: { info: info } })"
  >
    <div class="img-wrap">
      <img src="@/assets/img/产品.png" alt="" />
    </div>
    <div class="item-text">
      <p>产品名称/型号</p>
      <span
        >这是一段产品的介绍这是一段产品的介绍这是dddd一段产品的介绍这是一段产品的介绍</span
      >
      <div class="link">
        <a href="">查看详情</a>
        <i class="iconfont">&#xe684;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.itemCard {
  width: 260px;
  font-size: 12px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover p {
    color: #000fff;
  }

  &:hover i {
    transform: translateX(12px);
  }
}

.itemCard .img-wrap {
  overflow: hidden;
}

.itemCard img {
  transition: all 0.6s;
}

.item-text {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 2px solid #f2f2f2;
  border-top: none;

  span {
    margin: 12px 0;
    height: 32px;
    color: #999;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 20px;
  }
}

.link {
  display: flex;
  color: #000fff;

  i {
    font-weight: 800;
    transition: all 0.6s;
  }
}
</style>
