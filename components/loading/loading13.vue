<template>
  <view class="loading13">
    <view></view>
    <view></view>
    <view></view>
    <view></view>
    <view></view>
  </view>
</template>

<script>
export default {
  name: "loading13",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
.loading13 {
  width: 90upx;
  position: relative;
}
.loading13 view {
  display: block;
  position: absolute;
  bottom: 0upx;
  width: 18upx;
  height: 10upx;
  background: coral;
  -webkit-animation: loading13 1.5s infinite ease-in-out;
  animation: loading13 1.5s infinite ease-in-out;
}
.loading13 view:nth-child(2) {
  left: 22upx;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.loading13 view:nth-child(3) {
  left: 44upx;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.loading13 view:nth-child(4) {
  left: 66upx;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.loading13 view:nth-child(5) {
  left: 88upx;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

@-webkit-keyframes loading13 {
  0% {
    height: 10upx;
    -webkit-transform: translateY(0upx);
    transform: translateY(0upx);
    background: coral;
  }
  25% {
    height: 60upx;
    -webkit-transform: translateY(15upx);
    transform: translateY(15upx);
    background: cornflowerblue;
  }
  50% {
    height: 10upx;
    -webkit-transform: translateY(0upx);
    transform: translateY(0upx);
    background: cornflowerblue;
  }
  100% {
    height: 10upx;
    -webkit-transform: translateY(0upx);
    transform: translateY(0upx);
    background: coral;
  }
}

@keyframes loading13 {
  0% {
    height: 10upx;
    -webkit-transform: translateY(0upx);
    transform: translateY(0upx);
    background: coral;
  }
  25% {
    height: 60upx;
    -webkit-transform: translateY(15upx);
    transform: translateY(15upx);
    background: cornflowerblue;
  }
  50% {
    height: 10upx;
    -webkit-transform: translateY(0upx);
    transform: translateY(0upx);
    background: cornflowerblue;
  }
  100% {
    height: 10upx;
    -webkit-transform: translateY(0upx);
    transform: translateY(0upx);
    background: coral;
  }
}
</style>
