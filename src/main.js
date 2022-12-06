import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'; // libreria icone del progetto
import { faChevronDown, 
         faMagnifyingGlass, 
         faRuler, 
         faCircleRadiation, 
         faBook,
         faCartShopping,
         faCircleChevronUp,
         faCircleChevronDown,
         faLocationDot,
         faArrowRightLong,
         faSpinner,
         faPeopleArrows,
         faMapLocationDot,
         faGlobe,
         faPerson,
         faCode
        } from '@fortawesome/free-solid-svg-icons'; // importiamo le icone che ci servono
import {faCircleUser,
        faCircle,
        faClock,
        } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // importazione del componente FontAwesomeIcon

library.add(faChevronDown,
            faCircleUser, 
            faMagnifyingGlass,
            faRuler,
            faCircleRadiation,
            faBook,
            faCartShopping,
            faCircleChevronUp,
            faCircleChevronDown,
            faLocationDot,
            faArrowRightLong,
            faCircle,
            faSpinner,
            faPeopleArrows,
            faMapLocationDot,
            faClock,
            faGlobe,
            faPerson,
            faCode
            ); // aggiungiamo le icone nella libreria del progetto
Vue.component('FontAwesomeIcon', FontAwesomeIcon); // registrazione globale del componente FontAwesomeIcon per renderlo usabile in qualsiasi parte del codice senza ulteriore importazione

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
