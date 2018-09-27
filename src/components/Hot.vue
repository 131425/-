<template>
  <div class="hot">
    <header class="hot-title">本店热销榜</header>
    <ul class="hot-ul">
      <li>
        <img src="../assets/images/1.jpeg" alt="">
        <div class="hot-right">
          <h3 class="hot-name">辣椒炒肉</h3>
          <p>&yen;23</p>
          <p>已售：2555份</p>
        </div>
      </li>
    </ul>

    <!-- 首页导航 -->
    <index-nav></index-nav>

  </div>
</template>

<script>

import indexNav from './common/NavFooter.vue';
export default {
  name: 'Hot',
  data(){
    return{
    }
  },
  components:{
    indexNav
  }
}
</script>

<style lang="scss" scoped>
.hot{
  .hot-title{
    text-align: center;
    background: #F7F7F7;
    line-height: 5rem;
    font-size: 1.5rem;
  }
  .hot-ul{
    background: white;
    li{
      padding: 0.8rem 1rem;
      display: flex;
      border-bottom: 1px solid #eeeeee;
      img{
        width:6rem;
        height: 6rem;
      }
      .hot-right{
        flex: 1;
        margin-left: 1rem;
        .hot-name{
          overflow:hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:1;
        }
      }
    }
  }
}
</style>

