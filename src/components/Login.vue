<template>
  <Row class="login" v-cloak>
    
     <Col span="24" class="loginForm" style="text-align: center;">
        <Row>
          <Col span="4"><i class="iconfont icon-scheduleUSER"></i></Col>
          <Col span="20"> <input type="text" v-model="userName" placeholder="用户名" autocomplete="off"></Col>
        </Row>
        <Row>
          <Col span="4"><i class="iconfont icon-schedulePASS"></i></Col>
          <Col span="20"><input type="password" v-model="userPwd" @keyup.enter="login" placeholder="密码" autocomplete="off"></Col>
        </Row>
        <br>
        <button @click.stop="login" :class="{loading: loading}" type="button">
          登陆
          <!-- <Spin fix v-if="loading">
            loading...<Icon type="load-c" size=18 class="spin-icon-load"></Icon>
          </Spin> -->
        </button> 
     </Col>    
  </Row>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      userPwd: '',
      loading: false
    }
  },
  mounted () {
    this.userName = ''
    this.userPwd = ''
  },
  methods: {
    login () {

      // 登录操作
      // if (this.loading) return false
      this.loading = true
      let reqData = 'username=' + this.userName + '&userpwd=' + this.userPwd
      this.Axios.post('/api/server/getkey', reqData).then(rt => {
           let data = rt.data.HttpData
            // 登陆成功操作
            switch (data.code) {
          case 200: 
            let key = data.data
            let gwToken = key.appkey + '-' + key.infokey
            window.localStorage.setItem('gw_token', gwToken)
            this.userName = ''
            this.userPwd = ''
            this.$router.replace('/index');
            break;
          case 1004: break;
          default: break;
            }
            
      }).catch(err => {
        this.$Message.error('网络错误，请重试！')
        this.loading = false
        console.log(err)
      })
    },
    error (nodesc,msg) {
        this.$Notice.error({
            title: '登陆提示',
            desc: msg
        });
    }
}

  
}

</script>


