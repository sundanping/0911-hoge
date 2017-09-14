<template>
<div>
  <header align="center">
    <div style="overflow: hidden;padding:0 1rem;white-space: nowrap;text-overflow: ellipsis">{{title}}</div>
    <span ><router-link to="index"><img src="./../assets/images/public/left.jpg" alt="" title="back"></router-link></span>
  </header>
  <div class="content" style=""  v-html="content"></div>
</div>
</template>
<script>
  export default {
    name: 'details',
    data () {
      return {
        data: this.$route.query.name,
        message: '',
        title: '',
        content: ''
      }
    },
    mounted () {
      let arr = JSON.parse(this.data)
      this.title = arr.title
      let that = this
      this.$http.get('http://www.hoge.cn/m2o/pub/content.php?id=' + arr.id)
        .then(function (response) {
          that.content = response.data[0].content
          console.log(response.data[0].content)
          console.log(document.getElementsByTagName('img'))
        })
        .catch(function (err) {
          console.log(err)
        })
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
  .content{
    width:100%;
    height:3rem;
    text-align: left;
    font-size: .28rem;
    padding-bottom:.5rem;
    text-indent: .4rem;
  }
  .content p>img{
    width: 100%!important;
    height:100%!important;
  }
.image{
  width: 100%!important;
  height:100%!important;
}
</style>
