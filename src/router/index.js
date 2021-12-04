import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FormationExperiences from '../views/FormationExperiences.vue'
import Contact from '../views/Contact.vue'
import Qualites from '../views/Qualites.vue'
import Page404 from "../views/Page404";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Développeur full-stack junior en région nantaise | Julian Husson',
      description: "fezfzfezz"
    }
  },
  {
    path: '/formation-et-experiences',
    name: 'FormationExperiences',
    component: FormationExperiences,
    meta: {
      title: 'Un long parcours pour devenir un meilleur développeur full-stack | Julian Husson'
    }
  },
  {
    path: '/qualites',
    name: 'Qualites',
    component: Qualites,
    meta: {
      title: 'Angular, Java... une passion qui va du front au back | Julian Husson'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Vous voulez plus d\'information sur moi ? Echangeons ensemble ! | Julian Husson'
    }
  },
  {
    path: "/:pathMatch(.*)*",
    component: Page404,
    meta: {
      title: 'Erreur 404 : la page que vous avez tapé est inexistante | Julian Husson'
    }
  }
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
