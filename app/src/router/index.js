import Vue from 'vue'
import VueRouter from 'vue-router'

import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CheckOut from '../views/Checkout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Error from '../views/Error.vue'
import OrderConfirm from '../views/OrderConfirm.vue'
import OrderHistory from '../views/OrderHistorik.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  },
  {
    path: '/orderconfirm',
    name: 'OrderConfirm',
    component: OrderConfirm,
    meta: { authorize: true}
  },
  {
    path: '/orderhistory',
    name: 'OrderHistory',
    component: OrderHistory,
    meta: { authorize: true}
  },
  {
    path: '/products/details/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
  path: '/checkout',
  name: 'CheckOut',
  component: CheckOut,
  props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const { authorize } = to.meta
  const loggedIn = store.getters.loggedIn
  
  if(authorize) {
    if(!loggedIn) {
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  }
  next()
})

export default router
