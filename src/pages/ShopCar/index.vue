<!-- shopCar -->
<template>
  <div>
    <div class="shopcar_header">
      <div class="header_content">
        <span class="left">购物车</span>
        <span class="right">领券</span>
      </div>
    </div>
    <div class="shopcar_nav">
      <span>30天无忧退款</span>
      <span>48小时快速退款</span>
      <span>满88元免邮费</span>
    </div>
    <div class="shopcar_main">
      <div class="shopcar_img">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"
          alt="shopcar"
        />
        <span>去添加点什么吧</span>
      </div>
      <div class="shopcar_button">
        <button @click="$router.replace('/personal')">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCar'
}
</script>

<style scoped>
.shopcar_header {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f4f4f4;
}

.shopcar_header .header_content {
  height: 88px;
  padding: 0 30px;
  line-height: 88px;
  text-align: center;
  background-color: #fff;
  position: relative;
}

.shopcar_header .header_content .left {
  float: left;
  font-size: 36px;
  color: #333;
}

.shopcar_header .header_content .right {
  position: absolute;
  top: 0;
  right: 60px;
  font-size: 30px;
  color: #b4282d;
}

.shopcar_nav {
  position: fixed;
  width: 100%;
  height: 70px;
  margin-top: 88px;
  display: flex;
  background-color: #eee;
}

.shopcar_nav span {
  width: 33.33%;
  text-align: center;
  font-size: 24px;
  color: #666;
  line-height: 70px;
}

.shopcar_main {
  min-height: 1500px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.shopcar_main .shopcar_img {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
}

.shopcar_main .shopcar_img img {
  margin: auto;
  width: 248px;
  height: 248px;
}

.shopcar_main .shopcar_img span {
  position: relative;
  top: -30px;
  font-size: 28px;
  color: #999;
}

.shopcar_main .shopcar_button {
  width: 100%;
  height: 90px;
  display: flex;
  z-index: 10;
}

.shopcar_main .shopcar_button button {
  width: 100%;
  height: 100%;
  margin: 0 135px;
  background-color: #b4282d;
  font-size: 30px;
  line-height: 90px;
  color: #fff;
}
</style>
