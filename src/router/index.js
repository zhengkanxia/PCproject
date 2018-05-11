import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Index from '@/components/Index'
import home from '@/components/Home/home'

import Schedule from '@/components/schedule/Schedule'

import Equips from '@/components/equips/Equips'

import Snapshot from '@/components/snapshot/Snapshot'

import SystemConf from '@/components/systemConf/SystemConf'

import EventQuery from '@/components/eventQuery/EventQuery'

import TimeTask from '@/components/timeTask/TimeTask'

import EquipLinkage from '@/components/equipLinkage/EquipLinkage'
Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          component: home
        },
        {
          name: 'equip',
          path: 'equips',
          component: Equips
        },
        {
          path: 'snapshot',
          name: 'snapshot',
          component: Snapshot
        },
        {
          path: 'systemConf',
          component: SystemConf
        },
        {
          path: 'eventQuery',
          component: EventQuery
        },
        {
          path: 'schedule',
          component: Schedule
        },
        {
          path: 'timeTask',
          component: TimeTask
        },
        {
          path: 'equipLinkage',
          component: EquipLinkage
        }
      ]
    }
  ]
})
