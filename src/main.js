import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMatomo from 'vue-matomo';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


const app = createApp(App);
app.use(VueMatomo, {
    host: "https://matomo.julian-husson.com/",
    siteId: 1,
    trackerFileName: 'matomo',
    router: router,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true,
    disableCookies: false,
    enableHeartBeatTimer: false,
    heartBeatTimerInterval: 15,
    debug: false,
    userId: undefined,
    cookieDomain: undefined,
    domains: undefined,
    preInitActions: []
});
app.use(router).mount('#app');
app.config.globalProperties.$languages = [
    { title: 'Angular', highlight: true, typeLogo: 'i', logo: 'fab fa-angular', oneStar: 4, halfStar: 1, emptyStar: 0},
    { title: 'Flutter', highlight: false, typeLogo: 'img', logo: require('../src/assets/flutter-logo.webp'), oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'TypeScript', highlight: false, typeLogo: 'img', logo: require('../src/assets/typescript-logo.webp'), oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'CSS', highlight: false, typeLogo: 'i', logo: 'fab fa-css3-alt', oneStar: 4, halfStar: 1, emptyStar: 0},
    { title: 'Vue.js', highlight: false, typeLogo: 'i', logo: 'fab fa-vuejs', oneStar: 3, halfStar: 0, emptyStar: 2},
    { title: 'HTML', highlight: false, typeLogo: 'i', logo: 'fab fa-html5', oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'Bootstrap', highlight: false, typeLogo: 'i', logo: 'fab fa-bootstrap', oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'Sass/Scss', highlight: false, typeLogo: 'i', logo: 'fab fa-sass', oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'JavaScript', highlight: false, typeLogo: 'i', logo: 'fab fa-js', oneStar: 3, halfStar: 0, emptyStar: 2},
    { title: 'Python', highlight: false, typeLogo: 'img', logo: require('../src/assets/python-logo.webp'), oneStar: 2, halfStar: 1, emptyStar: 2},
    { title: 'Java', highlight: true, typeLogo: 'i', logo: 'fab fa-java', oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'Traefik', highlight: false, typeLogo: 'img', logo: require('../src/assets/traefik-logo.webp'), oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'Docker', highlight: false, typeLogo: 'i', logo: 'fab fa-docker', oneStar: 3, halfStar: 0, emptyStar: 2},
    { title: 'PostgreSQL', highlight: false, typeLogo: 'img', logo: require('../src/assets/postgresql-logo.webp'), oneStar: 3, halfStar: 0, emptyStar: 2},
    { title: 'NodeJS', highlight: false, typeLogo: 'i', logo: 'fab fa-node-js', oneStar: 3, halfStar: 0, emptyStar: 2},
    { title: 'CI/CD', highlight: false, typeLogo: 'img', logo: require('../src/assets/devops-logo.webp'), oneStar: 3, halfStar: 0, emptyStar: 2},
];

