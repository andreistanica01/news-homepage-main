'use strict';

const btnMobileNav = document.querySelector('.mobile-nav-burger');
const btnMobileNavClose = document.querySelector('.mobile-nav-close');

const mobileNavElement = document.querySelector('.mobile-nav-items');
const mobileOverlayElement = document.querySelector('.mobile-nav-overlay');

btnMobileNav.addEventListener('click', function () {
  mobileNavElement.classList.remove('display-none');
  mobileOverlayElement.classList.remove('display-none');
  mobileNavElement.style.overflow = 'hidden';
});

btnMobileNavClose.addEventListener('click', function () {
  mobileNavElement.classList.add('display-none');
  mobileOverlayElement.classList.add('display-none');
});