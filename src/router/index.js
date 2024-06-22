import { createRouter, createWebHistory } from 'vue-router'
import Widget from '../components/Widget.vue'
import PortCv from '../components/PortCv.vue'
import Tugas2 from '../components/Tugas2.vue'
import Tugas3 from '../components/Tugas3.vue'
import Tugas4 from '../components/Tugas4.vue'
import Tugas5 from '../components/Tugas5.vue'
import Tugas6 from '../components/Tugas6.vue'

const routes = [
  { path: '/', redirect: { name: 'Widget' } },
  { path: '/widget', name: 'Widget', component: Widget },
  { path: '/portcv', name: 'PortCv', component: PortCv },
  { path: '/tugas2', name: 'Tugas2', component: Tugas2 },
  { path: '/tugas3', name: 'Tugas3', component: Tugas3 },
  { path: '/tugas4', name: 'Tugas4', component: Tugas4 },
  { path: '/tugas5', name: 'Tugas5', component: Tugas5 },
  { path: '/tugas6', name: 'Tugas6', component: Tugas6 },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
