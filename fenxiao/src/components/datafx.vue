<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "datafx"
    }
</script>

<style scoped lang="less">
  .icon_warning:before {
    content: "\e6fc";
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
    background-color: #fff;
    box-shadow: 0 0 10px -3px rgba(0,0,0,0.3);
    .row{
      display: flex;
      flex-direction: row;
      padding: 25px;
      >div{
        flex: 1;
        text-align: center;
        &:not(:nth-last-child(1)){
          border-right: 1px solid #b7d0f4;
        }
      }
      border-top: 1px solid #b7d0f4;
    }
    .num{
      color: #1a7ffc;
      font-size: 30px;
    }
    .name{
      color: #8b8b8b;
    }
  }
</style>
