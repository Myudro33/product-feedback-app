import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddFeedbackView from '@/views/AddFeedbackView.vue'
import FeedbackDetail from '@/views/FeedbackDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/feedback/add',
      name: 'add-feedback',
      component: AddFeedbackView
    },
    {
      path: '/feedback/detail/:id',
      name: 'detail-feedback',
      component: FeedbackDetail
    }
  ]
})

export default router
