(self["webpackChunk"] = self["webpackChunk"] || []).push([["musicianDetail"],{

/***/ "./assets/musicianDetail.js":
/*!**********************************!*\
  !*** ./assets/musicianDetail.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/js/tom-select.complete.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tom_select__WEBPACK_IMPORTED_MODULE_6__);







var bands = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.js-band').data('bands');
document.addEventListener('DOMContentLoaded', function () {
  var route = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.js-band').data('route');

  //---

  var formInnerDiv = document.createElement('div');
  formInnerDiv.id = 'custom-musician-details';
  var formInput = document.createElement('input');
  formInput.name = 'musician_detail[bands]';
  formInput.style.visibility = 'hidden';
  formInput.style.display = 'none';
  formInnerDiv.appendChild(formInput);
  document.getElementById('musician_detail').appendChild(formInnerDiv);

  // ---

  var tomSelect = new (tom_select__WEBPACK_IMPORTED_MODULE_6___default())('#musician_detail_tom', {
    plugins: {
      remove_button: {
        title: 'Entfernen'
      }
    },
    valueField: 'bandName',
    labelField: 'bandName',
    searchField: 'bandName',
    // fetch remote data
    load: function load(query, callback) {
      var url = 'http://' + window.location.hostname + route + encodeURIComponent(query);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        callback(json.message);
      })["catch"](function () {
        //callback();
      });
    },
    // custom rendering functions for options and items
    render: {
      option: function option(item, escape) {
        return "<div>\n\t\t\t\t\t\t\t<p>".concat(item.bandName, "</p>\n\t\t\t\t\t\t</div>");
      }
    }
  });

  // ---

  tomSelect.on("change", function () {
    formInput.innerHTML = '';
    tomSelect.items.forEach(function (item) {
      for (var option in tomSelect.options) {
        if ("".concat(tomSelect.options[option]['bandName']) === item) {
          var band = document.createElement('input');
          band.name = 'musician_detail[bands][' + "".concat(tomSelect.options[option]['id']) + ']';
          band.style.visibility = 'hidden';
          band.style.display = 'none';
          band.setAttribute('value', "".concat(tomSelect.options[option]['id']));
          formInput.appendChild(band);
        }
      }
    });
  });
  bands.forEach(function (band) {
    tomSelect.addOption({
      id: band.id,
      bandName: band.bandName
    });
    tomSelect.addItem(band.bandName);
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/a-constructor.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-2f5289","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_web_do-d03a26","vendors-node_modules_core-js_modules_es_promise_js-node_modules_tom-select_dist_js_tom-select-3d01fd"], () => (__webpack_exec__("./assets/musicianDetail.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyxtR0FBbUM7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdCQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDMUJELHFCQUFxQixnSUFBZ0Q7QUFDckUsYUFBYSxtQkFBTyxDQUFDLDJGQUErQjtBQUNwRCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRTlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQ0FBZ0M7QUFDNUU7QUFDQTs7Ozs7Ozs7Ozs7QUNYQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsMkJBQTJCLG1IQUE0QztBQUN2RSxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQscUJBQXFCLGdJQUFnRDs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9tdXNpY2lhbkRldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBUb21TZWxlY3QgZnJvbSBcInRvbS1zZWxlY3RcIjtcblxudmFyIGJhbmRzID0gJCgnLmpzLWJhbmQnKS5kYXRhKCdiYW5kcycpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZSA9ICQoJy5qcy1iYW5kJykuZGF0YSgncm91dGUnKTtcblxuICAgIC8vLS0tXG5cbiAgICBjb25zdCBmb3JtSW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtSW5uZXJEaXYuaWQgPSAnY3VzdG9tLW11c2ljaWFuLWRldGFpbHMnXG5cbiAgICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZvcm1JbnB1dC5uYW1lID0gJ211c2ljaWFuX2RldGFpbFtiYW5kc10nO1xuICAgIGZvcm1JbnB1dC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZm9ybUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBmb3JtSW5uZXJEaXYuYXBwZW5kQ2hpbGQoZm9ybUlucHV0KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNpY2lhbl9kZXRhaWwnKS5hcHBlbmRDaGlsZChmb3JtSW5uZXJEaXYpO1xuXG4gICAgLy8gLS0tXG5cbiAgICB2YXIgdG9tU2VsZWN0ID0gbmV3IFRvbVNlbGVjdCgnI211c2ljaWFuX2RldGFpbF90b20nLCB7XG4gICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgIHJlbW92ZV9idXR0b246IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0VudGZlcm5lbicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlRmllbGQ6ICdiYW5kTmFtZScsXG4gICAgICAgIGxhYmVsRmllbGQ6ICdiYW5kTmFtZScsXG4gICAgICAgIHNlYXJjaEZpZWxkOiAnYmFuZE5hbWUnLFxuICAgICAgICAvLyBmZXRjaCByZW1vdGUgZGF0YVxuICAgICAgICBsb2FkOiBmdW5jdGlvbiAocXVlcnksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgcm91dGUgKyBlbmNvZGVVUklDb21wb25lbnQocXVlcnkpO1xuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgLy8gY3VzdG9tIHJlbmRlcmluZyBmdW5jdGlvbnMgZm9yIG9wdGlvbnMgYW5kIGl0ZW1zXG4gICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgb3B0aW9uOiBmdW5jdGlvbiAoaXRlbSwgZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cD4ke2l0ZW0uYmFuZE5hbWV9PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gLS0tXG5cblxuICAgIHRvbVNlbGVjdC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm1JbnB1dC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdG9tU2VsZWN0Lml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIGluIHRvbVNlbGVjdC5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGAke3RvbVNlbGVjdC5vcHRpb25zW29wdGlvbl1bJ2JhbmROYW1lJ119YCA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgYmFuZC5uYW1lID0gJ211c2ljaWFuX2RldGFpbFtiYW5kc11bJyArIGAke3RvbVNlbGVjdC5vcHRpb25zW29wdGlvbl1bJ2lkJ119YCArICddJztcbiAgICAgICAgICAgICAgICAgICAgYmFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgIGJhbmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgYmFuZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dG9tU2VsZWN0Lm9wdGlvbnNbb3B0aW9uXVsnaWQnXX1gKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXQuYXBwZW5kQ2hpbGQoYmFuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJhbmRzLmZvckVhY2goZnVuY3Rpb24gKGJhbmQpe1xuICAgICAgICB0b21TZWxlY3QuYWRkT3B0aW9uKHtpZDogYmFuZC5pZCwgYmFuZE5hbWU6IGJhbmQuYmFuZE5hbWV9KTtcbiAgICAgICAgdG9tU2VsZWN0LmFkZEl0ZW0oYmFuZC5iYW5kTmFtZSk7XG4gICAgfSk7XG59KTtcblxuIiwidmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3InKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ29uc3RydWN0b3IoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xufTtcbiIsInZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmICh0eXBlb2YgYXJndW1lbnQgPT0gJ29iamVjdCcgfHwgaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgJFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArICRTdHJpbmcoYXJndW1lbnQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xufTtcbiIsInZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgYXBwbHkgPSBGdW5jdGlvblByb3RvdHlwZS5hcHBseTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXJlZmxlY3QgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgUmVmbGVjdCA9PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmFwcGx5IHx8IChOQVRJVkVfQklORCA/IGNhbGwuYmluZChhcHBseSkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGFwcGx5LCBhcmd1bWVudHMpO1xufSk7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAtLSBzYWZlICovXG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1zZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgICBzZXR0ZXIgPSB1bmN1cnJ5VGhpcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQpO1xuICAgIHNldHRlcih0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlcihPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBUQUcsIFNUQVRJQykge1xuICBpZiAodGFyZ2V0ICYmICFTVEFUSUMpIHRhcmdldCA9IHRhcmdldC5wcm90b3R5cGU7XG4gIGlmICh0YXJnZXQgJiYgIWhhc093bih0YXJnZXQsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBUT19TVFJJTkdfVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcbiAgfVxufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIEZVTkNUSU9OX05BTUVfRVhJU1RTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5FWElTVFM7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmcpO1xudmFyIG5hbWVSRSA9IC9mdW5jdGlvblxcYig/Olxcc3xcXC9cXCpbXFxTXFxzXSo/XFwqXFwvfFxcL1xcL1teXFxuXFxyXSpbXFxuXFxyXSspKihbXlxccygvXSopLztcbnZhciByZWdFeHBFeGVjID0gdW5jdXJyeVRoaXMobmFtZVJFLmV4ZWMpO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIUZVTkNUSU9OX05BTUVfRVhJU1RTKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHJlZ0V4cEV4ZWMobmFtZVJFLCBmdW5jdGlvblRvU3RyaW5nKHRoaXMpKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIiQiLCJUb21TZWxlY3QiLCJiYW5kcyIsImRhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb3V0ZSIsImZvcm1Jbm5lckRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImZvcm1JbnB1dCIsIm5hbWUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJnZXRFbGVtZW50QnlJZCIsInRvbVNlbGVjdCIsInBsdWdpbnMiLCJyZW1vdmVfYnV0dG9uIiwidGl0bGUiLCJ2YWx1ZUZpZWxkIiwibGFiZWxGaWVsZCIsInNlYXJjaEZpZWxkIiwibG9hZCIsInF1ZXJ5IiwiY2FsbGJhY2siLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibWVzc2FnZSIsInJlbmRlciIsIm9wdGlvbiIsIml0ZW0iLCJlc2NhcGUiLCJiYW5kTmFtZSIsIm9uIiwiaW5uZXJIVE1MIiwiaXRlbXMiLCJmb3JFYWNoIiwib3B0aW9ucyIsImJhbmQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRPcHRpb24iLCJhZGRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==