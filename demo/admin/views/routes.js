// @NOTICE This file is generated by sav-cli.

/* eslint quotes: ["off"] */
import Component from './Component/Component.vue'
import ComponentIndex from './Component/ComponentIndex.vue'
import Element from './Element/Element.vue'
import ElementIndex from './Element/ElementIndex.vue'
import Home from './Home/Home.vue'
import HomeIndex from './Home/HomeIndex.vue'
import Layout from './Layout/Layout.vue'
import LayoutIndex from './Layout/LayoutIndex.vue'
import Page from './Page/Page.vue'
import PageLogin from './Page/PageLogin.vue'
import PageRegister from './Page/PageRegister.vue'

export default [
  {
    component: Component,
    path: "/component",
    children: [
      {
        component: ComponentIndex,
        name: "ComponentIndex",
        path: ""
      }
    ]
  },
  {
    component: Element,
    path: "/element",
    children: [
      {
        component: ElementIndex,
        name: "ElementIndex",
        path: ""
      }
    ]
  },
  {
    component: Home,
    path: "/",
    children: [
      {
        component: HomeIndex,
        name: "HomeIndex",
        path: ""
      }
    ]
  },
  {
    component: Layout,
    path: "/layout",
    children: [
      {
        component: LayoutIndex,
        name: "LayoutIndex",
        path: ""
      }
    ]
  },
  {
    component: Page,
    path: "/page",
    children: [
      {
        component: PageLogin,
        name: "PageLogin",
        path: "login"
      },
      {
        component: PageRegister,
        name: "PageRegister",
        path: "register"
      }
    ]
  }
]
