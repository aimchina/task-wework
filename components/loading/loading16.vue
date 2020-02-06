<template>
  <view class="loading16"></view>
</template>

<script>
export default {
  name: "loading16",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
.loading16 {
  position: relative;
  width:10upx;
  height: 10upx;
  border-radius: 50%;
  background: #B0B0B0;
  -webkit-animation: loading16 1.5s infinite linear;
  /* animation: loading16 1.5s infinite linear; */
}
.loading16:after {
  content: "";
  position: absolute;
  width: 30upx;
  height: 30upx;
  border-top: 6upx solid #B0B0B0;
  border-bottom: 6upx solid #B0B0B0;
  border-left: 6upx solid transparent;
  border-right: 6upx solid transparent;
  border-radius: 50%;
  top: -16upx;
  left: -16upx;
}

@-webkit-keyframes loading16 {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loading16 {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
