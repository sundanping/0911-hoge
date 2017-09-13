<template>
  <div class="parent-div">
    <header>
      <div>
        公司介绍
      </div>
      <span><router-link to="index"><img src="./../assets/images/public/left.jpg" alt=""></router-link></span>
    </header>
    <div class="top-img" :style="background">
      <div style="text-align: center;margin-left: .4rem;padding-top:1rem;" align="center">
        <h2>专·业</h2>

        <p style="margin: .1rem 0">我们把专业、责任变成自己的代名词</p>
        <p>致力于成为最具价值的媒体产品与技术提供商</p>
      </div>
    </div>
    <div class="line-company"></div>
    <section class="choice">
      <h2 :style="titleImage[0]">创变之选</h2>
      <h1>厚建软件成立于2004年，是国内顶级的媒体产品技术及运营服务提供商。</h1>
      <p>
        作为具有前瞻性的行业领袖，厚建扎根于媒体领域，遵循其传播规律的同时，也推动着它的变革与发展。厚建始终秉承着“创变之选”的理念，研发了大量拥有自主知识产权的软件产品，覆盖媒体转型的全部生态环境，成为中国新媒体领域的首家全产业链产品提供商。</p>
      <p>经过10余年的行业积淀，厚建软件现已覆盖30个省及直辖市，拥有行业客户300余家，其中媒体客户达200余家，市场占有率稳居第一。</p>
    </section>
    <div class="line-company"></div>
    <section class="develop-progress">
      <h2 :style="titleImage[1]">发展历程</h2>
      <div>
        <div>
          <ul>
            <li v-for="item in develop">
              <span>{{item.year}}</span>
              <div class="circle">
                <div></div>
              </div>
              <span>{{item.message}}</span>

            </li>

          </ul>
          <div class="line-between-year-message"></div>
        </div>
      </div>
    </section>
    <div class="line-company"></div>
    <!--奖项-->
    <section class="prize" >
      <h2  :style="titleImage[1]">奖项</h2>
      <div class="prize-message">
        <!--image-->
        <div class="prize-image">
          <img style="width: 100%;height: 100%" src="../assets/images/company-introduce/7_03.png" alt="">
        </div>
        <!--title -->
        <div class="prize-message-title">
          <div>2016年广播电视科技创新产品奖</div>
          <div>
            <h1 style="font-size: .3rem;color:#E57373 ;">特点:</h1>
            <p style="overflow: auto;font-size:.22rem;white-space: nowrap;font-size:.2rem!important;">统一管理后台、全终端表现覆盖、混合云架构部署</p>
          </div>
        </div>
      </div>

      <div class="prize-message" >
        <!--image-->
        <div class="prize-image">
          <img style="width: 100%;height: 100%" src="../assets/images/company-introduce/7_03.png" alt="">
        </div>
        <!--title -->
        <div class="prize-message-title">
          <div>2016年广播电视科技创新产品奖</div>
          <div>
            <h1 style="font-size: .3rem;color:#E57373 ;">特点:</h1>
            <p style="overflow: auto;font-size:.22rem;white-space: nowrap;font-size:.2rem!important;"> 创新产品、创新项目、创新技术</p>
          </div>
        </div>
      </div>
      <div style="height:2.8rem" class="prize-message" >
        <!--image-->
        <div style="width:2.3rem;height:2.39rem">
          <img style="width: 100%;height: 100%" src="../assets/images/company-introduce/8_03.png" alt="">
        </div>
        <!--title -->
        <div style="height:2.39rem" class="prize-message-title ">
          <div>中国电影电视技术学会科学技术奖</div>
          <div>
            <h1 style="font-size: .3rem;color:#E57373 ;">特点:</h1>
            <p style="overflow: auto;font-size:.22rem;white-space: nowrap;font-size:.2rem!important;"> 立足民生服务、便捷百姓生活、实行广电+战略</p>
          </div>
        </div>
      </div>
    </section>
    <div class="line-company"></div>

    <!--产品理念-->
    <section class="product-concept">
      <h2 :style="titleImage[2]">产品理念</h2>
      <div :style="productConcept" class="product-message">
        <div class="product-concept-surface" style="background-color: rgba(0,0,0,0.45);height:4.08rem">
          <ul>
            <li @click="current=0" :class="current===0 ? 'backgroudTab' : ''">弹性云计算</li>
            <li @click="current=1" :class="current===1 ? 'backgroudTab' : ''">完善用户体验</li>
            <li @click="current=2" :class="current===2 ? 'backgroudTab' : ''">快速迭代升级</li>
            <li @click="current=3" :class="current===3 ? 'backgroudTab' : ''">服务客户的客户</li>
          </ul>
            <div v-if="current===0">云计算为用户提供了越来越多的业务灵活性，用户直接通过Web浏览器，在云计算平台上快速部署和管理自己的应用程序，并设置访问权限。可以根据需求随时增加、扩展或者缩减计算能力，最大化地利用资源，节省运营成本。</div>
            <div v-else-if="current===1">深入了解用户对产品的使用方式与操作习惯，找准用户痛点，将用户体验做到极致。以产品使用的便利性为设计原点，置身用户应用环境，从细节处着手，挖掘需求完善用户体验，强化产品的易用性。化繁为简，从而大大提高工作效率。</div>
            <div v-else-if="current===2">在产品开发过程中，厚建聆听用户的声音、尊重用户的选择，采用迭代式开发策略。根据用户变化的需求，不断地细化与升级产品，从而保障了用户在产品功能上的应用最大化，以及享受到更多的附加价值。</div>
            <div v-else-if="current===3">不同于市场同类产品，厚建产品不是以简单满足直接用户需求为目标，而是将用户的用户作为最终服务对象。了解与分析他们的使用习惯，以他们为立脚点，挖掘最终用户的深层次需求，以完美的用户体验提升客户粘合度。</div>
        </div>
      </div>
    </section>
    <div class="line-company">


    </div>

  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        current: 0,
        interval: 5000,
        develop: [
          {
            year: '2017年',
            message: '全面支撑人民日报“中央厨房”建设,媒体再造战略启航'
          },
          {
            year: '2016年',
            message: '发布MXU融合媒体运营平台，启动融合播发平台'
          },
          {
            year: '2015年',
            message: '媒体融合大潮下，构建两微一端融合生态圈'
          },
          {
            year: '2014年',
            message: '发布厚建云服务产品，启动厚建云平台建设'
          },
          {
            year: '2013年',
            message: '发布智慧城市移动端产品，引领传媒进入移动时代'
          },
          {
            year: '2012年',
            message: '发布M2O新媒体综合运营平台，实现跨平台多终端统一管控'
          },
          {
            year: '2009年',
            message: '发布全媒体记者发稿系统等产品，开始深入媒体生产环节'
          },
          {
            year: '2007年',
            message: '领先提出三屏互动、台网互动的全平台解决方案'
          },
          {
            year: '2005年',
            message: '支撑国内首批网络电视台用户上线'
          },
          {
            year: '2004年',
            message: '门户网时代，发布网站内容管理颠覆性产品LivCMS'
          }
        ],
        background: {
          backgroundImage: 'url(' + require('../assets/resource/company/company_1.jpg') + ')'
        },
        titleImage: [
          {backgroundImage: 'url(' + require('../assets/images/company-introduce/1.png') + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundSize: '.34rem .34rem',
            textIndent: '.5rem'
          },
          {
            backgroundImage: 'url(' + require('../assets/images/company-introduce/3_03.png') + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundSize: '.34rem .34rem',
            textIndent: '.5rem'
          },
          {
            backgroundImage: 'url(' + require('../assets/images/company-introduce/2_03.png') + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundSize: '.34rem .34rem',
            textIndent: '.5rem'
          }
        ],
        prizes: [
          {
            image: '../assets/images/company-introduce/7_03.png',
            backgroundRepeat: 'no-repeat',
            title: '',
            message: ''
          },
          {
            image: '',
            title: '2016年广播电视科技创新产品奖',
            message: ''
          }
        ],
        productConcept: {
          backgroundImage: 'url(' + require('../assets/images/company-introduce/9_02.png') + ')',
          backgroundSize: '100% 100%'

        }
      }
    },
    mounted () {
      this.auto()
    },
    methods: {
      auto () {
        this.timer = setInterval(() => {
          if (this.current === 3) {
            this.current = 0
          } else {
            this.current++
          }
        }, this.interval)
      }
    }
  }
</script>
<style scoped>
  .parent-div {

  }
  .backgroudTab {
    background-color: #81C784
  }
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

  header > span  img {
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

  .line-company {
    height: .2rem;
    background-color: #f2f2f2;
  }

  section {
    text-align: left;
    font-size: .24rem;
    padding: .3rem .24rem;
  }

  section > p {
    color: #666;
    text-indent: .2rem;
  }

  .choice > h2, .develop-progress > h2 ,.prize>h2{
    color: #333;
    font-weight: 600;
  }
  .develop-progress >h2{
    margin-bottom:.36rem;
  }
  .choice > h1 {
    padding-top: .3rem;
    color: #020202;
    font-weight: 600;
    font-size: .28rem;
    padding-bottom: .3rem;
  }

  .develop-progress span {
    font-size: .2rem;
  }

  .develop-progress span:last-child {

  }

  .develop-progress li {
    margin-bottom: .2rem;
  }

  .develop-progress span:first-child {
    font-size: .22rem;
    font-weight: 600;
  }

  .line-between-year-message {
    width: 1px;
    position: absolute;
    height: 5.6rem;
    background-color: #717171;
    left: 1.15rem;
    top: 9.7rem;

  }

  .circle {
    box-shadow: inset 0px 0px 22px #f3f4f5;
    width: .24rem;
    height: .24rem;
    border: 2px solid #929292;
    box-shadow: 0 0 1px #f4f5ff;
    background-color: #f3f4f5;
    border-radius: .13rem;
    position: relative;
    display: inline-block;
    z-index: 999;
  }
  .circle >div{
    box-shadow: inset 0px 0px 22px #f3f4f5;
    width: .2rem;
    height: .2rem;
    border: 2px solid #f3f4f5;
    box-shadow: 0 0 1px #f4f5ff;
    background-color: #4FC2F8;
    border-radius: .2rem;
    position: relative;
    top:-.06rem;
    left:-.01rem;
    box-sizing: border-box;
    display: inline-block;
    z-index: 999;
  }
  .prize-message{
    height: 1.9rem;
    margin-bottom:.2rem;
    border-bottom: 2px solid #999;
  }
  .prize-message>div{
    display: inline-block;
    float: left;
  }
  .prize-image{
    width: 2.3rem;
    height: 1.5rem;
    background-color: aqua;
  }
  .prize-message-title{
    padding-left: .2rem;
  }
  .prize-message-title>div:first-child{
    height: .75rem;
    width: 100%;
    line-height: .75rem;
  }
  .prize>h2{
    margin-bottom:.3rem;
  }
  .product-concept{
    padding: 0!important;
  }
  .product-concept>h2{
    padding:.35rem 0;
    margin-left:.24rem;
    font-weight: 600;
  }
  .product-message{
    height: 4.08rem;
    background-color: aqua;
  }
  .product-concept-surface>ul,.product-concept-surface>div{
    display: inline-block;
    float:left;
  }
  .product-concept-surface>div{
    display: inline-block;
    float:left;
    width: 4.2rem;
    margin:.58rem .24rem 0 .3rem;
    height:2rem;
    color:#fff;
  }
  .product-concept-surface>ul{
    width: 2.5rem;
    height: 3.48rem;
    margin-top:.3rem;
    margin-left:.24rem;
    background-color:rgba(0,0,0,.6);
  }
  .product-concept-surface>ul>li{
    height: .87rem;
    line-height: .87rem;
    text-align: center;
    color: white;
    border-bottom: 1px solid #636363;
  }
</style>
