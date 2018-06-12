<template>
  <div>
    <section class="content">
      <h3 class="title">提现明细</h3>
      <div class="month">
        <p id="time" class="time">2018-05</p>
        <p id="money" class="des">该月总佣金：--</p>
        <span class="month-btn iconfont icon_calendar"></span>
      </div>
      <div class="table">
        <div class="tr">
          <div class="td">数额</div>
          <div class="td">处理状态</div>
          <div class="td">转账凭证</div>
          <div class="td">日期</div>
        </div>
        <div class="wraper" id="iscroll">
          <div>
            <div class="tr">
              <div class="td">{{value.money}}元</div>
              <div class="td">
                提现中
              </div>
              <div class="td invoice">
                <img src="{{value.imgUrl?'http://rest.westartin.com/image/transferRecord/'+value.imgUrl:'../images/pingzheng.jpg'}}" alt="凭证">
              </div>
              <div class="td">{{value.createTime}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="imgzoom_pack">
      <div class="imgzoom_x"><span class="iconfont icon_failure"></span></div>
      <div class="imgzoom_img"><img src="" /></div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "moneydetail"
    }
</script>

<style scoped lang="less">
  .icon_calendar:before {
    content: "\e68f";
  }.icon_warning:before {
     content: "\e6fc";
   }
  a{
    display: block;
  }
  body,html, .layout {
    background-color: #f9fbfd;
    height: 100%;
  }
  .layout {
    font-size: 24px;
    display: flex;
    flex-direction: column;
  }
  .month{
    padding: 20px 30px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #e7e7e7;
    position: relative;
    .time{
      font-size: 30px;
    }
    .des{
      font-size: 24px;
      color: rgba(125,125,125,0.5);
    }
    .month-btn{
      position: absolute;
      top:25px;
      right: 30px;
      &:before{
        font-size: 50px;
      }
    }
  }
  .content{
    background-color: #fff;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    .title{
      height: 80px;
      line-height: 80px;
      font-size: 28px;
      padding: 0 25px 0 45px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
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
    .head-img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .table{
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .wraper{
      flex: 1;
      overflow: hidden;
      .tr:nth-child(odd){
        background: #f0f0f0;
      }
    }
    .tr{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding:0 25px;
      height: 80px;
      line-height: 80px;
      vertical-align: middle;
      border-bottom: 1px solid #e7e7e7;
      img{
        height: 60px;
        margin-top: 10px;
        position: relative;
        border: 1px solid #f1f1f1;
      }
      .td:nth-child(1){
        width: 20%;
      }
      .td:nth-child(2){
        width: 20%;
      }
      .td:nth-child(3){
        width: 25%;
      }
      .td:nth-child(4){
        width: 25%;
      }
      .td:nth-child(5){
        width: 10%;
        text-align: right;
      }
    }
  }

</style>
