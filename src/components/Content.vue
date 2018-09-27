<template>
  <div class="content">

    <div class="top">
      <div class="back" @click="back()">
        返回
      </div>

      <div v-for="item in contentList" :key="item._id">
        <div class="content-box">
          <img :src="api + item.img_url" alt="">
          <div class="content-group">
            <h2>{{item.title}}</h2>
            <p>{{item.price}}/份</p>
          </div>
        </div>

        <div class="content-detail">
          <h3>商品详情</h3>
          <div class="detail" v-html="item.content"></div>
        </div>
      </div>

    </div>

    <div class="content-bottom">
      <div class="content-left">
        <span>数量:</span>
        <div class="content-btn">
          <button @click="changeCount(count--)">-</button>
          <input type="text" v-model="count" class="content-num" readonly="readonly">
           <button @click="changeCount(count++)">+</button>
        </div>
      </div>
      <div class="content-right">
        <span class="add-cart" @click="addCart">加入购物车</span>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import Config from '../../model/config.js';

export default {
  name: 'Content',
  data(){
    return{
      count: 1,//商品数量
      contentList: [], //详情列表
      api: Config.api,
    }
  },
  mounted(){
    this.getContent();
  },
  methods:{
    //加入购物车
    addCart(){
      axios.post('/api/addcart',{
        uid: Config.uid,
        title: this.contentList[0].title,
        product_id: this.contentList[0]._id,
        img_url: this.contentList[0].img_url,
        price: this.contentList[0].price,
        num: this.count
      })
      .then(res=>{
       if(res.data.success){
         this.$router.push('/home');
       }
      })
    },
    //获取商品详情
    getContent(){
      axios.get('/api/productcontent',{
        params:{
          id: this.$route.query.id
        }
      })
      .then(res=>{
        this.contentList = res.data.result;
      })
    },
    //加减改变数量
    changeCount(){
      this.count = this.count <= 0 ? 1 : this.count;
    },
    //文本框直接改变数量
    changeNum(){
      this.count = this.count <= 0 ? 1 : this.count;
    },
    //返回上一页
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  .top{
    padding-bottom: 1.2rem;
    .back{
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #000;
      text-align: center;
      line-height: 1rem;
      color: white;
      position: fixed;
      top: 1.3rem;
      left: 1.3rem;
      font-size: 1.2rem;
      &::before{
        content: '';
        display: block;
        width:0.5rem;
        height: 0.5rem;
        border: 1px solid white;
        border-top: 1px solid transparent;
        border-right: 1px solid transparent;
        transform: rotate(45deg);
      }
    }
    .content-box{
      background: white;
      img{
        width: 100%;
        height: 18rem;
      }
      .content-group{
        padding: 0.5rem 1rem;
        p{
          font-size: 1.2rem;
          color: red;
        }
      }
    }
    .content-detail{
      margin-top: 1rem;
      background: white;
      padding: 1rem;
      .detail{
        margin-top: 1rem;
        font-size: 1.3rem;
      }
    }
  }
  .content-bottom{
    position:fixed;
    width:100%;
    bottom: 0;
    left: 0;
    background: white;
    height: 5rem;
    display:flex;
    justify-content: space-between;
    line-height: 5rem;
    .content-left{
      margin-left: 1.2rem;
      display:flex;
      .content-btn{
        display: flex;
        align-items: center;
        margin-left:1rem;
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
          height: 2.3rem;
        }
        button{
          color:red;
        }
      }
    }
    .content-right{
      margin-right: 1.2rem;
      .add-cart{
        background:red;
        color:white;
        padding: 0.5rem 0.8rem;
        border-radius: 5px;
      }
    }
  }
}
</style>


