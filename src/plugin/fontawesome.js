import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGuitar,faGamepad,faImage,faFilm,faUsers,faAddressBook,faLaptopCode,faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(faGuitar,faGamepad,faImage,faFilm,faUsers,faAddressBook,faLaptopCode,faEllipsisH);

Vue.component('font-awesome-icon', FontAwesomeIcon)

