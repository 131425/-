<template>
  <div class="order">
    <div class="order-top">
      <div class="order-top-box">
        <img src="../assets/images/timer.png" alt="">
        <div class="order-top-right">
          <h2>118号桌待门店接单</h2>
          <p>请及时联系服务员确认一点菜品信息!</p>
        </div>
      </div>
      <h3>已点菜品6份,合计 : <span class="price">60元</span> </h3>
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
  </div>
</template>

<script>
export default {
  name: 'Order',
  data(){
    return{
    }
  },
}
</script>

<style lang="scss" scoped>
.order{
  padding: 1rem;
  .order-top{
    background: white;
    .order-top-box{
      display: flex;
      align-items: center;
      padding-top: 1rem;
      .order-top-right{
        margin-left: 1rem;
        p{
          font-size:1.2rem;
          line-height: 2;
        }
      }
    }
    h3{
      margin:1rem 0 0 1rem;
      padding-bottom: 1rem;
      span{
        font-size: 2.4rem;
        color: red;
      }
    }
  }
  .order-bottom{
    margin-top: 1rem;
    background: white;
    padding:1rem;
    .order-list{
      margin-top: 1rem;
      li{
        display:flex;
        line-height:2rem;
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

