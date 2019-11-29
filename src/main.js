import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

//vant完全引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

import {SubmitBar,Card,GoodsAction,GoodsActionIcon,GoodsActionButton,PullRefresh,List,NavBar,Icon,Button,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload,Tab, Tabs,CellGroup,Field,Toast,Row,Col} from 'vant'
Vue.use(SubmitBar).use(Card).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(PullRefresh).use(List).use(NavBar).use(Icon).use(Button).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(CellGroup).use(Field).use(Toast).use(Row).use(Col)

import '@/mock/mock.js';

//vant按需引入
// import {
//   SubmitBar,
//   Card,
//   GoodsAction,
//   GoodsActionBigBtn,
//   GoodsActionMiniBtn, PullRefresh, List, Row, Col, Toast, CellGroup, Field, Tab, Tabs, Button, Icon, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload
// } from 'vant'
// Vue.use(SubmitBar).use(Card).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(PullRefresh).use(List).use(Row).use(Col).use(Toast).use(CellGroup).use(Field).use(Tab).use(Tabs).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
