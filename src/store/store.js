import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {//定义了应用状态的数据结构，同样可以在这里设置默认的初始状态。
        gwToken: '',// key
        menuIndex: '', //菜单序号
        menuName: '', //菜单名
      },
      mutations: {//唯一允许更新应用状态的地方
        changeMenuIndex(state) {
        },
        setKeys(state){
           let token = window.localStorage.getItem["gw_token"];
           state.gwToken = token;
        },
      },
      actions: {
          updateData ({commit}){
              commit('setKeys');
          }
      }
})