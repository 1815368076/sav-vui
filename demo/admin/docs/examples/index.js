import Example from './Example.vue'
import Api from './Api.vue'

import BtnModify from './button/BtnModify.vue'

import GridRow from './grid/GridRow.vue'
import GridCol from './grid/GridCol.vue'
import GridColOffset from './grid/GridColOffset.vue'

import RadioSingle from './radio/RadioSingle.vue'
import RadioBoolean from './radio/RadioBoolean.vue'
import RadioGroup from './radio/RadioGroup.vue'

import CheckBasic from './check/CheckBasic.vue'
import CheckBoolean from './check/CheckBoolean.vue'

export function install (Vue) {
  Object.keys(components).forEach((it) => {
    Vue.component(it, components[it])
  })
}

let components = {
  BtnModify,

  GridRow,
  GridCol,
  GridColOffset,

  RadioSingle,
  RadioBoolean,
  RadioGroup,

  CheckBasic,
  CheckBoolean,

  Api,
  Example
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

export default components
