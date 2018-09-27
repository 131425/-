<template>
  <div class="home">
    <!-- tab -->
    <div class="home-menu">
      <ul>
        <li>
          <img src="../assets/images/rexiao.png" alt="">
          <h6>热销菜</h6>
        </li>
        <li>
          <img src="../assets/images/caidan.png" alt="">
          <h6>点过的菜</h6>
        </li>
        <li>
          <img src="../assets/images/sousuo.png" alt="">
          <h6>搜你喜欢</h6>
        </li>
      </ul>
    </div>

    <!-- 首页菜单 -->
    <index-menu :list="orderList"></index-menu>

    <!-- content -->
    <div class="content">
      <div v-for="item in orderList" :key="item._id" class="content-box">
        <h3>{{item.title}}</h3>
        <ul class="menu-list">
          <router-link :to="{path: '/content', query: {id: food._id}}" tag="li" v-for="food in item.list" :key="food._id">
            <div class="menu-box">
              <img :src="api + food.img_url" alt="">
              <div>
                <h5>{{food.title}}</h5>
                <h6>&yen;{{food.price}}</h6>
              </div>
            </div>
          </router-link>
        </ul>
      </div>
    </div>

    <!-- 首页导航 -->
    <index-nav :num="count"></index-nav>

  </div>
</template>

<script>
import indexMenu from './common/menu.vue';
import indexNav from './common/NavFooter.vue';

import axios from 'axios';
import Config from '../../model/config.js';

export default {
  name: 'Home',
  data () {
    return {
      orderList: [],//菜单列表
      api: Config.api,
      count: 0,
    }
  },
  mounted(){
    this.getInitList();
    this.getCount();
  },
  methods:{
    //获取购物车数量
    getCount(){
      axios.get('/api/cartCount',{
        params:{
          uid: Config.uid
        }
      })
      .then(res => {
        this.count = res.data.result;
      })
    },
    //获取列表
    getInitList(){
      axios.get('/api/productlist',{
        params:{}
      })
      .then(res => {
        this.orderList = res.data.result;
      })
    },
  },
  components:{
    indexMenu,
    indexNav
  },
}
</script>

<style lang="scss" scoped>
.home-menu{
  ul{
    display: flex;
    padding: 0.5rem;
    li{
      flex: 1;
      text-align: center;
      background: white;
      border-right: 1px solid #eeeeee;
      padding: 0.8rem 0;
      &:last-child{
        border-right: none;
      }
      img{
        width: 2.5rem;
      }
    }
  }
}
.content{
  margin-bottom: 16rem;
  h3{
    padding-left: 1rem;
    margin-left: 0.5rem;
    line-height: 3.5rem;
    text-align: center;
  }
  .menu-list{
    display:flex;
    flex-wrap:wrap;
    li{
      width: 33.3%;
      padding: 0.5rem 0.8rem;
      box-sizing: border-box;
      .menu-box{
        background: white;
        border-radius: 5px;
        text-decoration: none;
        img{
          width:100%;
          border-radius: 5px 5px 0 0;
          height: 10rem;
        }
        h5,
        h6{
          padding-left: 0.1rem;
        }
      }
    }
  }
}

</style>

