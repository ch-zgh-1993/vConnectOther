import Vue from 'vue'
import Router from 'vue-router'
import ArcgisFirst from '@/components/vue-arcgis/arcgis-2dmap'
import Start from '@/components/vue-arcgis/test'
import ThreeD from '@/components/vue-arcgis/3dmap'
import local from '@/components/vue-arcgis/localMap'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'ArcgisFirst',
    component: ArcgisFirst
  },{
    path: '/start',
    name: 'start',
    component: Start
  },{
    path: '/3d',
    name: 'map3d',
    component: ThreeD
  },{
    path: '/localMap',
    name: 'local',
    component: local
  }
];
const router = new Router({
  routes,
  mode: 'history'
});

export default router
