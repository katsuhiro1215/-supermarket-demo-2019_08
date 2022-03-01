"use strict";

$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('.menu-toggle').toggleClass('active');
    $('.header-nav').toggleClass('panelactive');
  });
  $('.header-nav ul li a').click(function() {
    $('.menu-toggle').removeClass('active');
    $('.header-nav').removeClass('panelactive');
  });
});