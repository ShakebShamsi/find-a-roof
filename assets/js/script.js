'use strict';

/**
 * Navbar Toggle Functionality in Mobile View
 */

const /**{NodeElement} */ $navbar = document.querySelector('[data-navbar]');
const /**{NodeElement} */ $navToggler = document.querySelector('[data-nav-toggler]');

$navToggler.addEventListener('click', () => $navbar.classList.toggle('active'));

/**   
 * Header Scroll Functionality
 */

const /**{NodeElement} */ $header = document.querySelector('[data-header]');
window.addEventListener('scroll', e => {
  $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');   
})


/* Add to Favourite Toggle Button */

const /** {NodeList} */ $toggleBtns = document.querySelectorAll('[data-toggle-btn]');

$toggleBtns.forEach($toggleBtn => {
   $toggleBtn.addEventListener('click', () => {
      $toggleBtn.classList.toggle('active')
   });
});
