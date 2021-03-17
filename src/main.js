import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Element from "element-ui";
import "./assets/css/global.css";
import "./assets/fonts/iconfont.css";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";

Vue.use(Element);

Vue.directive("drag", {
  inserted(el) {
    el.onmousedown = function(e) {
      e.stopPropagation();
      let x = e.clientX - el.offsetLeft;
      let y = e.clientY - el.offsetTop;
      document.onmousemove = function(eve) {
        eve.stopPropagation();
        el.style.left = eve.clientX - x + "px";
        el.style.top = eve.clientY - y + "px";
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
