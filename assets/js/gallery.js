/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/assets/js/gallery.js ***!
  \**********************************/
$ = window.jQuery;
$(document).ready(function ($) {
  $('div[data-gallery]').each(function () {
    console.log("found gallery");
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=gallery.js.map