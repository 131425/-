<template>
  <div class="cart">
    <div class="bg-white">
      <h2 class="cart-title">购物车</h2>
      <div class="have">
        <div class="have-left">
          <div class="have-people">用餐人数: {{infoList.p_num}}</div>
          <div class="have-remark">备注: <span>{{infoList.p_mark}}</span></div>
        </div>
        <router-link to="/edit" tag="div" class="have-right">
          <img src="../assets/images/edit.png" alt="">
          <p>修改</p>
        </router-link>
      </div>
      <div class="total-box">
        <div>购物车中总共有 <span>{{totalCount}}</span> 个菜</div>
        <div>总计：<h1 class="total">&yen;{{total}}</h1></div>
      </div>
    </div>

    <div class="cart-list">
      <ul>
        <li v-for="(item,key) in goodsList" :key="item._id">
          <div class="cart-left">
            <img :src="api + item.img_url" alt="">
            <div class="cart-main">
              <div>{{item.title}}</div>
              <div>&yen;{{item.price}}</div>
            </div>
          </div>
          <div class="cart-right">
            <div class="content-btn">
              <button @click="reduceCount(item,key)">-</button>
              <input type="text" v-model="item.num" class="content-num" readonly="readonly">
              <button @click="addCount(item,key)">+</button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="often-order">
      <h3>本店顾客最常点的菜</h3>
      <div class="ofter-box">
        <ul class="menu-list clearfix">
          <li>
            <div class="menu-box">
              <img src="../assets/images/5.jpeg" alt="">
              <div>
                <h5>香辣回锅肉</h5>
                <h6>&yen;23</h6>
              </div>
            </div>
          </li>
          <li>
            <div class="menu-box">
              <img src="../assets/images/5.jpeg" alt="">
              <div>
                <h5>香辣回锅肉</h5>
                <h6>&yen;23</h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="cart-empty" v-if="goodsList.length == 0">
      <h2>购物车空空的 </h2>
      <p>您可以点击下面的菜单开始点菜</p>
    </div>

    <!-- 首页导航 -->
    <index-nav></index-nav>

  </div>
</template>

<script>
import indexNav from './common/NavFooter.vue';
import axios from 'axios';
import Config from '../../model/config.js';

export default {
  name: 'ShpoCart',
  data(){
    return{
      totalCount: 0,
      total:0,
      goodsList:[],
      api: Config.api,
      infoList: {},
    }
  },
  mounted(){
    this.getCartList();
    this.getContent();
  },
  methods:{
    //获取用餐信息
    getContent(){
      axios.get('/api/peopleInfoList',{
        params:{
          uid: Config.uid
        }
      })
      .then(res=>{
        this.infoList = res.data.result[0];
      })
    },
    //获取购物车列表
    getCartList(){
      // var params = new URLSearchParams();
      // params.append('uid', '001');
      axios.get('/api/cartlist', {
        params:{
          uid: Config.uid
        }
      })
      .then(res =>{
        this.goodsList = res.data.result;
        this.totalMoney();
      })
    },
    //加数量
    addCount(item,key){
      axios.get('/api/incCart',{
        params:{
          uid: Config.uid,
          product_id: item.product_id,
          num: item.num,
        }
      })
      .then(res=>{
        this.totalMoney();
      })
      ++item.num;
    },
    //减数量
    reduceCount(item,key){
      axios.get('/api/decCart',{
        params:{
          uid: Config.uid,
          product_id: item.product_id,
          num: item.num,
        }
      })
      .then(res=>{
        this.totalMoney();
      })
      item.num == 1 ? this.goodsList.splice(key,1) : --item.num;
    },
    //总价
    totalMoney(){
      this.total = 0;
      this.totalCount = 0;
      this.goodsList.forEach((item,i)=>{
        this.totalCount += item.num;
        this.total += parseFloat(item.num * item.price);
      });
    }
  },
  components:{
    indexNav
  },
}
</script>

<style lang="scss" scoped>
.bg-white,.often-order,.cart-list{
  background: white;
}
.cart{
  margin: 1rem;
  .cart-title{
    padding: 1rem 0;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
  .have{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    .have-remark,.have-people{
      line-height: 2;
    }
    .have-people{
      color: red;
    }
    .have-right{
      img{
        width: 2rem;
      }
    }
  }
  .total-box{
    padding: 1rem 0.5rem;
    .total{
      display: inline;
      color: red;
    }
  }
  .cart-list{
    margin-top: 0.2rem;
    ul
      li{
        display: flex;
        padding: 1rem 0.5rem;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        .cart-left{
          display: flex;
          img{
            width: 3rem;
            height: 3rem;
            border-radius: 5px;
          }
          .cart-main{
            margin-left: 1rem;
          }
        }
        .cart-right{
          .content-btn{
            display: flex;
            align-items: center;
            margin-left: 1rem;
            .content-num,button{
              width:3rem;
              background:white;
              border:1px solid #eeeeee;
              height: 2.5rem;
              text-align:center;
              &:focus{
                outline:none;
              }
            }
            .content-num{
              border-left: none;
              border-right: none;
              height: 2.35rem;
            }
            button{
              color:red;
            }
          }
        }
      }
  }
  .often-order{
    margin-top:1rem;
    padding: 1rem 0.5rem;
  }
  .ofter-box{
     width: 100%;
     overflow-x: auto;
     &::-webkit-scrollbar {
       display: none;
     }
    .menu-list{
      width: 40rem;
      overflow:auto;
      zoom:1;
      margin-top: 1rem;
      li{
        float: left;
        width: 7rem;
        margin-right: 1rem;
        img{
          width: 100%;
        }
      }
    }
  }
  .cart-empty{
    margin-top: 1rem;
    text-align: center;
    h2{
      line-height: 3;
    }
    p{
      font-size: 1.2rem;
    }
  }
}
</style>

