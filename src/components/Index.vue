<template>
  <div class="gw-index">
      <Row>
          <Col span="24" class="header">我是顶层</Col>
          <Col span="24" class="container">
              <Row>
                  <Col span="4" class="nav">
                    <ul>
                        <li v-for="item in navList" v-bind:class="{sele: item.selected}" @click="selectFun(item)">{{item.title}}</li>
                    </ul>
                  </Col>
                  <Col span="20" class="content">
                     <router-view class="router-page" ></router-view>
                  </Col>
              </Row>
          </Col>
          </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
            "title": "首页",
            "href": "home",
            "iconClass": " iconfont icon-MenuHome",
            "loading": false,
            "hasChild": false,
            "children": [],
            "selected": true
        },
        {
            "title": "设备数据",
            "href": "equips",
            "iconClass": " iconfont icon-MenuEquips",
            "loading": false,
            "expand": false,
            "hasChild": true,
            "children": [],
            "selected": false
        },
        {
            "title": "实时快照",
            "href": "snapshot",
            "iconClass": " iconfont icon-MenuSnapshot",
            "loading": false,
            "hasChild": false,
            "children": [],
            "selected": false
        },
        {
            "title": "系统配置",
            "href": "systemConf",
            "iconClass": " iconfont icon-MenuSystemConf",
            "loading": false,
            "hasChild": false,
            "children": [],
            "selected": false
        },
        {
            "title": "事件查询",
            "href": "eventQuery",
            "iconClass": " iconfont icon-MenuEventQuery",
            "loading": false,
            "hasChild": false,
            "children": [],
            "selected": false
        },
        {
            "title": "报警排表",
            "href": "schedule",
            "iconClass": " iconfont icon-MenuSchedule",
            "loading": false,
            "hasChild": false,
            "children": [],
            "selected": false
        },
        {
            "title": "定时任务",
            "href": "timeTask",
            "iconClass": " iconfont icon-MenuTimeTask",
            "loading": false,
            "hasChild": false,
            "children": [],
            "selected": false
        },
        {
            "title": "设备联动",
            "href": "equipLinkage",
            "iconClass": " iconfont icon-MenuEquipLinkage",
            "loading": false,
            "hasChild": false,
            "children": [],
            "selected": false
        }
      ],
      loadCompleted: false,
      isFold: true,
      curPath22: "",
      rootSave: {},
    };
  },
  methods: {
      auth(){
          if(window.localStorage["gw_token"])
          {
              this.$store.dispatch("updateData");
              this.Axios.defaults.headers.common["Authorization"]=this.$store.state.gwToken;

              this.Axios.get("/api/server/auth_name").then(rt => {
                    let data = rt.data.HttpData;
                    if (data.code !== 200) {
                    this.$router.push("/login");
                    } else {
                    console.log("密钥验证成功,当前连接的服务:[", data.data, "]");
                    }
                }).catch(err => {
                    console.log(err);
                    console.log("密钥验证失败，请检查登陆设置!");
                });
          }
          else
          {this.$router.push("/");}
      },
      selectFun(dt){
          this.navList.forEach(function(ele,index){
              ele.selected = false;
          });
          dt.selected = true;
          this.$router.push({ path: '/Index/'+dt.href}); 
      }
  },
  created(){
   this.auth(); 
  },
}
</script>


<style lang="scss" src="../assets/css/index.scss"></style>

