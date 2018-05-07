<template>
  <div class="gw-index">
      <ul>
          <li v-for="item in navList">{{item.title}}</li>
      </ul>
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
            "selected": false
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
  }  
}
</script>


