<!-- phonelogin -->
<template>
  <div class="phone_login_box">
    <div class="top_logo">
      <img
        src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
        alt="网易"
      />
    </div>
    <label for="phone" class="input_phone">
      <div class="login_tips">
        <p>{{ phone_tips }}</p>
        <p>{{ password_tips }}</p>
      </div>
      <input
        type="text"
        id="phone"
        placeholder="请输入手机号"
        v-model="phone"
        @blur="checkPhone"
      />
    </label>
    <label for="password" class="input_code">
      <input
        type="password"
        placeholder="请输入短信验证码"
        id="password"
        v-model="code"
        @blur="checkCode"
      />
      <div class="get_phone">获取验证码</div>
    </label>
    <div class="login_help">
      <span>遇到问题?</span>
      <span>使用密码验证登录</span>
    </div>
    <div class="login_btn active" @click="toLogin">登录</div>
    <div class="phone_checkbox_box">
      <input type="checkbox" class="phone_checkbox" />
      <span class="phone_span"
        >我同意<a href="javascript:;">《服务条款》</a>和
        <a href="javascript:;">《网易隐私政策》</a>
      </span>
    </div>
    <div class="register_btn">其他登录方式 &gt;</div>
  </div>
</template>

<script>
export default {
  name: 'PhoneLogin',
  data() {
    return {
      phone_tips: '',
      password_tips: '',
      phone: '',
      code: ''
    }
  },
  methods: {
    checkPhone() {
      this.phone_tips = ''
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.phone_tips = '请输入正确的手机号码'
      }
    },
    checkCode() {
      this.password_tips = ''
      if (!/^[a-zA-Z0-9_]{4}$/.test(this.code)) {
        this.password_tips = '请输入正确的验证码'
      }
    },
    toLogin() {
      if (this.phone_tips === '' && this.password_tips === '') {
        console.log('登录成功')
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins.styl"

.phone_login_box
  background-color: #fff
  .top_logo
    width 100%
    height 133px
    margin 100px 0 0 0
    img
      width 192px
      height 64px
      margin 0 auto
  .input_phone
    position relative
    .login_tips
      position absolute
      left 50%
      top -100%
      width 50%
      transform translateX(-50%)
      color $themeColor
      font-size 28px
  .input_phone,
  .input_code
    display block
    width 675px
    height 90px
    margin 30px auto
    input
      display block
      width 100%
      height 100%
      outline none
      border 0 none
      border-bottom 1px solid #bdbdbd
      font-size 30px
      line-height 45px
  .input_code
    position relative
    .get_phone
      position absolute
      right 0
      bottom 0
      width 173px
      height 56px
      line-height 56px
      text-align center
      font-size 28px
      border 1px solid #333
      border-radius  10px
  .login_help
    font-size 28px
    line-height 45px
    margin-bottom 64px
    display flex
    justify-content space-between
    align-items center
  .login_btn,
  .back_btn
    width 677px
    height 96px
    margin-top 32px
    color #DD1A21
    font-size 28px
    display flex
    justify-content center
    align-items center
    border 1px solid $themeColor
    &.active
      color #fff
      background-color #DD1A21
  .phone_checkbox_box
    display flex
    .phone_checkbox
      width 30px
      height 30px
      margin-top 30px
    .phone_span
      margin-top 30px
      a
        color blue
  .register_btn
    margin-top 32px
    font-size 28px
    line-height 40px
    color #333
    text-align center
</style>
