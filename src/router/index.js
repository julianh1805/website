import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FormationExperiences from '../views/FormationExperiences.vue'
import Contact from '../views/Contact.vue'
import Qualites from '../views/Qualites.vue'

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
    path: '/formation-et-experiences',
    name: 'FormationExperiences',
    component: FormationExperiences,
    meta: {
      title: 'Formation et experiences | Julian Husson'
    }
  },
  {
    path: '/qualites',
    name: 'Qualites',
    component: Qualites,
    meta: {
      title: 'Qualites | Julian Husson'
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
  routes,
})

router.afterEach((to, from) => {
  document.title = to.meta.title;
  window.scrollTo(0, 0)
});

export default router
