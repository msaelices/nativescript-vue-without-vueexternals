import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import fruits from './modules/fruits'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    fruits,
  },
  strict: debug,
})

Vue.prototype.$store = store

module.exports = store