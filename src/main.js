import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


const app = createApp(App);
app.use(router).mount('#app');
app.config.globalProperties.$languages = [
    { title: 'Angular', highlight: true, typeLogo: 'i', logo: 'fab fa-angular', oneStar: 4, halfStar: 1, emptyStar: 0},
    { title: 'TypeScript', highlight: false, typeLogo: 'img', logo: require('../src/assets/typescript-logo.png'), oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'Vue.js', highlight: false, typeLogo: 'i', logo: 'fab fa-vuejs', oneStar: 3, halfStar: 0, emptyStar: 2},
    { title: 'Sass/Scss', highlight: false, typeLogo: 'i', logo: 'fab fa-sass', oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'Bootstrap', highlight: false, typeLogo: 'i', logo: 'fab fa-bootstrap', oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'JavaScript', highlight: false, typeLogo: 'i', logo: 'fab fa-js', oneStar: 3, halfStar: 1, emptyStar: 1},
    { title: 'CSS', highlight: false, typeLogo: 'i', logo: 'fab fa-css3-alt', oneStar: 4, halfStar: 1, emptyStar: 0},
    { title: 'JQuery', highlight: false, typeLogo: 'img', logo: require('../src/assets/jquery-logo.gif'), oneStar: 3, halfStar: 1, emptyStar: 1}
];

