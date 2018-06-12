<template>
    <div>
      <div class="qr-box">
        <img id="qrImg" src="" alt="qr">
      </div>
      <p class="tip">注：长按保存到手机相册</p>
      <div class="share">
        <div>
          <span class="iconfont icon_sns_wechat"></span>
          <p>分享朋友</p>
        </div>
        <div>
          <span class="iconfont icon_sns_circle"></span>
          <p>分享朋友圈</p>
        </div>
      </div>
      <div class="copy">
        <p id="qrText"  style="-webkit-user-select:text">　</p>
        <button ontouchend="" data-clipboard-action="copy" data-clipboard-target="#qrText" class="btn">复制URL</button>
      </div>
      <div class="tip-mask hide">
        <img src="../images/qr-tip.png">
      </div>
    </div>
</template>

<script>
    export default {
        name: "qr"
    }
</script>

<style scoped lang="less">
  .icon_warning:before {
    content: "\e6fc";
  }
  .icon_sns_circle:before {
    content: "\e6ea";
  }
  .icon_sns_wechat:before {
    content: "\e6f3";
  }
  a{
    display: block;
  }
  body,html, .layout {
    background-color: #f9fbfd;
  }
  .layout {
    font-size: 24px;
    position: relative;
  }
  .qr-box{
    width: 500px;
    height: 500px;
    margin: 105px auto 0;
    border: 3px solid #1a7ffc;
    padding: 5px;
    border-radius: 4px;
    img{
      width: 100%;
    }
  }
  .tip{
    text-align: center;
    margin-top: 10px;

  }
  .share{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 140px;
    text-align: center;
    .iconfont{
      font-size: 100px;
      color:#1a7ffc;
    }
  }
  .copy{
    text-align: center;
    margin-top: 20px;
    text-decoration: underline;
    .btn{
      width: 480px;
      height: 70px;
      background-color:#1a7ffc;
      color: #fff;
      border-radius: 5px;
      margin-top: 30px;
      box-shadow: 0 2px 15px -4px rgba(26, 127, 252, 0.8);
      &:active{
        background-color: #388ef9;
        transform: translateY(1px);
        box-shadow: 0 2px 10px -3px rgba(26, 127, 252, 0.8);
      }
    }
  }
  .tip-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 999;
    img{
      width: 400px;
      float: right;
    }
  }

</style>
