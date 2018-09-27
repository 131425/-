import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Edit from '@/components/Edit'
import Home from '@/components/Home'
import Content from '@/components/Content'
import Hot from '@/components/Hot'
import ShopCart from '@/components/ShopCart'
import Order from '@/components/Order'
import OrderPay from '@/components/OrderPay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: '/hot',
      name: 'hot',
      component: Hot
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: ShopCart
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/OrderPay',
      name: 'orderpay',
      component: OrderPay
    }
  ]
})
