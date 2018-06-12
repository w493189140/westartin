<template>
    <div>
      <!--nav-->
      <section class="nav">
        <div class="current">进行中</div>
        <div>已结束</div>
      </section>
      <!--list-->
      <section class="actives" id="actives">
        <div id="activeList">
          <div class="list">
              <h4>
                  <span class="iconfont icon-tuiguang">深度简历优化课</span>
                  <span class="type red">进行中</span>
              </h4>
              <p class="iconfont icon_time">05-23 19:30-20:30</p>
              <div class="share">
                  <span class="iconfont icon_user">分享：1222人</span>
                  <div>
                      <span class="tip-btn iconfont icon_order">分享要求</span>
                      <span class="share-btn iconfont icon_share">分享</span>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <!--mask 分享要求-->
      <div class="mask tip-mask hide">
        <div class="content">
          <span class="iconfont icon_warning_hover"></span>
          <h3>分享要求</h3>
          <p class="des">
            1.请准时在5月25日晚上8点准时推广等。<br/> 2.点击分享后下载图片，分享到朋友圈。
          </p>
          <span class="close-btn btn">知道了</span>
        </div>
      </div>
      <!--img 分享-->
      <div class="mask share-mask hide">
        <div class="content">
          <img id="shareImg" src="../images/share.jpg">
          <span class="close-btn btn iconfont icon_failure"></span>
          <p class="tips">长按保存图片或分享给朋友</p>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "activelist"
    }
</script>

<style scoped lang="less">
  .icon_warning_hover:before {
    content: "\e6f7";
  }
  .icon-home:before {
    content: "\e636";
  }
  .icon_time:before {
    content: "\e6f2";
  }
  .icon_user:before {
    content: "\e6f5";
  }
  .icon_order:before {
    content: "\e6ca";
  }
  .icon_share:before {
    content: "\e6e2";
  }
  .icon-dingdan:before {
    content: "\e64a";
  }
  .icon_failure:before {
    content: "\e69f";
  }
  .icon-tuiguang:before {
    content: "\e619";
  }
  .icon_live:before {
    content: "\e6be";
  }
  a{
    display: block;
  }
  body,html, .layout {
    background-color: #f6f6f6;
    height: 100%;
  }
  .layout {
    font-size: 24px;
    display: flex;
    flex-direction: column;
  }
  .nav{
    width: 100%;
    height: 90px;
    background-color: #fff;
    line-height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #f1f1f1;
    font-size: 28px;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 25px;
      margin: auto;
      width: 1px;
      height: 40px;
      background-color: #ccc;
    }
    div{
      flex: 1;
    }
    .current{
      border-bottom: 1px solid #1a6ffc;
      color: #1a6ffc;
    }
  }

  .actives{
    padding:0 20px;
    margin: 20px 0;
    flex: 1;
    overflow: hidden;
    .list{
      background-color: #fff;
      padding: 15px;
      line-height: 55px;
      font-size: 28px;
      color: #cccccc;
      margin-bottom: 15px;
      box-shadow: 0 2px 15px -8px rgba(90,90,90,0.6);
    }
    .iconfont:before{
      font-size:30px;
      margin-right: 4px;
      vertical-align: middle;
    }
    .type{
      font-size: 24px;
      color: #999;
    }
    .share{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    h4{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: #2F3032;
    }
    .tip-btn{
      width: 170px;
      height: 50px;
      line-height: 49px;
      border-radius: 6px;
      border: 1px solid  #cccccc;
      display: inline-block;
      text-align: center;
      font-size: 24px;
    }
    .red{
      color: #c90000;
    }
    .share-btn{
      width: 130px;
      height: 50px;
      line-height: 49px;
      border-radius: 6px;
      border: 1px solid  #3d7ede;
      display: inline-block;
      text-align: center;
      font-size: 24px;
      color: #3d7ede;
      margin-left: 5px;
    }
  }
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 999;
    .content{
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: auto;
      transform: translateY(-50%);
      border-radius: 6px;
      box-shadow: 0 5px 20px -2px rgba(0,0,0,0.3);
    }
  }

  .tip-mask{
    .content{
      width: 575px;
      text-align: center;
      padding: 0 20px 30px;
    }
    .iconfont{
      color: #1765da;
      font-size: 130px;
      padding-top: 30px;
    }
    h3{
      font-size: 40px;
      margin-bottom: 10px;
      //font-weight: 600;
      color:#000;
    }
    .des{
      font-size: 26px;
      color: rgba(88, 88, 88, 0.8);
      line-height:40px ;
    }
    .btn{
      display: inline-block;
      width: 200px;
      height: 56px;
      line-height: 56px;
      text-align: center;
      border: 2px solid #969696;
      margin-top: 30px;
      color: rgba(88, 88, 88, 0.8);
    }
  }

  .share-mask{
    .content{
      width: 575px;
      text-align: center;
      margin-top: -20px;
      img{
        width: 100%;
      }
    }
    .btn{
      position: absolute;
      top: -40px;
      right: -40px;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      font-size: 36px;
      border-radius: 50%;
      background-color: rgba(0,0,0,0.5);
    }
    .tips{
      margin-bottom: -60px;
      color: rgba(255,255,255,0.7);
    }
  }
</style>
