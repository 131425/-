<template>
  <div class="home">
    <div class="have-box">
      <img src="../assets/images/canju.png" alt="">
      <span>用餐人数</span>
    </div>
    <p class="notice">请选择正确的用餐人数 <span v-if="initInfo">，小二马上给你送餐具</span></p>
    <div class="content">
      <ul class="user_list">
        <li v-for="(item,key) in userList" :key="key" :class="{'active':parseInt(peopleInfoList.p_num) == key + 1}"><span>{{item}}</span></li>
      </ul>
      <div class="notice1">
        <input type="text" placeholder="请备注你需要的口味（选填）" v-model="p_mark">
      </div>
      <ul class="notice_list">
        <li><span>带包带走</span></li>
        <li><span>不要辣</span></li>
        <li><span>微辣</span></li>
        <li><span>重辣</span></li>
      </ul>
    </div>

    <div class="order sure" @click="editPeopleInfo">
      <span>确认修改</span>
    </div>

     <router-link to="/shopcart" tag="div" class="order cancel">
      <span>取消修改</span>
     </router-link>

  </div>
</template>

<script>
import axios from 'axios';
import Config from '../../model/config.js'

export default {
  name: 'Home',
  data () {
    return {
      p_num: '1人',
      p_mark: '',
      initInfo: true,
      userList: [],
      peopleInfoList: [],
    }
  },
  mounted(){
    for(let i=0;i<12;i++){
      this.userList.push(i+1+'人');
    }
    this.$nextTick(()=>{
      this.addEventChange();
      this.getContent();
    });
  },
  methods:{
    //修改用餐信息
    editPeopleInfo(){
      axios.post('/api/addPeopleInfo',{
        uid: Config.uid,
        p_num: this.p_num,
        p_mark: this.p_mark
      })
      .then(res=>{
        this.$router.push('/shopcart');
      })
    },
    //选择人数
    addEventChange(){
      var that = this;
      const list = document.querySelectorAll('.user_list li');
      for(var i = 0; i < list.length; i++){
        list[i].onclick=function(){
          for(var j = 0;j<list.length;j++){
            list[j].className = "";
          }
          this.className = 'active';
          that.p_num = this.querySelector('span').innerHTML.trim();
        }
      }
      const mark_list = document.querySelectorAll('.notice_list li');
      for(let i=0;i<mark_list.length;i++){
        mark_list[i].onclick = function(){
          for(let j=0;j<mark_list.length;j++){
            mark_list[j].className = "";
          }
          this.className = 'active';
          that.p_mark = that.p_mark + ' ' + this.querySelector('span').innerHTML.trim();
        }
      }
    },
    //获取用餐信息
    getContent(){
      if(Config.uid){
        axios.get('/api/peopleInfoList',{
          params:{
            uid: Config.uid
          }
        })
        .then(res=>{
          this.peopleInfoList = res.data.result[0];
          this.p_mark = res.data.result[0].p_mark;
        })
      }
    },
  }
}
</script>


<style lang="scss" scoped>
.have-box{
  background: black;
  height: 3.2rem;
  width: 8.1rem;
  text-align: center;
  line-height: 3.2rem;
  border-radius: 5px;
  margin: 4rem auto 0 auto;
  color: white;
  img{
    vertical-align: middle;
    width: 1.5rem;
    margin-top: -0.5rem;
  }
  span{
    font-size: 1.2rem;
    padding-left: 0.1rem
  }
}
.notice{
  text-align: center;
  color: red;
  font-size: 1.2rem;
  margin: 0.8rem 0;
}
.content{
  .user_list,.notice_list{
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    li{
      width: 25%;
      padding: 0.5rem;
      box-sizing: border-box;
      span{
        display: block;
        text-align: center;
        border:1px solid #ccc;
        border-radius: 5px;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.3rem;
      }
      &.active{
        span{
          border: 1px solid red;
          color: white;
          background: red
        }
      }
    }
  }
  .notice1{
    padding: 1.5rem;
    input{
      width: 98%;
      height: 3rem;
      background: none;
      border: 1px solid #ccc;
      padding: 0 1%;
    }
  }
}
.order{
  width:6rem;
  height:6rem;
  border-radius: 50%;
  position: fixed;
  bottom: 5rem;
  &.sure{
    left: 2rem;
    background: red;
  }
  &.cancel{
    right: 2rem;
    background: #cccccc;
  }
  span{
    display: block;
    position: relative;
    top: 1.2rem;
    width: 2.5rem;
    left: 50%;
    margin-left: -1.25rem;
    color:white;
    font-size: 1.4rem;
  }
}
</style>

