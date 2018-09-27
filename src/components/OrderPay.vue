<template>
  <div class="order">
    <div class="order-top">
      <div class="order-already">
        <h2>已下单的菜</h2>
        <ul class="already">
          <li>桌号：001</li>
          <li>人数:2</li>
          <li>下单时间:6:25</li>
        </ul>
      </div>
      <div class="price-box">
         <h3>应付金额 : <span class="price">60元</span> </h3>
         <button class="pay">立即支付</button>
      </div>
    </div>

    <div class="order-bottom">
      <h3>菜品详情：</h3>
      <ul class="order-list">
        <li>
          <div class="order-name">辣椒炒肉</div>
          <div class="order-count">1份</div>
          <div class="order-price">25元</div>
        </li>
        <li>
          <div class="order-name">辣椒炒肉</div>
          <div class="order-count">1份</div>
          <div class="order-price">25元</div>
        </li>
      </ul>
    </div>

    <!-- 首页导航 -->
    <index-nav></index-nav>
  </div>
</template>

<script>
import indexNav from './common/NavFooter.vue';

export default {
  name: 'Order',
  data(){
    return{
    }
  },
  components:{
    indexNav
  },
}
</script>

<style lang="scss" scoped>
.order{
  padding: 1rem;
  .order-top{
    background: white;
    .order-already{
      padding:1rem;
      text-align: center;
      .already{
        display: flex;
        border-bottom: 1px solid #eeeeee;
        li{
          flex: 1;
          padding: 1rem 0.5rem;
          font-size: 0.24rem;
        }
      }
    }
    .price-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      h3{
        margin:1rem 0 0 1rem;
        padding-bottom:1rem;
        span{
          font-size: 2.4rem;
          color: red;
        }
      }
      .pay{
        width: 6rem;
        height: 2.5rem;
        line-height: 2.5rem;
        border: none;
        background: red;
        color: white;
        border-radius: 3px;
      }
    }
  }
  .order-bottom{
    margin-top:1rem;
    background: white;
    padding: 1rem;
    .order-list{
      margin-top: 1rem;
      li{
        display:flex;
        line-height: 2rem;
        font-size: 1.2rem;
        .order-name{
          flex: 1;
        }
        .order-count,.order-price{
          min-width: 5rem;
          text-align: center;
        }
      }
    }
  }
}
</style>

