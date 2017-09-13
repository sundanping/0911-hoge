<template>

  <div >
    <header >
      <div>
         商务合作
      </div>
      <span><router-link to="index"><img src="./../assets/images/public/left.jpg" alt=""></router-link></span>
    </header>
    <div class="top-img" :style="background">
      <div style="text-align: center;margin-left: .4rem;padding-top:1rem;" align="center">
        <h2>共·赢</h2>

        <p style="margin: .1rem 0">一起奔跑 才能同赢未来</p>
        <p>厚建愿与各个领域企业诚挚合作 请致电联系或来访考察</p>
      </div>

      </div> <!--<img src="./../assets/resource/cooperation/a_02.png" alt="">-->
      <section>
        <h1><div style="  background:rgba(229,115,115,1);"></div> 南京总部</h1>
        <p>地址：江苏省南京市雨花台区安德门大街57号楚翘城3号楼9楼</p>
        <p>电话：400-0012-000</p>
      </section>
       <div class="line-2"></div>
      <section>
        <h1><div style="  background:rgba(129,199,132,1);;"></div> 北京分部</h1>
        <p>地址：北京市东城区东四十条甲22号南新仓商务大厦A座1012</p>
        <p>电话：400-0012-000 转 9333</p>
      </section>
        <div class="line-2"></div>
      <section>
        <h1><div style="background:rgba(79,194,248,1);"></div> 南京总部</h1>
        <p>地址：广州市番禺区迎宾路五洲城商务中心C座6006</p>
        <p>电话：020-85528033</p>
      </section>
    <div class="line-3 ">

    </div>

  </div>

</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        background: {
          backgroundImage: 'url(' + require('../assets/resource/cooperation/a_02.png') + ')'
        }
      }
    }
  }
</script>
<style scoped>
  header{
    height: .88rem;
    width: 100%;
    font-size: .36rem;
    text-align: center;
  }
  header>div{
    position: relative;
    top:.26rem;
    height: .36rem;
    font-size: .36rem;
    line-height: .36rem;
  }
  header>span{
    display: block;
    height:.36rem;
    width: .21rem;
    position: absolute;
    top:.26rem;
    left:.24rem;
  }
  header>span img{
    width: 100%;
    height: 100%;
  }
.top-img{
  width: 100%;
  height: 3rem;
}
.top-img h2,.top-img p{
  color:#fff;
  font-weight: 600;
}
.top-img  h2{
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.74);
    text-align: left;
    width: 1.8rem;
    font-size: .5rem;
  }
 .top-img  p{
    text-shadow: 0 0 10px rgba(0,0,0,.5);
    text-align: left;

    font-size:.22rem;
  }
  .iconfont{
    ont-size: 1rem;
    color: #1aa8de;
    content: "\E613";
    margin-right: .8rem;
  }
  section{
    font-size: .24rem;
    height: 1.8rem;
    padding:.3rem 0;
    padding-left:.24rem;
  }
  section>h1{
    font-size: .28rem;
    color: #333;
    height:.24rem ;
    text-indent: .08rem;
    text-align: left;
  }
  section>h1>div{
    width: .04rem;
    height: .35rem;
    display: inline-block;
    position: relative;
    top:.08rem;
  }
  section>p{
    text-indent: .2rem;
    text-align: left;
    font-size: .24rem;
    color:#666;
    position: relative;
    top:.3rem;
  }
  .line-2{
    height: .1rem;
    background-color: #f2f2f2;
  }
  .line-3{
    height: 6rem;
    background-color: #f2f2f2;
  }
</style>
