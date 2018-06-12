<template>
  <div class="layout">
    <section class="content">
      <form id="content">
        <div class="login">
          <span>头像</span>
          <div class="head-img chooseImage">
            <img src="../assets/touxiang.png" />
            <input hidden name="userImg" type="text">
          </div>
        </div>
        <div class="login">
          <span>姓名</span><input name="userName" type="text" placeholder="" maxlength="8">
        </div>
        <div class="login">
          <span>昵称</span><input name="nickName" type="text" placeholder="" maxlength="8">
        </div>
        <div class="login">
          <span>邮箱</span><input name="email" type="text" placeholder="" maxlength="18">
        </div>
        <div class="login">
          <span>性别</span>
          <input hidden class="userSex" name="userSex" type="text">
          <div class="sex">
            <span class="sex-item" data-sex="0"><i class=" iconfont icon-sexman active"></i>男</span>
            <span class="sex-item" data-sex="1"><i class="iconfont icon-sexwomen"></i>女</span>
          </div>
        </div>
      </form>

      <button class="login-btn">提交</button>
    </section>
    <div class="success-mask" style="display: none">
      <div class="info">
        <span class="iconfont icon_continue_hover"></span>
        <h3>提交成功</h3>
        <p class="des">  </p>
        <span class="btn tohome">返回首页</span>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "userinfo"
    }
</script>

<style scoped lang="less">
  .icon-sexman:before {
    content: "\e64b";
  }
  .icon-sexwomen:before {
    content: "\e64c";
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  input{
    text-align: right;
  }
  .head-img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }
  img{
    width: 100%;
  }
  .sex{
    color: rgba(150,150,150,0.8);
    span{
    margin: 0 10px;
     i{
     font-size: 50px;
     vertical-align: middle;
     margin-right: 4px;
   }
  }
  }
  .active{
    color:#548BEE;
  }
  }
  .login-btn{
    background: #548BEE;
    color: #FFFFFF;
    width: 100%;
    height: 100px;
    border-radius: 4px;
    margin: 160px auto 60px;
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
  }
  }


</style>
