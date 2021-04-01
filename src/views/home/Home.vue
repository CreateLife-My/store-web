<template src="./Home.html"></template>
<style src="./Home.less" lang="less" scoped></style>

<script>
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ToolBar from "../../components/toolBar/ToolBar";
import JumpButton from "./component/jumpButton";
import itemCard from "./component/itemCard";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    Header,
    Footer,
    JumpButton,
    itemCard,
    swiper,
    swiperSlide,
    ToolBar
  },
  data() {
    return {
      productSwiperOption: {
        loop: true,
        speed: 500,
        // spaceBetween: 8,
        slidesPerView: 4,
        simulateTouch: false,
        mode: "horizontal",
        navigation: {
          nextEl: ".next",
          prevEl: ".prev"
        },
        breakpoints: {
          1300: {
            slidesPerView: 3
          },
          1080: {
            spaceBetween: 16,
            slidesPerView: 2
          },
          767: {
            slidesPerView: 1
          }
        }
      },
      imageList: [
        {
          img: require("../../assets/img/guanggao.png"),
          imga: require("../../assets/img/guanggao640.jpg")
        },
        {
          img: require("../../assets/img/guanggao.png"),
          imga: require("../../assets/img/guanggao640.jpg")
        },
        {
          img: require("../../assets/img/guanggao.png"),
          imga: require("../../assets/img/guanggao640.jpg")
        }
      ],
      headerStyle: false,
      productBtnData: {
        path: "/product",
        color: "#fff",
        backgroundColor: "#0000ff"
      },

      screenWidth: 0
      // changeImg: true
    };
  },
  computed: {
    changeImg() {
      if (this.screenWidth < 992) {
        return false;
      } else {
        return true;
      }
    },

    carouselHeigth() {
      if (this.screenWidth < 992) {
        return (this.screenWidth * 340) / 640 + "px";
      } else {
        return 700 + "px";
      }
    }
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          // console.log(this.screenWidth);
          that.timer = false;
        }, 400);
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.screenWidth = document.body.clientWidth;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
      })();
    };
  },
  mounted() {},
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let header = document.querySelector("#nav-header");
      if (window.screen.width > 992) {
        if (scrollTop >= header.clientHeight) {
          this.headerStyle = true;
        } else {
          this.headerStyle = false;
        }
      }
    }
  }
};
</script>

<style scoped></style>
