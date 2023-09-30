import './styles/styles.css';

import displayNav from './pages/navbar';
import displayHome from './pages/home';
import displayMenu from './pages/menu';
import displayContact from './pages/contact';

displayNav();
displayHome();

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

homeButton.addEventListener('click', () => {
  const mainDiv = document.querySelector('.main');
  mainDiv.remove();
  displayHome();
})

menuButton.addEventListener('click', () => {
  const mainDiv = document.querySelector('.main');
  mainDiv.remove();
  displayMenu();
})

contactButton.addEventListener('click', () => {
  const mainDiv = document.querySelector('.main');
  mainDiv.remove();
  displayContact();
})
