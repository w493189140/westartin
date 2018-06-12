<template>
    <div class="layout">
      <img src="../assets/logo.jpg" alt="logo">
      <div class="ball-container">
        <div class="la-ball-climbing-dot la-dark la-2x">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "welcome-animate"
    }
</script>

<style scoped>
  .layout{
    width: 100%;
    padding:200px 100px;
    box-sizing: border-box;
  }
  img{
    width: 100%;
  }
  .la-ball-climbing-dot,
  .la-ball-climbing-dot > div {
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .la-ball-climbing-dot {
    display: block;
    font-size: 0;
    color: #fff;
  }
  .la-ball-climbing-dot.la-dark {
    color: #955453;
  }
  .la-ball-climbing-dot > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
  }
  .la-ball-climbing-dot {
    width: 84px;
    height: 64px;
  }
  .la-ball-climbing-dot > div:nth-child(1) {
    position: absolute;
    bottom: 32%;
    left: 18%;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
    -moz-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
    -o-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
    animation: ball-climbing-dot-jump .6s ease-in-out infinite;
  }
  .la-ball-climbing-dot > div:not(:nth-child(1)) {
    position: absolute;
    top: 0;
    right: 0;
    width: 28px;
    height: 4px;
    border-radius: 0;
    -webkit-transform: translate(60%, 0);
    -moz-transform: translate(60%, 0);
    -ms-transform: translate(60%, 0);
    -o-transform: translate(60%, 0);
    transform: translate(60%, 0);
    -webkit-animation: ball-climbing-dot-steps 1.8s linear infinite;
    -moz-animation: ball-climbing-dot-steps 1.8s linear infinite;
    -o-animation: ball-climbing-dot-steps 1.8s linear infinite;
    animation: ball-climbing-dot-steps 1.8s linear infinite;
  }
  .la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(2) {
    -webkit-animation-delay: 0ms;
    -moz-animation-delay: 0ms;
    -o-animation-delay: 0ms;
    animation-delay: 0ms;
  }
  .la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(3) {
    -webkit-animation-delay: -600ms;
    -moz-animation-delay: -600ms;
    -o-animation-delay: -600ms;
    animation-delay: -600ms;
  }
  .la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(4) {
    -webkit-animation-delay: -1200ms;
    -moz-animation-delay: -1200ms;
    -o-animation-delay: -1200ms;
    animation-delay: -1200ms;
  }
  .la-ball-climbing-dot.la-sm {
    width: 40px;
    height: 32px;
  }
  .la-ball-climbing-dot.la-sm > div:nth-child(1) {
    width: 12px;
    height: 12px;
  }
  .la-ball-climbing-dot.la-sm > div:not(:nth-child(1)) {
    width: 12px;
    height: 2px;
  }
  .la-ball-climbing-dot.la-2x {
    width: 168px;
    height: 128px;
  }
  .la-ball-climbing-dot.la-2x > div:nth-child(1) {
    width: 56px;
    height: 56px;
  }
  .la-ball-climbing-dot.la-2x > div:not(:nth-child(1)) {
    width: 56px;
    height: 8px;
  }
  .la-ball-climbing-dot.la-3x {
    width: 252px;
    height: 192px;
  }
  .la-ball-climbing-dot.la-3x > div:nth-child(1) {
    width: 84px;
    height: 84px;
  }
  .la-ball-climbing-dot.la-3x > div:not(:nth-child(1)) {
    width: 84px;
    height: 12px;
  }
  @-webkit-keyframes ball-climbing-dot-jump {
    0% {
      -webkit-transform: scale(1, .7);
      transform: scale(1, .7);
    }
    20% {
      -webkit-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    40% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50% {
      bottom: 125%;
    }
    46% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    80% {
      -webkit-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    90% {
      -webkit-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    100% {
      -webkit-transform: scale(1, .7);
      transform: scale(1, .7);
    }
  }
  @-moz-keyframes ball-climbing-dot-jump {
    0% {
      -moz-transform: scale(1, .7);
      transform: scale(1, .7);
    }
    20% {
      -moz-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    40% {
      -moz-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50% {
      bottom: 125%;
    }
    46% {
      -moz-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    80% {
      -moz-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    90% {
      -moz-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    100% {
      -moz-transform: scale(1, .7);
      transform: scale(1, .7);
    }
  }
  @-o-keyframes ball-climbing-dot-jump {
    0% {
      -o-transform: scale(1, .7);
      transform: scale(1, .7);
    }
    20% {
      -o-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    40% {
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50% {
      bottom: 125%;
    }
    46% {
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    80% {
      -o-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    90% {
      -o-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    100% {
      -o-transform: scale(1, .7);
      transform: scale(1, .7);
    }
  }
  @keyframes ball-climbing-dot-jump {
    0% {
      -webkit-transform: scale(1, .7);
      -moz-transform: scale(1, .7);
      -o-transform: scale(1, .7);
      transform: scale(1, .7);
    }
    20% {
      -webkit-transform: scale(.7, 1.2);
      -moz-transform: scale(.7, 1.2);
      -o-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    40% {
      -webkit-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50% {
      bottom: 125%;
    }
    46% {
      -webkit-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    80% {
      -webkit-transform: scale(.7, 1.2);
      -moz-transform: scale(.7, 1.2);
      -o-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    90% {
      -webkit-transform: scale(.7, 1.2);
      -moz-transform: scale(.7, 1.2);
      -o-transform: scale(.7, 1.2);
      transform: scale(.7, 1.2);
    }
    100% {
      -webkit-transform: scale(1, .7);
      -moz-transform: scale(1, .7);
      -o-transform: scale(1, .7);
      transform: scale(1, .7);
    }
  }
  @-webkit-keyframes ball-climbing-dot-steps {
    0% {
      top: 0;
      right: 0;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      top: 100%;
      right: 100%;
      opacity: 0;
    }
  }
  @-moz-keyframes ball-climbing-dot-steps {
    0% {
      top: 0;
      right: 0;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      top: 100%;
      right: 100%;
      opacity: 0;
    }
  }
  @-o-keyframes ball-climbing-dot-steps {
    0% {
      top: 0;
      right: 0;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      top: 100%;
      right: 100%;
      opacity: 0;
    }
  }
  @keyframes ball-climbing-dot-steps {
    0% {
      top: 0;
      right: 0;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      top: 100%;
      right: 100%;
      opacity: 0;
    }
  }
  .ball-container{
    margin-top: 160px;
  }
  .ball-container div{
    margin:auto;
  }
</style>
