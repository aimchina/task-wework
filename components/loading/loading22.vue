<template>
  <view class="spinner-box">
    <view class="circle-border">
      <view class="circle-core"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "loading22",
  data() {
    return {};
  }
};
</script>

<style scoped="true">
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
.spinner-box {
  width: 40upx;
  height: 40upx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.circle-border {
  width: 40upx;
  height: 40upx;
  padding: 3upx;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #B0B0B0;
 background: linear-gradient(
    0deg,
    rgba(190, 186, 186, 0.1) 33%,
    rgba(190, 186, 186, 1) 100%
  );
  animation: spin 0.8s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
}
</style>
