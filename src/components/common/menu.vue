<template>
  <div>
    <!-- menu -->
    <aside class="menu" ref="leftCate">
      <ul>
        <li v-for="(item,index) in list" :key="item._id" @click="changeList(index)">{{item.title}}</li>
      </ul>
      <div class="nav-cate" @click="toggleMenu">
        <img src="../../assets/images/nav.png" alt="">
        菜单
      </div>
    </aside>

    <!-- 透明层 -->
    <div class="bg" ref="bg" @click="toggleMenu"></div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props:{
    list: Array
  },
  data(){
    return{
      flag: true,//切换菜单开关
    }
  },
  methods:{
    //点击分类 对应菜单
    changeList(key){
      const item = document.querySelectorAll('.content-box');
      document.documentElement.scrollTop = item[key].offsetTop;
      this.$refs.leftCate.style.transform = 'translate(-100%,0)';
      this.$refs.bg.style.display = 'none';
    },
    // 切换菜单
    toggleMenu(){
      if(this.flag){
        this.flag = false;
        this.$refs.leftCate.style.transform = 'translate(0,0)';
        this.$refs.bg.style.display = 'block';
      }else{
        this.flag = true;
        this.$refs.leftCate.style.transform = 'translate(-100%,0)';
        this.$refs.bg.style.display = 'none';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  width: 8.5rem;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  transition: all .5s;
  transform: translate(-100%,0);
  z-index: 2;
  ul{
    background: #eeeeee;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 3;
    li{
      text-align: center;
      line-height: 3rem;
    }
  }
  .nav-cate{
    background:rgba(123,128,128,0.5);
    position: absolute;
    right: -3.5rem;
    top: 40%;
    width: 3rem;
    text-align: center;
    color:white;
    padding:0.5rem;
    border-radius: 0 50% 50% 0;
    z-index: 2;
    img{
      display: block;
      width:1.5rem;
      margin: 0 auto;
    }
  }
}
.bg{
  position: fixed;
  width: 100%;
  height: 100%;
  background:rgba(123,128,128,0.5);
  z-index: 1;
  top: 0;
  left: 0;
  display: none;
}
</style>

