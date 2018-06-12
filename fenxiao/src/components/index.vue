<template>
    <div class="layout">
      <!-- 个人中心-->
      <section class="user clearfix">
        <div class="avatar">
          <img src="../assets/touxiang.png" alt="">
        </div>
        <div class="info">
          <p class="name">小伙 区域总代理</p>
          <p class="des">个人信息、密码修改</p>
        </div>
        <span @click="toUserInfo" class="iconfont icon_left_arrow"></span>
      </section>
      <!--人数xinxi-->
      <section class="number">
        <div class="today left-line">
          <p>1200人</p>
          <p class="name">今赠人数</p>
        </div>
        <div class="sum left-line">
          <p>422200人</p>
          <p class="name">总共人数</p>
        </div>
        <div class="qr" id="qrUrl">
          <p>个</p>
          <p class="name">我的任务</p>
        </div>
      </section>
      <!--分销distribution-->
      <section class="distribution cont">
        <h3 class="title">我的分销</h3>
        <div class="content">
          <div>
            <a href="#">
              <span class="iconfont icon_order"></span>
              <p>分销管理</p>
            </a>
          </div>
          <div>
            <a href="#">
              <span class="iconfont icon_qrcode"></span>
              <p>我的二维码</p>
            </a>
          </div>
          <div>
            <a href="http://www.westartin.com/">
              <span class="iconfont icon-home"></span>
              <p>官网</p>
            </a>
          </div>
          <div>
            <a href="#">
              <span class="iconfont icon_add_friends"></span>
              <p>添加分销</p>
            </a>
          </div>
          <div>
            <a href="#">
              <span class="iconfont icon_friend"></span>
              <p>用户管理</p>
            </a>
          </div>
          <div>
            <a href="#">
              <span class="iconfont icon_histogram"></span>
              <p>数据统计</p>
            </a>
          </div>
          <div>
            <a href="#">
              <span class="iconfont icon-tuiguang"></span>
              <p>我的推广</p>
            </a>
          </div>

        </div>
      </section>
      <!--资产asset-->
      <section class="asset cont">
        <h3 class="title">我的资产</h3>
        <div class="content">
          <div>
            <a href="#">
              <span class="iconfont icon_yongjin"></span>
              <p>我的佣金</p>
            </a>
          </div>
          <div>
            <span class="iconfont icon_wallet"></span>
            <p>提现</p>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
    export default {
        name: "index",
      methods:{
        toUserInfo(){
          this.$router.push('/userinfo')
        }
      }
    }
</script>

<style scoped lang="less">
  .icon_qrcode:before {
    content: "\e6d5";
  }

  .icon_order:before {
    content: "\e6ca";
  }

  .icon_friend:before {
    content: "\e6ad";
  }

  .icon_wallet:before {
    content: "\e6fb";
  }

  .icon-tuiguang:before {
    content: "\e619";
  }

  .icon_yongjin:before {
    content: "\e65a";
  }

  .icon-home:before {
    content: "\e636";
  }

  .icon_left_arrow:before {
    content: "\e6b1";
  }

  .icon_histogram:before {
    content: "\e6ab";
  }

  .icon_add_friends:before {
    content: "\e687";
  }

  a {
    display: block;
  }

 .layout {
    background-color: #fff;
  }

  .layout {
    font-size: 24px;
    position: relative;
  }

  .user {
    padding: 40px 50px;
    display: flex;
    flex-direction: row;
    background-color: rgb(26, 111, 252);
    color: #fff;
    justify-content: space-between;
  .avatar {
    width: 105px;
    height: 105px;
    border-radius: 50%;
    overflow: hidden;
  img {
    width: 100%;
  }
  }
  .info {
  //width: 380px;
    flex: 1;
    padding: 0 25px;
  .name {
    font-size: 32px;
    line-height: 66px;
  }
  .des{
    color: rgba(255,255,255,0.65);
  }
  }
  .icon_left_arrow {
    font-size: 40px;
    margin-top: 20px;
    color: #fff;
  }
  }

  .number {
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    text-align: center;
    font-size: 32px;
    color: rgb(255,255, 255);
    height: 150px;
    padding-top: 25px;
    background-color: rgb(26, 127, 252);
    border-bottom: 15px solid #f0f0f0;
  > div {
    flex: 1;
    position: relative;
  }
  .name{
    font-size: 28px;
    margin-top: 3px;
  }
  .left-line:before {
    content: "";
    position: absolute;
    top: 10px;
    right: 0;
    height: 60px;
    width: 1px;
    background-color: rgba(179, 179, 179, 0.7);
  }
  .icon_qrcode {
    font-size: 60px;

  }
  .qr-icon {
  //transform: translateY(-1vw);
    margin-top: -1.5vw;
  }
  .qr-name {
    line-height: 1;
    margin-top: -0.5vw;
  }
  }


  .cont {
    border-top: 2px solid #f0f0f0;
    background-color: #fff;
    color: rgb(179, 179, 179);
  a{
    color: rgb(179, 179, 179);
  }
  .title {
    color: rgb(82, 82, 82);
    height: 65px;
    line-height: 65px;
    padding: 0 36px;
    font-size: 30px;
    position: relative;
  &:before {
     content: "";
     position: absolute;
     left: 20px;
     top: 18px;
     width: 5px;
     height: 25px;
     background-color: #174cda;
   }
  }
  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    padding: 0 10px;
  > div {
    width: 25%;
    padding: 10px 0;
  }
  }
  .iconfont {
    font-size: 60px;
  }
  .icon_order {
    color: #e06532;
  }
  .icon_qrcode {
    color: #e8b21e;
  }
  .icon-home {
    color: #64a340;
  }
  .icon_add_friends {
    color: #cc2123;
  }
  .icon_friend {
    color: #3492cf;
  }
  .icon_histogram {
    color: #81bd36;
  }
  .icon-tuiguang {
    color: #3068b1;
  }
  .icon_yongjin {
    color: #d7c128;
  }
  .icon_wallet {
    color: #e06532;
  }
  }
</style>
