import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Formation from '../views/Formation.vue'
import Contact from '../views/Contact.vue'
import Qualites from '../views/Qualites.vue'
import Experiences from '../views/Experiences.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Accueil | Julian Husson'
    }
  },
  {
    path: '/formation',
    name: 'Formation',
    component: Formation,
    meta: {
      title: 'Formation | Julian Husson'
    }
  },
  ,
  {
    path: '/experiences',
    name: 'Experiences',
    component: Experiences,
    meta: {
      title: 'Experiences | Julian Husson'
    }
  },
  ,
  {
    path: '/qualites',
    name: 'Qualites',
    component: Qualites,
    meta: {
      title: 'Qualites | Julian Husson'
    }
  },
  {
    path: '/formation',
    name: 'Formation',
    component: Formation,
    meta: {
      title: 'Formation | Julian Husson'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact | Julian Husson'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title;
});

export default router
