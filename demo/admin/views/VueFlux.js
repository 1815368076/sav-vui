// @NOTICE This file is generated by sav-cli.

// 全局的VUE组件需要在这里注册
// 其他需要用Vue的需要从这里引入
import VueRouter from 'vue-router'
import Vue from 'vue'
import {Flux, FluxVue} from 'sav-flux'

import SavComponents from '../../../src/index.js'
import SavModifies from '../../../src/modify.js'

Vue.use(VueRouter)
Vue.use(FluxVue)
Vue.use(SavComponents)
Vue.use(SavModifies)

export {Vue}
export {VueRouter}
export {Flux}
export {FluxVue}
