/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./sign_in_up_button_customer/signupin.js":
/*!************************************************!*\
  !*** ./sign_in_up_button_customer/signupin.js ***!
  \************************************************/
/***/ (() => {

eval("console.log('running')\r\n\r\n\r\n$('.form').find('input, textarea').on('keyup blur focus', function (e) {\r\n  \r\n    var $this = $(this),\r\n        label = $this.prev('label');\r\n  \r\n        if (e.type === 'keyup') {\r\n              if ($this.val() === '') {\r\n            label.removeClass('active highlight');\r\n          } else {\r\n            label.addClass('active highlight');\r\n          }\r\n      } else if (e.type === 'blur') {\r\n          if( $this.val() === '' ) {\r\n              label.removeClass('active highlight'); \r\n              } else {\r\n              label.removeClass('highlight');   \r\n              }   \r\n      } else if (e.type === 'focus') {\r\n        \r\n        if( $this.val() === '' ) {\r\n              label.removeClass('highlight'); \r\n              } \r\n        else if( $this.val() !== '' ) {\r\n              label.addClass('highlight');\r\n              }\r\n      }\r\n  \r\n  });\r\n  \r\n  $('.tab a').on('click', function (e) {\r\n    \r\n    e.preventDefault();\r\n    \r\n    $(this).parent().addClass('active');\r\n    $(this).parent().siblings().removeClass('active');\r\n    \r\n    target = $(this).attr('href');\r\n  \r\n    $('.tab-content > div').not(target).hide();\r\n    \r\n    $(target).fadeIn(600);\r\n    \r\n  });\n\n//# sourceURL=webpack://devastra_hackout/./sign_in_up_button_customer/signupin.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./sign_in_up_button_customer/signupin.js"]();
/******/ 	
/******/ })()
;