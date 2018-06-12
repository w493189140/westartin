<template>
    <div>
      <section class="content">
        <form onsubmit="javascript:checkContent(this, event)" >
          <div class="login">
            <input class="tel" name="phone" type="tel" placeholder="请输入手机号" maxlength="11">
          </div>
          <div class="login">
            <input class="password" name="password" type="password" placeholder="请输入密码" maxlength="11">
          </div>
          <div class="login">
            <input class="name" name="userName" type="text" placeholder="请输入姓名" maxlength="11">
          </div>
          <div class="login">
            <input class="nickname" name="nickName" type="text" placeholder="请输入昵称" maxlength="11">
          </div>
        </form>
        <button  ontouchend=""  class="login-btn">提交</button>
      </section>
      <div class="success-mask hide">
        <div class="info">
          <span class="iconfont icon_continue_hover"></span>
          <h3>提交成功</h3>
          <p class="des">需要1-3个工作日，请等待审核</p>
          <span id="closeBtn" class="btn">返回首页</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "addfx"
    }
</script>

<style scoped lang="less">
  .icon_warning:before {
    content: "\e6fc";
  }
  .icon_continue_hover:before {
    content: "\e698";
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
  .content{
    padding: 150px 30px 0;
    font-size:28px;
  }
  .login{
    height: 108px;
    line-height: 108px;
    width: 100%;
    border-bottom: 1px solid #EEF0F2;
  }
  .login-btn{
    background: #548BEE;
    color: #FFFFFF;
    width: 100%;
    height: 100px;
    border-radius: 4px;
    margin: 160px auto 60px;
    box-shadow: 0 2px 15px -4px rgba(26, 127, 252, 0.8);
    &:active{
      background-color: #388ef9;
      transform: translateY(1px);
      box-shadow: 0 2px 10px -3px rgba(26, 127, 252, 0.8);
    }
  }
  .tip{
    position: relative;
    text-align: center;
    margin: 0 30px;
    color: #5B5A5A;
  }

  .jump .active{
    color: #FF5230;
  }

  .success-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 999;
    .info{
      width: 575px;
      height: 415px;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 6px;
      box-shadow: 0 5px 20px -2px rgba(0,0,0,0.3);
      padding-top: 30px;
      text-align: center;
    }
    .iconfont{
      color: #04df28;
      font-size: 130px;
    }
    h3{
      font-size: 40px;
      margin-bottom: 10px;
      //font-weight: 600;
      color:#000;
    }
    .des{
      font-size: 16px;
      color: rgba(88, 88, 88, 0.8);
    }
    .btn{
      display: inline-block;
      width: 200px;
      height: 56px;
      line-height: 56px;
      text-align: center;
      border: 2px solid #969696;
      margin-top: 40px;
      color: rgba(88, 88, 88, 0.8);
    }
  }

</style>
