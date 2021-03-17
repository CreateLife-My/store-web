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
        { img: require("../../assets/img/guanggao.png") },
        { img: require("../../assets/img/guanggao.png") },
        { img: require("../../assets/img/guanggao.png") }
      ],
      headerStyle: false,
      productBtnData: {
        path: "/product",
        color: "#fff",
        backgroundColor: "#0000ff"
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
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
