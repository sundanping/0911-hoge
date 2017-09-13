<template>
 <div>
   <header align="center" >
     <div>行业客户</div>
     <span><router-link to="index"><img src="./../assets/images/public/left.jpg" alt="" title="back"></router-link></span>
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
       <div :style="backgroundClassicCustomer " class="customer-title">经典客户</div>
       <div  @click="changeClassicCustomer()" :style="backgroundArrow">换一批</div>
     </div>
     <div class="classic-customer-message ">
       <!--v-for-->
        <div class="classic-customer-message-logo " v-for="item in classicCustromer">
          <div class="classic-customer-message-logo-first">
            <img style="width: .8rem;height:.8rem" :src="item.indexpic.host+item.indexpic.dir+item.indexpic.filepath+item.indexpic.filename || 'http://img1.hoge.cn/material/news/img/220x/2017/07/20170719170533nuYs.png' " alt=""></div>
          <h1 class="classic-customer-message-logo-second">{{item.title }}</h1>

          <div class="classic-customer-message-logo-last">了解详情</div>
        </div>
     </div>
   </section>
   <!--line-->
   <div style="height: .2rem;background-color: #f5f5f5"></div>
   <section class="classic-customer">
     <div class="classic-customer-title">
       <div :style="backgroundCustomer " class="customer-title">行业客户</div>
       <div @click="changeMediaCustomer('government')" :style="backgroundArrow">换一批</div>
     </div>
     <div class="media-government">
       <div @click="choiceCustomer('media')" :class="choiced==='media'?'choice-customer' : ''">媒体行业</div>
       <div @click="choiceCustomer('government')" :class="choiced==='government'?'choice-customer' : ''">政府/企业</div>
     </div>
     <!--logo-->
     <div class="choice-customer-logo" v-for="item in customerInformation">
       <div class="repeat-customer">
         <div style=""><img style="width: .9rem;height: .9rem;border-radius: 50%" :src="item.indexpic.host+item.indexpic.dir+item.indexpic.filepath+item.indexpic.filename"  alt=""></div>
        <div style="margin-bottom: 0;overflow: hidden">{{item.title}}</div>
       </div>
     </div>

      <div>

      </div>
   </section>

 </div>
</template>
<script>
  export default {
    name: 'customer',
    data () {
      return {
        column_id: 10,
        count: 4,
        offset: 0,
        choiced: 'media',
        classicCustromer: [],
        mediaCustomerList: [],
        governmentCustomer: [],
        customerInformation: [],
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
          backgroundImage: 'url(' + require('../assets/images/customer/cuntromer.jpg') + ')',
          backgroundSize: '100% 100%'
        }
      }
    },
    mounted () {
      let $$this = this
      this.$http.all([
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=10&count=4&offset=0'),
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=11&count=8&offset=0'),
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=12&count=8&offset=0')
      ])
        .then(this.$http.spread(function (classic, media, government) {
          $$this.classicCustromer = classic.data
          $$this.mediaCustromerList = media.data
          $$this.customerInformation = media.data
          $$this.governmentCustromer = government.data
          console.log($$this.classicCustromer)
        })).catch(function (err) {
          console.log(err)
        })
    },
    methods: {
      sendAjax (id, _count, _offset) {
        let _that = this
        console.log(id)
        console.log(_offset)
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=' + id + '&count=' + _count + '&offset=' + _offset)
          .then(function (response) {
            if (id === 10 && response.data.length > 0) {
              _that.classicCustromer = response.data
            } else if (id === 10 && response.data.length === 0) {
              _that.offset = -4
            } else if (id === 11 && response.data.length > 0) {
              _that.customerInformation = response.data
            } else if (id === 11 && response.data.length === 0) {
              _that.offset = -8
            } else if (id === 12 && response.data.length > 0) {
              _that.customerInformation = response.data
            } else if (id === 12 && response.data.length === 0) {
              _that.offset = -8
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      },
//      经典客户点击换一批
      changeClassicCustomer () {
        this.offset += 4
        this.count = 4
        this.sendAjax(10, this.count, this.offset)
      },
      choiceCustomer (name) {
        if (name === 'media') {
          this.choiced = 'media'
          this.customerInformation = this.mediaCustromerList
        } else if (name === 'government') {
          this.choiced = 'government'
          this.customerInformation = this.governmentCustromer
        }
      },
      changeMediaCustomer () {
        if (this.choiced === 'media') {
          this.offset += 8
          this.sendAjax(11, 8, this.offset)
        } else if (this.choiced === 'government') {
          this.offset += 8
          this.sendAjax(12, 8, this.offset)
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

  header > span   img {
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
  .customer-title{
    font-size: .24rem;
    color:#333;
    font-weight: 600;
  }
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
    height: .36rem;
    font-size: .28rem;
    margin:.2rem;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
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
  .media-government{
    font-size: .24rem;
    margin-bottom: .36rem;
  }
  .media-government:after{
    content: '';
    clear: both;
    display: block;
  }
  .media-government>div{
    display: inline-block;
  }
  .media-government>div:first-child{
    margin-right: .6rem;
  }
  .choice-customer{
    padding:.07rem .19rem;
    border-radius: .24rem;
    background-color: #4EC3F9;
    color:#fff;
  }
  .choice-customer-logo>div{
    float:left
  }
  .repeat-customer{
    width: 25%;
    height: 1.34rem;
    font-size: .22rem;
    margin-bottom: .28rem}
</style>
