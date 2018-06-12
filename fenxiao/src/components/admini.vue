<template>
  <div class="layout">
    <section class="nav">
      <div data-level='distributionLevel' data-index="i">
        <p>distributionCount人</p>
        <p>distributionName</p>
      </div>
      <div data-level='distributionLevel' data-index="i">
        <p>distributionCount人</p>
        <p>distributionName</p>
      </div>
    </section>
    <section class="sum">
      <div>
        <p>累计会员</p>
        <p></p>
      </div>
      <div class="sum-btn">
        <p>累计成交会员</p>
        <p><span></span><span class="iconfont icon_left_arrow"></span></p>
      </div>
    </section>
    <section class="content">
      <h3 id="title" class="title">招商部</h3>
      <div class="table">
        <div class="tr">
          <div class="td">头像</div>
          <div class="td">姓名</div>
          <div class="td">用户数</div>
          <div class="td">成交客户</div>
          <div class="td">　</div>
        </div>
        <div class="wraper" id="iscroll">
          <div>
            <div class="tr">
              <div class="td"><img class="head-img" src="../assets/touxiang.png"></div>
              <div class="td">客户啊南京手机爱德华啥地方</div>
              <div class="td">10</div>
              <div class="td">450212312笔</div>
              <div class="td"><span class="iconfont icon_left_arrow"></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  export default {
    name: "admini"
  }
</script>

<style scoped lang="less">
  .icon_warning:before {
    content: "\e6fc";
  }

  a {
    display: block;
  }

  body, html, .layout {
    height: 100%;
    background-color: #f0f0f0;
  }

  .layout {
    font-size: 24px;
    //position: relative;
    display: flex;
    flex-direction: column;
  }

  .nav {
    display: flex;
    flex-direction: row;
    background-color: #1a7ffc;
    color: #fff;
    text-align: center;
    font-size: 30px;
    padding: 20px 0;
    height: 120px;
    > div {
      flex: 1;
      position: relative;
      &:not(:nth-last-child(1)):before {
        content: "";
        position: absolute;
        width: 1px;
        height: 60px;
        background-color: rgba(255, 255, 255, 0.5);
        top: 10px;
        right: 0;
      }
    }
  }

  .sum {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    margin: 20px 0;
    height: 80px;
    padding: 0 15px;
    line-height: 80px;
    font-size: 28px;
    > div {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 10px;
      &:nth-child(1) {
        border-right: 1px solid #f0f0f0;
      }
    }
  }

  .content {
    background-color: #fff;
    width: 100%;
    flex: 1;
    //overflow: hidden;
    display: flex;
    flex-direction: column;
    //.table{
    //  position: absolute;
    //  top:320px;
    //  bottom:0;
    //  left: 0;
    //  margin: auto;
    //}
    .title {
      height: 80px;
      line-height: 80px;
      font-size: 28px;
      padding: 0 25px 0 45px;
      //padding-left: 20px;
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
    .head-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .table {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .wraper {
      flex: 1;
      overflow: hidden;
      .tr:nth-child(odd) {
        background: #f0f0f0;
      }
    }
    .tr {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 25px;
      height: 80px;
      line-height: 80px;
      vertical-align: middle;
      border-bottom: 1px solid #e7e7e7;
      .td:nth-child(1) {
        width: 20%;
      }
      .td:nth-child(2) {
        width: 20%;
      }
      .td:nth-child(3) {
        width: 25%;
      }
      .td:nth-child(4) {
        width: 25%;
      }
      .td:nth-child(5) {
        width: 10%;
        text-align: right;
      }
    }
  }

</style>
