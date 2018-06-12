<template>
  <div>
    <section class="main">
      <h2 class="title">
        <span>总收入</span>
        <span>{{totalIncome }}元</span>
      </h2>
      <div class="nav">
        <div>
          <p>{{availableAmount }}元</p>
          <p>可提现余额</p>
        </div>
        <div>
          <p>{{alreadyPaid }}元</p>
          <p>待提现余额 <span class="iconfont icon_query"></span></p>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="input-wrapper">
        <div class="input">
          <span>¥&nbsp;&nbsp;</span>
          <input id="moneyNum" type="tel" placeholder="请输入提现金额" maxlength="10">
        </div>
        <p class="tip">可提现，请留意到账时间</p>
        <button id="moneyBtn" class="btn">提现</button>
      </div>
      <div class="user-wrapper">
        <div class="updata-card  hide">
          <div class="select">
            <span>绑定</span>
            <span data-index="2" class="iconfont icon-selected">支付宝</span>
            <span data-index="3" class="iconfont icon_select">微信</span>
            <span data-index="1" class="iconfont icon_select">银行卡</span>
          </div>
          <div class="info-input">
            <div class="typeone">
              <div>
                <input class="cardnumber" type="text" placeholder="请输入账号" maxlength="30">
              </div>
              <div>
                <input class="cardname" type="text" placeholder="请输入姓名" maxlength="22">
              </div>
            </div>
            <div class="typetwo hide">
              <div>
                <input class="cardnumber" type="number" placeholder="请输入卡号" maxlength="30">
              </div>
              <div>
                <input class="cardname" type="text" placeholder="请输入姓名" maxlength="22">
              </div>
              <div>
                <input class="openbank" type="text" placeholder="请输入开户行" maxlength="30">
              </div>
            </div>
          </div>
          <button id="submitBtn" class="btn">提交</button>
        </div>
        <div class="already-card">
          <div class="tr">
            <span>已成功绑定</span>
            <span class="reflecttype iconfont icon-selected">  </span>
          </div>
          <div class="tr">
            <span class="card-num"></span>
            <span class="change-btn">我要修改</span>
          </div>
        </div>
      </div>
    </section>
    <div class="detail">
      <h3 class="title">
        <span>提现明细</span>
        <span onclick="">更多</span>
      </h3>
      <div id="record" class="row">
        <div>230.50元</div>
        <div>提现处理中</div>
        <div class="invoice">
        <img src="../images/invoice.png" alt="">
        </div>
        <div>2018-05-04</div>
      </div>
    </div>
    <section class="imgzoom_pack">
      <div class="imgzoom_x"><span class="iconfont icon_failure"></span></div>
      <div class="imgzoom_img"><img src=""/></div>
    </section>
    <div class="question">
      <h3 class="title">常见问题</h3>
      <div class="text">
        <h4>1、绑定提现方式</h4>
        <p>请您认真核实榜单的微信、支付宝和银行卡，如绑定错误造成的损失，将由本人承担；</p>
        <h4>2、提现时间</h4>
        <p>处理时间为工作日：9:00-17:00</p>
        <h4>3、提现什么时候到账</h4>
        <p>提现到账一般为24小时可到账，若您提交申请，可以查看明细及状态；</p>
        <h4>4、每天可提现次数</h4>
        <p>个人账户每天提现无次数限制，公司账户每天可提现3次；</p>
      </div>
    </div>

    <div class="mask success-mask hide">
      <div class="content">
        <span class="iconfont icon-xuanzhong"></span>
        <h3>提现成功</h3>
        <p>已进入提现流程，请耐心等候。</p>
        <div class="close-button">知道了</div>
      </div>
    </div>
    <div class="mask money-mask hide">
      <div class="content">
        <img class="img-icon" src="../images/img-coin.png">
        <h3>余额说明</h3>
        <div class="text">
          <p>
            用户余额是可以提现的，需要提现，请联系在线客服。
            提现的款项会原路返回至您的支付账户，目前支持支付方式：
            微信国际支付 支付宝国际支付 银行卡支付
          </p>
          <p>
            提现时间应该在1-3个工作日即可完成退款，如果使用支付宝国际支付，需要收取3%手续费。
            如有其他疑问，请直接联系在线客服！
          </p>
        </div>
        <div class="close-button">知道了</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "money"
  }
</script>

<style scoped lang="less">

  .icon_warning:before {
    content: "\e6fc";
  }
  .icon-selected:before {
    content: "\e621";
  }
  .icon_select:before {
    content: "\e6dd";
  }
  .icon-xuanzhong:before {
    content: "\e6f1";
  }
  .icon_query:before {
    content: "\e6d3";
  }

  a{
    display: block;
  }
  body,html, .layout {
    background-color: #f0f0f0;
  }
  .layout {
    font-size: 24px;
    position: relative;
  }
  .main{
    color: #fff;
    height:232px ;
    background-color: #1a6ffc;
    .title{
      height: 110px;
      line-height: 110px;
      background-color: #1a6ffc;
      padding: 0 35px;
      position: relative;
      font-size: 30px;
      &:before{
        content: "";
        position: absolute;
        top: 44px;
        left: 15px;
        width: 4px;
        height: 20px;
        background-color: #fff;
      }
    }
    .nav{
      display: flex;
      flex-direction: row;
      background-color: #1a7ffc;
      text-align: center;
      position: relative;
      font-size: 28px;
      line-height: 40px;
      &:before{
        content: "";
        position: absolute;
        top: 30px;
        left: 0;
        right: 0;
        margin: auto;
        width: 1px;
        height: 40px;
        background-color: rgba(255,255,255,0.5);
        background-color: rgba(255,255,255,0.5);
      }
      >div{
        flex: 1;
        padding: 20px 0;
      }
    }
    .icon_query{
      font-size: 32px;
    }
  }
  .content{
    padding:0 30px;
    >div{
      background-color: #fff;
      margin: 10px 0;
    }
    .user-wrapper{
      padding: 15px 0 25px;
    }
    .input-wrapper{
      padding: 80px 70px 30px;
      .input{
        font-size: 50px;
        display: flex;
        border-bottom: 3px solid rgba(100,100,100,0.4);
        overflow: hidden;
      }
      input::placeholder{
        font-size: 30px;
      }
      .tip{
        line-height: 60px;
        font-size: 22px;
        color: rgba(0,0,0,0.6);
      }
    }
    .already-card{
      .tr{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        line-height: 60px;
        padding: 0 30px;
        font-size: 30px;
      }
      .card-num{
        color: #1a6ffc;
        overflow: hidden;
      }
      .change-btn{
        color: rgba(100,100,100,0.6);
        font-size: 28px;
      }
    }
    .btn{
      height: 90px;
      width: 550px;
      background-color: #1a6ffc;
      color: #fff;
      font-size: 30px;
      border-radius: 6px;
      box-shadow: 0 3px 15px -3px rgba(26,111,252,0.8);
      margin: 15px auto 0;
      display: block;
    }
    .select{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 20px 0;
      font-size: 28px;
      border-bottom: 1px solid rgba(100,100,100,0.1);
    }
    .iconfont:before{
      font-size: 32px;
      vertical-align: middle;
      margin-right: 4px;
      color:#8b8b8b ;
    }
    .icon-selected:before{
      color:  #1a6ffc;
    }
    .info-input{
      div{
        border-bottom: 1px solid rgba(100,100,100,0.1);
        padding:20px 30px;
      }
    }
  }
  .detail{
    background-color: #fff;
    font-size: 28px;
    .title{
      height: 60px;
      line-height: 60px;
      padding: 0 25px 0 45px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &:before {
        content: "";
        position: absolute;
        left: 25px;
        top: 0px;
        bottom: 0;
        margin: auto;
        width: 5px;
        height: 25px;
        background-color: #174cda;
      }
    }
    .row{
      display: flex;
      flex-direction: row;
      text-align: center;
      height: 80px;
      line-height: 80px;
      >div{
        flex: 1;
      }
      .invoice{
        padding: 10px;
        img{
          width: 90px;
          border: 1px solid #f1f1f1;
        }
      }
    }
  }
  .question{
    background-color: #fff;
    margin-top: 10px;
    .title{
      height: 60px;
      line-height: 60px;
      padding: 0 25px 0 45px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &:before {
        content: "";
        position: absolute;
        left: 25px;
        top: 0px;
        bottom: 0;
        margin: auto;
        width: 5px;
        height: 25px;
        background-color: #174cda;
      }
    }
    .text{
      padding: 10px 25px 40px;
      h4{
        line-height: 1.8;
        margin-top: 10px;
      }
      p{
        padding-left: 1.5em;
        color: #666;
      }
    }
  }
  .mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    top: 0;
    left: 0;
    .content{
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 600px;
      border-radius: 8px;
      box-shadow: 0 2px 15px -2px rgba(0,0,0,0.5);
    }
    text-align: center;

    .icon-xuanzhong:before{
      font-size: 120px;
      color: #04df28;
    }
    h3{
      font-size: 40px;
      color: #000;
      line-height: 1.6;
    }
    .close-button{
      width: 200px;
      height: 60px;
      line-height:60px ;
      text-align: center;
      margin: 45px auto 0;
      font-size: 30px;
      border: 1px solid #999;
      border-radius: 4px;
    }
  }

  .success-mask{
    .content{
      height: 400px;
    }
  }
  .money-mask{
    .content{
      height: 580px;
    }
    .img-icon{
      width: 140px;
      margin-top: -40px;
    }
    .text{
      text-align: left;
      line-height: 1.6;
      p{
        padding-left: 40px;
        margin-bottom: 20px;
        position: relative;
        &:before{
          position: absolute;
          content: "";
          width: 15px;
          height: 15px;
          background-color: #ccc;
          top: 10px;
          left: 5px;
          border-radius: 50%;
        }
      }
    }
    .close-button{
      margin-top: 25px;
    }
  }
</style>
