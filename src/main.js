// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './config/rem'
import {RollNotice, RollNoticeItem} from 'vue-ydui/dist/lib.rem/rollnotice'
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider'
import {Accordion, AccordionItem} from 'vue-ydui/dist/lib.rem/accordion'
Vue.prototype.$http = axios
Vue.component(RollNotice.name, RollNotice)
Vue.component(RollNoticeItem.name, RollNoticeItem)
Vue.component(Slider.name, Slider)
Vue.component(SliderItem.name, SliderItem)
Vue.component(Accordion.name, Accordion)
Vue.component(AccordionItem.name, AccordionItem)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
