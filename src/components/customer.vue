<template>
 <div>
   <header align="center" >
     <div>行业客户</div>
     <span><img src="./../assets/images/public/left.jpg" alt="" title="back"></span>
   </header>
   <div class="top-img" :style="background">
     <div style="text-align: center;margin-left: .4rem;padding-top:1rem;" align="center">
       <h2>信·任</h2>

       <p style="margin: .1rem 0">十年数百家媒体客户认可</p>
       <p>业内领先的产品理念和先进技术</p>
     </div>
   </div>
  <div style="height: .2rem;background-color: #f5f5f5"></div>
   <section class="classic-customer">
     <div class="classic-customer-title">
       <div :style="backgroundClassicCustomer " class="">经典客户</div>
       <div :style="backgroundArrow">换一批</div>
     </div>
     <div class="classic-customer-message ">
       <!--v-for-->
        <div class="classic-customer-message-logo ">
          <div class="classic-customer-message-logo-first"></div>
          <h1 class="classic-customer-message-logo-second">济南广播电视台</h1>
          <div class="classic-customer-message-logo-last">了解详情</div>
        </div>
       <div class="classic-customer-message-logo ">
         <div class="classic-customer-message-logo-first"></div>
         <h1 class="classic-customer-message-logo-second">d</h1>
         <div class="classic-customer-message-logo-last">d</div>
       </div>
       <div class="classic-customer-message-logo ">
       <div class="classic-customer-message-logo-first"></div>
       <h1 class="classic-customer-message-logo-second">d</h1>
       <div class="classic-customer-message-logo-last">d</div>
     </div>
     </div>
   </section>
   <!--line-->
   <div style="height: .2rem;background-color: #f5f5f5"></div>
   <section class="classic-customer">
     <div class="classic-customer-title">
       <div :style="backgroundCustomer " class="">行业客户</div>
       <div :style="backgroundArrow">换一批</div>
     </div>
   </section>

 </div>
</template>
<script>
  export default {
    name: 'customer',
    data () {
      return {
        backgroundClassicCustomer: {
          backgroundImage: 'url(' + require('../assets/images/customer/1_03.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '.34rem .34rem'
        },
        backgroundCustomer: {
          backgroundImage: 'url(' + require('../assets/images/customer/2_03.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '.34rem .34rem'
        },
        backgroundArrow: {
          backgroundImage: 'url(' + require('../assets/images/public/arrow-right.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          backgroundSize: '.18rem .34rem'
        },
        background: {
          backgroundImage: 'url(' + require('../assets/images/company-introduce/9_02.png') + ')',
          backgroundSize: '100% 100%'
        }
      }
    }
  }
</script>
<style scoped>

  header {
    height: .88rem;
    width: 100%;
    font-size: .36rem;
    text-align: center;
  }

  header > div {
    position: relative;
    top: .26rem;
    height: .36rem;
    font-size: .36rem;
    line-height: .36rem;
  }

  header > span {
    display: block;
    height: .36rem;
    width: .21rem;
    position: absolute;
    top: .26rem;
    left: .24rem;
  }

  header > span > img {
    width: 100%;
    height: 100%;
  }

  .top-img {
    width: 100%;
    height: 3rem;
  }

  .top-img h2, .top-img p {
    color: #fff;
    font-weight: 600;
  }

  .top-img h2 {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.74);
    text-align: left;
    width: 1.8rem;
    font-size: .5rem;
  }

  .top-img p {
    text-shadow: 0 0 10px rgba(0, 0, 0, .5);
    text-align: left;

    font-size: .22rem;
  }
.classic-customer{
  padding:.24rem;
}
  .classic-customer-title{
    height: .34rem!important;
    padding-left:.05rem;
    text-indent: .48rem;
    overflow: hidden;
    margin-bottom:.37rem;
  }
  .classic-customer-title>div{
    font-size: .24rem;
    text-align: left;
    display: inline-block;
    float: left;
  }
  .classic-customer-title>div:last-child{
    float: right;
    padding-right: .3rem;
    color:#999 ;
  }
  .classic-customer-message{
    overflow: hidden;
    /*margin-top:.3rem;*/
  }
  .classic-customer-message-logo{
    float: left;
    position: relative;
    width: 50%;
    text-align: left;
    box-sizing: border-box;
    height:2.18rem;
  }
  /*border*/
  .classic-customer-message>div:nth-child(n+3){
    border-top:1px solid #999 ;
  }

  .classic-customer-message>div:nth-child(odd){
    border-right:1px solid #999;
  }
  .classic-customer-message-logo{
    text-align: center;
  }
  .classic-customer-message-logo>.classic-customer-message-logo-first{
    height: .8rem;
  }
  .classic-customer-message-logo>.classic-customer-message-logo-second{
    height: .28rem;
    font-size: .28rem;
    margin:.2rem;
    font-weight: bold;
  }
  .classic-customer-message-logo>.classic-customer-message-logo-last{
    height: .4rem;
    width: 1.2rem;
    font-size: .2rem;
    margin:auto;
    color: #4EC3F9;
    line-height: .4rem;
    border: 1px solid #4EC3F9;
  }
</style>
