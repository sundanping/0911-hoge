<template>
  <div>
    <header align="center">
      <div>加入我们</div>
      <span ><router-link to="index"><img src="./../assets/images/public/left.jpg" alt="" title="back"></router-link></span>
    </header>
    <div class="top-img" :style="background">
      <div style="text-align: center;margin-left: .4rem;padding-top:1rem;" align="center">
        <h2>合·作</h2>

        <p style="margin: .1rem 0">我们用心合作，像相互咬合的齿轮，齐头并进，</p>
        <p>并输予企业发展源源不断的动力。</p>
      </div>
    </div>
    <div style="height: .2rem;background-color: #f5f5f5"></div>
    <section class="">
      <div :style="backgroundIndent" class="joinUs-title join-us">加入我们</div>
      <hr>
      <!--招聘信息 BEGIN-->
      <div style="font-size: .2rem;text-align: left;" v-for="(item, $inx) in recruit">
        <div class="keywords">
          <div class="inline-block" :style="backgroundColors[$inx]"></div>
          <div class=" inline-block">{{item.keywords}}/{{item.title}}</div>
        </div>
        <yd-accordion>
          <yd-accordion-item class="padding-left-right" @click.native="ajax(data.id)" :title="data.title"
                             style="text-align: left;" v-for="(data,  index) in item.workList" v-show="index<showNum ">
            <div style="padding: .24rem;">
              <!--<div class="font-28">{{workBrief.title}}</div>-->
              <div style="margin-bottom:.1rem;color:#999;font-weight: bold" class="font-24 color-999 bold">职位详情:</div>
              <div class="font-24" v-html="workBrief.content"></div>
              <div style="color:#4FC2F8"><a style="color:#4FC2F8" href="mailto:wushiyu@hoge.cn">简历邮箱：wushiyu@hoge.cn</a></div>
            </div>
          </yd-accordion-item>
          <div class="find-more" @click="toggle($inx)" v-show="item.workList.length>4">查看更多</div>
          <div style="height: .2rem;background-color: #f5f5f5"></div>
        </yd-accordion>

      </div>
      <!--招聘信息 END-->
      <!---->
    </section>
    <!--团队建设-->
    <section>
      <div :style="backgroundTeam" class="joinUs-title join-us">团队建设</div>
      <div class="team-build" v-for="item in teams">
        <div class="team-build-image"><img :src="item.indexpic.host+item.indexpic.dir+item.indexpic.filepath+item.indexpic.filename" alt=""></div>
        <div class="team-build-title">{{item.title}}</div>
        <div style="clear: both"></div>
      </div>
      <div class="find-more" @click="findMore()">{{moreMessage}}</div>

    </section>
  </div>

</template>
<script>
  export default {
    name: 'customer',
    data () {
      return {
//        recruit: [1, 2, 3],
        recruit: [],
        workBrief: [],
        showNum: 4,
        offset: 0,
        count: 3,
        moreMessage: '查看更多',
        teams: null,
        background: {
          backgroundImage: 'url(' + require('../assets/images/joinUs/1_01.jpg') + ')',
          backgroundSize: '100% 100%'
        },
        backgroundIndent: {
          backgroundImage: 'url(' + require('../assets/images/joinUs/join.png') + ')',
          backgroundSize: '.34rem .34rem',
          backgroundRepeat: 'no-repeat'
        },
        backgroundTeam: {
          backgroundImage: 'url(' + require('../assets/images/joinUs/23_05.png') + ')',
          backgroundSize: '.34rem .34rem',
          backgroundRepeat: 'no-repeat'
        },
        backgroundColors: [
          {
            backgroundColor: '#E57373',
            width: '.04rem',
            position: 'relative',
            top: '.04rem',
            height: '.28rem'
          },
          {
            backgroundColor: '#81C784',
            width: '.04rem',
            position: 'relative',
            top: '.04rem',
            height: '.28rem'
          },
          {
            backgroundColor: '#F4D161',
            width: '.04rem',
            position: 'relative',
            top: '.04rem',
            height: '.28rem'
          },
          {
            backgroundColor: '#4FC2F8',
            width: '.04rem',
            position: 'relative',
            top: '.04rem',
            height: '.28rem'
          }
        ]
      }
    },
    mounted () {
      setTimeout(this.teamBuild, 1500)
      let _this = this
      this.$http.all([
        this.$http.get('http://www.hoge.cn/m2o/pub/col.php?id=17'),
        this.$http.get('http://www.hoge.cn/m2o/pub/col.php?id=18'),
        this.$http.get('http://www.hoge.cn/m2o/pub/col.php?id=19'),
        this.$http.get('http://www.hoge.cn/m2o/pub/col.php?id=21'),
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=17,18,19,21&count=1000&offset=0'),
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=8&count=15&offset=0')
      ])
        .then(this.$http.spread(function (development, projectManagementCenter, businessDevelopCenter, marketOperationCenter, worksList, buildTeam) {
          let RDC = {
            id: development.data[0].id, title: development.data[0].title, keywords: development.data[0].keywords, workList: []
          }
          let BDC = {
            id: businessDevelopCenter.data[0].id, title: businessDevelopCenter.data[0].title, keywords: businessDevelopCenter.data[0].keywords, workList: []
          }
          let PMC = {
            id: projectManagementCenter.data[0].id, title: projectManagementCenter.data[0].title, keywords: projectManagementCenter.data[0].keywords, workList: []
          }
          let APC = {
            id: marketOperationCenter.data[0].id, title: marketOperationCenter.data[0].title, keywords: marketOperationCenter.data[0].keywords, workList: []
          }
          for (let i = 0; i < worksList.data.length; i++) {
            if (worksList.data[i].column_id === RDC.id) {
              RDC.workList.push(worksList.data[i])
            } else if (worksList.data[i].column_id === PMC.id) {
              PMC.workList.push(worksList.data[i])
            } else if (worksList.data[i].column_id === BDC.id) {
              BDC.workList.push(worksList.data[i])
            } else if (worksList.data[i].column_id === APC.id) {
              APC.workList.push(worksList.data[i])
            }
          }
          _this.recruit = [RDC, PMC, BDC, APC]
        }))
    },
    methods: {
      ajax (id) {
        let that = this
        this.$http.get('http://www.hoge.cn/m2o/pub/content.php?id=' + id)
          .then(function (response) {
            that.workBrief = response.data[0]
//            console.log(that.workBrief)
//            console.log(that.workBrief.content)
          })
          .catch(function (err) {
            console.log(err)
          })
//        console.log(id)
      },
      toggle (ev) {
        this.showNum = 30
        console.log(ev)
      },
      teamBuild () {
        let that = this
        this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=8&offset' + that.offset + '&count=' + that.count)
          .then(function (response) {
            that.teams = response.data
            console.log(JSON.stringify(that.teams))
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      findMore () {
        this.offset += 3
        this.count = 30
        this.offset >= 3 ? this.moreMessage = 'Duang 到底了' : '加载更多'
        this.teamBuild()
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
  .join-us{
    margin: .3rem .24rem .24rem .24rem;
  }
  .padding-left-right{
    padding:0 .24rem;
    border-top:0 solid #fff;
  }
  .joinUs-title{
    height: .34rem;
    line-height: .34rem;
    font-size: .24rem;
    color:#333;
    font-weight: bold;
    text-indent: .43rem;
    text-align: left;

  }
  hr{

    margin: .3rem .24rem .24rem .24rem;
    margin-top:.25rem;
    border-color: #f2f2f2!important;
    background-color:#f2f2f2!important ;
  }

  .keywords{
    font-size: .24rem;
    margin:.24rem;
  }
  .find-more{
    text-align: center;
    font-size: .24rem;
    padding: .25rem;
  }
  .inline-block{
    display: inline-block;
  }

  /*.team-build:after {*/
    /*　display:block;clear:both;content:"";visibility:hidden;height:0*/
  /*}*/

  .team-build{
    padding:0.2rem .51rem .1rem .24rem;
    display: block;
    height:2rem;
    border-bottom: 1px solid #f2f2f2;
  }
  .team-build:after{
    content: '';
    clear: both;
    display: block;
  }
  .team-build div{
    display: inline-block;
    float:left;

  }
  .team-build-image{
      width: 2.3rem;
      height: 1.5rem;
    background-color: aqua;
    }
  .team-build-image img{
    width: 100%;
    height: 100%;
  }
  .team-build-title{
    font-size: .28rem;
    height: 1.5rem;
    width: 4.2rem;
    text-align: left;
    white-space: normal;
    padding-top: .14rem;
    margin-left: .2rem;
  }
</style>
