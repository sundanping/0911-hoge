<template>
  <div class="hello">
    <header align="center" :style="background">
      <!--<img src="./../assets/images/index/logo.png" >-->
    </header>
    <div id="banner" class="banner">
      <yd-slider autoplay="3000" style="height:3rem;margin:0;padding:0">
        <yd-slider-item style="height:3rem;margin:0;padding:0">
          <a href="http://www.ydcss.com" style="height:3rem;margin:0;padding:0">
            <img src="./../assets/resource/banner/banner-1.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="">
            <img src="./../assets/resource/banner/banner-2.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="">
            <img src="./../assets/resource/banner/banner-3.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="">
            <img src="./../assets/resource/banner/banner-4.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a >
            <img src="./../assets/resource/banner/banner-5.jpg">
          </a>
        </yd-slider-item>
      </yd-slider>
    </div>
    <!--公司介绍 加入我们-->
    <div class="plate-4">
      <div class="flex-1">
        <router-link to="company" class="flex-router">
        <figure>
          <img src="./../assets/images/index/b_03.png" alt="">
          <div >公司介绍</div>
        </figure>
        </router-link>
      </div>
      <div  class="flex-1">
        <router-link to="customer" class="flex-router">
        <figure>
        <img src="./../assets/images/index/c_03.png" alt="">
        <div>行业客户</div>
        </figure>
        </router-link>
      </div>
      <div class="flex-1">
        <router-link to="joinUS" class="flex-router">
        <figure>
      <img src="./../assets/images/index/d_03.png" alt="">
        <div>加入我们</div>
        </figure>
        </router-link>
      </div>
      <div class="flex-1">
        <router-link to="cooperation" class="flex-router">
        <figure>
        <img src="./../assets/images/index/e_03.png" alt="">
        <div>商务合作</div>
        </figure>
        </router-link>
      </div>
    </div>
    <div style="width: 90%;height: 2px;background-color: #f4f5f6;margin-left:5%"></div>
    <!--company honor-->


    <yd-rollnotice class="box_roll" autoplay="2000" style="margin-top:.1rem;">
      <yd-rollnotice-item >

        <div class="roll-notice">
          <div class="honor-company" style="height: .94rem;transform:translateY(-.21rem);padding-left:.24rem;">
            <div class="honor-circle"></div>
            <div class="honor-title">公司荣誉</div>
            <div class="honor-brief">2016年广播电视科技创新产品奖</div>
            <div class="honor-line"></div>
            <div class="honor-image"><img src="./../assets/resource/honor/trophy-1.png" alt=""></div>
          </div>
        </div>

      </yd-rollnotice-item>
      <yd-rollnotice-item >
        <div class="roll-notice">
          <div class="honor-company" style="height: .94rem;transform:translateY(-.21rem);padding-left:.24rem;">
            <div class="honor-circle"></div>
            <div class="honor-title">公司荣誉</div>
            <div class="honor-brief">2016年广播电视科技创新产品奖</div>
            <div class="honor-line"></div>
            <div class="honor-image"><img src="./../assets/resource/honor/trophy-2.png" alt=""></div>
          </div>
        </div>
      </yd-rollnotice-item>
      <yd-rollnotice-item >
        <div class="roll-notice">
        <div class="honor-company" style="height: .94rem;transform:translateY(-.21rem);padding-left:.24rem;">
          <div class="honor-circle"></div>
          <div class="honor-title">公司荣誉</div>
          <div class="honor-brief">2016年广播电视科技创新产品奖</div>
          <div class="honor-line"></div>
          <div class="honor-image"><img src="./../assets/resource/honor/trophy-3.png" alt=""></div>
        </div>
      </div>
      </yd-rollnotice-item>
    </yd-rollnotice>
    <div style="transform: translateY(.1rem)" class="line"></div>
    <!--&lt;!&ndash;四大解决方案&ndash;&gt;-->
    <div align="center" class="four-solution" >
      <div style="position: relative;overflow-x: auto;">
        <div class="four-solution-div"  style="white-space: nowrap">
          <div class="media">
            <!--<section>-->
              <!--<div>-->
                <!--&lt;!&ndash;解决方案&ndash;&gt;-->
                <!--<h1>媒体解决方案</h1>-->
                <!--&lt;!&ndash;brief&ndash;&gt;-->
                <!--<p>主流门户网站、海量新闻网站、网络广播网站三大方向解决方案，全面覆盖广电媒体网站建设需求。</p>-->
              <!--</div>-->
              <!--&lt;!&ndash;img&ndash;&gt;-->
              <!--<div><img src="./../assets/images/index/media.png" alt=""></div>-->
            <!--</section>-->
          </div>
          <div class="mobile"></div>
          <div class="melding"></div>
          <div class="operation"></div>
        </div>
     </div>
    </div>
    <div class="line"></div>
    <!--公司资讯-->
    <section class="company-information">
      <div :style="backgroundCompanyInformation" class="company-information-title">公司资讯</div>
      <!--information-list-->
      <div class="information-list" v-for="item in informationList">
        <router-link :to="{path:'/details',query: {name: JSON.stringify(item)}}">
        <!--img-->
        <div class="information-img"><img :src="item.indexpic.host+item.indexpic.dir+item.indexpic.filepath+item.indexpic.filename" alt=""></div>
        <div class="information-title-time">
          <!--title & time-->
          <div>{{item.title}}</div>
          <div>{{item.create_time}}</div>
        </div>
        </router-link>
      </div>
      <div class="load-more" @click="getInformation">加载更多</div>
    </section>
  </div>




</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '厚建',
        count: 3,
        offset: 0,
        informationList: [],
        background: {
          marginBottom: '.2rem',
          backgroundImage: 'url(' + require('../assets/images/index/logo.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '1.6rem .5rem'
        },
        backgroundCompanyInformation: {
          backgroundImage: 'url(' + require('../assets/images/index/f_03.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '.34rem .34rem'

        }
      }
    },
    mounted () {
      this.getInformation()
    },
    methods: {
      getInformation () {
        let that = this
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=1&count=' + this.count + '&offset=' + this.offset)
          .then(function (response) {
            that.count += 3
            that.offset = 0
            that.informationList.length = 0
//            Array.prototype.push.apply(that.informationList, response.data)
            that.informationList = response.data
            console.log(JSON.parse(JSON.stringify(that.informationList)))
            console.log(that.count)
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    background-color: #ffffff;
    font-size: .26rem;
  }

  header {
    height: .5rem;
    /*background:'./../assets/images/index/logo.png' center ;*/
    margin-botton:2rem;
  }


.banner{
  width: 100%;
  height:3rem;
  background-color: aquamarine;
  /*padding: .5rem 0;*/
}
.banner>img{
  width: 100%;
  height:100%
} .plate-4{
   padding: 12px 0;
   display: flex;
   width: 100%;
   height:1.6rem;
   font-size: .24rem;

 }
  .plate-4> .flex-1{
    flex: 1;
    text-align: center;
    background-color: #fff;
  }
  .plate-4> .flex-1>.flex-router>div{
    display: inline-block;
  }
  .plate-4> .flex-1>.flex-router>div:first-child{
    height: 70%;
  }
  .plate-4> .flex-1>.flex-router>div:last-child{
    height: 30%;

  }
  .plate-4> .flex-1>.flex-router>figure>img{
    width:.6rem;
    height:.6rem;
  }
  figure{
    height:1.6rem;
  }
  /*company honor*/
 .roll-notice{
   clear: both;
   content: "";
   height: .96rem;
   padding-top: .3rem;
   font-size: .16rem;
   height: .75rem;
   line-height: .96rem;
  overflow: hidden;
 }
 /* company honor BEGIN*/
  .roll-notice>div{
    overflow: hidden;
  }
.honor-circle{
  width: .12rem;height: .12rem;
  background-color: #3053ff;
  border-radius: 50%;
  float:left;
  transform: translateY(.22rem);

}
.honor-title{
  width: 1.12rem!important;
  height: .34rem;
  transform: translateY(.12rem);
  font-size: .22rem;
  color:#E57373;
  float:left;
  overflow: hidden;
  text-align: center;
  margin:0 .12rem;
}
.honor-brief{
  font-size: .24rem;
  transform: translateY(-.16rem);
  float:left;
  height: .30rem;

}
.honor-line{
  width: 2px;
  height:.54rem ;
  margin-left:.6rem;
  flost:left;
  background-color: #e6e6e6;

}
.honor-image{
  width: .77rem;
  height: .54rem;
  margin-left: .3rem;
}
  .honor-image>img{
    width: 100%;
    height: 100%;
  }
  .honor-company>div{
    display: inline-block;
    float: left;
  }
  .honor-title{
    border: 1px solid #e47272;
    color:#e47272;
    height: .35rem;
    width: 90%;
    line-height: .35rem;
    /*padding:5px 10px;*/
    box-sizing: border-box;
    border-radius: 3px ;
    display: inline-block;
  }
  /* company honor END*/

  /*.roll-notice>div:last-child{*/
    /*width:21.3%;*/
    /*height:.5rem;*/
    /*padding-left: .2rem;*/
    /*margin-left:.2rem;*/
  /*}*/
  /*.roll-notice>div:last-child>div{*/
    /*width:.6rem;*/
    /*height:.6rem;*/
    /*margin-top:.1rem;*/
    /*float: right;*/
  /*}*/
  /*.roll-notice>div:last-child>div>img{*/
    /*width:100%;*/
    /*height:100%;*/
  /*}*/
  .line{
    width: 100%;
    height:.2rem;
    background-color: #f3f4f5;
  }
  /*四大解决方案*/
  .four-solution{
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 2rem;
    background-color: #a3a3a3;
    margin-top:.1rem;
    line-height: 2rem;
  }
  .four-solution-div{
    height: 2rem;
  }
  .four-solution-div>div{
    display: inline-block;
    padding:0;
    margin:0;
    border-radius: .06rem;
  }
  .media{
    margin-left:.2rem;
    width: 90%;
    height: 1.8rem;
    background-color: #f2d262;
    /*margin:.1rem 2%;*/

  }
  .mobile{
    width: 90%;
    height: 1.8rem;
    /*margin:.1rem 2%;*/

    background-color: #80c87f;

  }
  .melding{
    width: 90%;
    height: 1.8rem;
     /*margin:.1rem 2%;*/

    background-color: #48b1e3;

  }
  .operation{
    width: 90%;
    height: 1.8rem;
    /*margin:.1rem 2%;*/
    background-color: #e37474;

  }
  .media>section >div{
    display: inline-block;
    padding:.47rem .15rem .47rem .24rem;
  }
  .media>section >div:first-child{

  }
  .company-information{
    padding: .3rem 0 0 .24rem;
  }
  .company-information-title{
    font-size: .24rem;
    color:#333;
    text-indent:.43rem ;
    height: .34rem;
    line-height: .34rem;
    text-align: left;
   font-family: ' FZLTHK--GBK1-0';
  }
  .information-list{
    height: 1.5rem;
    display: block;
    padding-bottom: 1.8rem;
    /**/
    margin-top:.3rem;
    border-bottom: 2px solid #e6e6e6;
  }
  .information-list:after{
    content: '';
    clear: both;
    display: block;
  }
  .information-list div{
    float: left;
  }
  .information-img{
    width: 2.3rem;
    height: 1.5rem;
    margin-right:.2rem;
  }
  .information-img>img{
    width: 100%;
    height: 100%;
  }
  .information-title-time{
    padding-top: .14rem;
    font-size: .28rem;
    overflow: hidden;
    width: 4.3rem;
    word-spacing: normal;
    text-align: left;
  }
  .information-title-time>div:first-child{
    padding-bottom: .18rem;
  }
  .load-more{
    font-size: .28rem;
    margin:.25rem;
    color:#333}
</style>
