<template>
  <div class="login-container">
    <h1 class="title">托肯恒山多媒体广告管理平台</h1>
    <div class="login-box">
      <el-input placeholder="用户名" v-model="userName" :maxlength="40" />
      <input class="mock-el-input el-input__inner" type="password" placeholder="密码" maxlength="20" v-model="password">
      <div class="check-is-remember">
        <el-checkbox v-model="isRemember">记住我</el-checkbox>
      </div>
      <el-button type="primary" @click="checkLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
const savNameKey = 'loginName'

export default {
  data () {
    return {
      userName: '',
      password: '',
      isRemember: false
    }
  },
  methods: {
    setPassword (e) {
      console.log(e)
    },
    checkLogin () {
      const {userName, password, isRemember} = this
      if (!userName) this.$message.error('请输入用户名')
      else if (!password) this.$message.error('请输入密码')
      else {
        this.saveUser(isRemember, userName)
        console.log(userName, password)
      }
    },
    saveUser (is, name) {
      if (is) localStorage.setItem(savNameKey, name)
      else localStorage.removeItem(savNameKey)
    }
  },
  mounted () {
    // 是否保存了用户名
    this.userName = localStorage.getItem(savNameKey) || ''
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: repeat-x center top url(../assets/images/login_mini.jpg);
  .title { font-size: 40px; line-height: 300px; text-align: center; color: #fff; text-shadow: 5px 5px 5px #333;}
  .login-box { width: 320px; margin: 40px auto 0;}
  .mock-el-input { margin-top: 14px;}
  .check-is-remember { margin: 20px 0;}
  .el-button { width: 100%;}
}
</style>
