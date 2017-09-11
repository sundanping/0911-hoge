<template>
<div>
  <header align="center" >
    <div>加入我们</div>
    <span @click=""><img src="./../assets/images/public/left.jpg" alt="" title="back"></span>
  </header>
  <div class="top-img" :style="background">
    <div style="text-align: center;margin-left: .4rem;padding-top:1rem;" align="center">
      <h2>合·作</h2>

      <p style="margin: .1rem 0">我们用心合作，像相互咬合的齿轮，齐头并进，</p>
      <p>并输予企业发展源源不断的动力。</p>
    </div>
  </div>
  <div style="height: .2rem;background-color: #f5f5f5"></div>
  <section class="join-us" >
    <div :style="backgroundIndent" class="joinUs-title">加入我们</div>
    <hr>
    <div style="font-size: .2rem">
    <yd-accordion >
      <yd-accordion-item title="李白"  style="text-align: left;">
        <div style="padding: .24rem;">
          李白（701年－762年），字太白，号青莲居士，又号“谪仙人”，是唐代伟大的浪漫主义诗人，被后人誉为“诗仙”，与杜甫并称为“李杜”，为了与另两位诗人李商隐与杜牧即“小李杜”区别，杜甫与李白又合称“大李杜”。其人爽朗大方，爱饮酒作诗，喜交友。
        </div>
      </yd-accordion-item>
      <yd-accordion-item @click.native="ajax()"  title="杜甫">
        <div style="padding: .24rem;">
          杜甫（712年—770年），字子美，汉族，<p >本襄阳人</p>，后徙河南巩县。自号少陵野老，唐代伟大的现实主义诗人，与李白合称“李杜”。为了与另两位诗人李商隐与杜牧即“小李杜”区别，杜甫与李白又合称“大李杜”，杜甫也常被称为“老杜”。
        </div>
      </yd-accordion-item>
      <yd-accordion-item v-show="as" title="王维" :class="as?'animation_opactiy_once': ''">
        <div style="padding: .24rem;">
          王维（701年－761年，一说699年—761年），河东蒲州（今山西运城）人，祖籍山西祁县。唐朝著名诗人、画家，字摩诘，号摩诘居士。
        </div>
      </yd-accordion-item>
    </yd-accordion>
    </div>
  </section>
</div>
</template>
<script>
  export default {
    name: 'customer',
    data () {
      return {
        as: true,
        background: {
          backgroundImage: 'url(' + require('../assets/images/joinUs/1_01.jpg') + ')',
          backgroundSize: '100% 100%'
        },
        backgroundIndent: {
          backgroundImage: 'url(' + require('../assets/images/joinUs/join.png') + ')',
          backgroundSize: '.34rem .34rem',
          backgroundRepeat: 'no-repeat'
        }
      }
    },
    mounted () {
      this.$http.all([
        this.$http.get('http://www.hoge.cn/m2o/pub/col.php?id=17'),
        this.$http.get('http://www.hoge.cn/m2o/pub/col.php?id=18'),
        this.$http.get('http://www.hoge.cn/m2o/pub/col.php?id=19'),
        this.$http.get('http://www.hoge.cn/m2o/pub/col.php?id=21')
      ])
        .then(this.$http.spread(function (res1, res2, res3, res4) {
          console.log('User', res1)
          console.log('Repositories', res2)
        }))
    },
    methods: {
      ajax () {
        this.as = !this.as
        console.log('methods')
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
  .join-us{
    padding: .3rem .24rem .24rem .24rem;
  }
  .joinUs-title{
    height: .34rem;
    line-height: .34rem;
    font-size: .24rem;
    color:#333;
    text-indent: .43rem;
    text-align: left;

  }
  hr{
    margin: 0;
    padding: 0;
    margin-top:.25rem;
  }
</style>
