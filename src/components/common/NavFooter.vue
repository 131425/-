<template>
  <div class="nav-box">
    <!-- 底部导航 -->
    <div class="bottom">
      <div class="bottom-left" @click="navClick">
        <img src="../../assets/images/navigation.png" alt="">
        <p>导航</p>
      </div>
      <router-link to="/home" tag="div" class="bottom-middle">
        <img src="../../assets/images/menu.png" alt="">
        <p>菜单</p>
      </router-link>
      <router-link class="bottom-right" tag="div" to="/shopcart">
        <img src="../../assets/images/cart.png" alt="">
        <p>购物车</p>
        <span v-if="num>0">{{num}}</span>
      </router-link>
      <!-- <router-link class="bottom-right" tag="div" to="/order">
        <img src="../../assets/images/doorder.png" alt="">
        <p>下单</p>
        <span v-if="num>0">{{num}}</span>
      </router-link> -->
    </div>

    <!-- 导航浮层 -->
    <!--  v-if="navFloat"  -->
    <div class="nav-floats" ref="navbox">
      <ul>
        <router-link to="/home" tag="li">
          <img src="../../assets/images/menu.png" alt="">
          <p>菜单</p>
        </router-link>
        <router-link to="/shopcart" tag="li">
          <img src="../../assets/images/cart.png" alt="">
          <p>购物车</p>
        </router-link>
        <router-link to="/order" tag="li">
          <img src="../../assets/images/order.png" alt="">
          <p>我的订单</p>
        </router-link>
        <router-link to="/orderpay" tag="li">
          <img src="../../assets/images/wallet.png" alt="">
          <p>结账</p>
        </router-link>
        <li @click="navClose">
          <img src="../../assets/images/close.png" alt="">
          <p>返回</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter',
  props:{
    num: Number
  },
  data(){
    return{
      navFloat: false,
    }
  },
  methods:{
    navClick(){
      this.navFloat = true;
      this.$refs.navbox.style.transform = 'translate(0,0)';
    },
    navClose(){
      this.navFloat = false;
      this.$refs.navbox.style.transform = 'translate(-100%,100%)';
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom{
  position: fixed;
  bottom: 4rem;
  width: 100%;
  height: 6rem;
  left: 0;
  div{
    width: 5rem;
    padding: 0.85rem 0;
    border-radius: 50%;
    position: absolute;
    text-align: center;
    background: rgba(0,0,0,0.9);
    color:white;
    &.bottom-right{
      right: 1rem;
      background: red;
      span{
        position: absolute;
        background: red;
        color:white;
        top: -0.5rem;
        right: -0.5rem;
        padding: 0.2rem;
        font-size: 1.2rem;
        text-align: center;
        border-radius: 50px;
        line-height: 1.5;
        min-width: 1.5rem;
        display: inline-block;
      }
    }
    &.bottom-left{
      left: 1rem;
    }
    &.bottom-middle{
      left:50%;
      margin-left: -2.5rem;
    }
    img{
      width: 1.5rem;
    }
  }
}
.nav-floats{
  transition: all 0.3s;
  transform: translate(-100%,100%);
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  top:0;
  left:0;
  z-index: 3;
  ul{
    li{
      width: 5rem;
      padding: 0.85rem 0;
      border-radius: 50%;
      background: rgba(0,0,0,0.9);
      text-align: center;
      color:white;
      img{
        width: 1.5rem;
      }
      &:nth-child(1){
        position: fixed;
        bottom: 18rem;
        left: 1rem;
      }
      &:nth-child(2){
        position: fixed;
        bottom: 13.5rem;
        left: 6.5rem;
      }
      &:nth-child(3){
        position: fixed;
        bottom: 7.5rem;
        left: 10.5rem;
      }
      &:nth-child(4){
        position: fixed;
        bottom: 1.3rem;
        left: 13.5rem;
      }
      &:nth-child(5){
        position: fixed;
        bottom: 5rem;
        left: 1rem;
      }
    }
  }
}
</style>


