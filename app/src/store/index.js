import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/products'
import Cart from './modules/cart'
import User from './modules/user'
import Order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Products,
    Cart,
    User,
    Order
  }
})
