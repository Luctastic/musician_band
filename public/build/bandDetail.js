(self["webpackChunk"] = self["webpackChunk"] || []).push([["bandDetail"],{

/***/ "./assets/bandDetail.js":
/*!******************************!*\
  !*** ./assets/bandDetail.js ***!
  \******************************/
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







var musicians = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.js-musician').data('musicians');
document.addEventListener('DOMContentLoaded', function () {
  var route = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.js-musician').data('route');

  //---

  var formInnerDiv = document.createElement('div');
  formInnerDiv.id = 'custom-band-details';
  var formInput = document.createElement('input');
  formInput.name = 'band_detail[musicians]';
  formInput.style.visibility = 'hidden';
  formInput.style.display = 'none';
  formInnerDiv.appendChild(formInput);
  document.getElementById('band_detail').appendChild(formInnerDiv);

  // ---

  var tomSelect = new (tom_select__WEBPACK_IMPORTED_MODULE_6___default())('#band_detail_tom', {
    plugins: {
      remove_button: {
        title: 'Entfernen'
      }
    },
    valueField: 'artistName',
    labelField: 'artistName',
    searchField: 'artistName',
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
        return "<div>\n\t\t\t\t\t\t\t<p>".concat(item.artistName, "</p>\n\t\t\t\t\t\t</div>");
      }
    }
  });

  // ---

  tomSelect.on("change", function () {
    formInput.innerHTML = '';
    tomSelect.items.forEach(function (item) {
      for (var option in tomSelect.options) {
        if ("".concat(tomSelect.options[option]['artistName']) === item) {
          var musician = document.createElement('input');
          musician.name = 'band_detail[musicians][' + "".concat(tomSelect.options[option]['id']) + ']';
          musician.style.visibility = 'hidden';
          musician.style.display = 'none';
          musician.setAttribute('value', "".concat(tomSelect.options[option]['id']));
          formInput.appendChild(musician);
        }
      }
    });
  });
  musicians.forEach(function (musician) {
    tomSelect.addOption({
      id: musician.id,
      artistName: musician.artistName
    });
    tomSelect.addItem(musician.artistName);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-2f5289","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_web_do-d03a26","vendors-node_modules_core-js_modules_es_promise_js-node_modules_tom-select_dist_js_tom-select-3d01fd"], () => (__webpack_exec__("./assets/bandDetail.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxtR0FBbUM7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdCQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDMUJELHFCQUFxQixnSUFBZ0Q7QUFDckUsYUFBYSxtQkFBTyxDQUFDLDJGQUErQjtBQUNwRCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRTlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQ0FBZ0M7QUFDNUU7QUFDQTs7Ozs7Ozs7Ozs7QUNYQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsMkJBQTJCLG1IQUE0QztBQUN2RSxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQscUJBQXFCLGdJQUFnRDs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9iYW5kRGV0YWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFRvbVNlbGVjdCBmcm9tIFwidG9tLXNlbGVjdFwiO1xuXG52YXIgbXVzaWNpYW5zID0gJCgnLmpzLW11c2ljaWFuJykuZGF0YSgnbXVzaWNpYW5zJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlID0gJCgnLmpzLW11c2ljaWFuJykuZGF0YSgncm91dGUnKTtcblxuICAgIC8vLS0tXG5cbiAgICBjb25zdCBmb3JtSW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtSW5uZXJEaXYuaWQgPSAnY3VzdG9tLWJhbmQtZGV0YWlscydcblxuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZm9ybUlucHV0Lm5hbWUgPSAnYmFuZF9kZXRhaWxbbXVzaWNpYW5zXSc7XG4gICAgZm9ybUlucHV0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBmb3JtSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGZvcm1Jbm5lckRpdi5hcHBlbmRDaGlsZChmb3JtSW5wdXQpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhbmRfZGV0YWlsJykuYXBwZW5kQ2hpbGQoZm9ybUlubmVyRGl2KTtcblxuICAgIC8vIC0tLVxuXG4gICAgdmFyIHRvbVNlbGVjdCA9IG5ldyBUb21TZWxlY3QoJyNiYW5kX2RldGFpbF90b20nLCB7XG4gICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgIHJlbW92ZV9idXR0b246IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0VudGZlcm5lbicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlRmllbGQ6ICdhcnRpc3ROYW1lJyxcbiAgICAgICAgbGFiZWxGaWVsZDogJ2FydGlzdE5hbWUnLFxuICAgICAgICBzZWFyY2hGaWVsZDogJ2FydGlzdE5hbWUnLFxuICAgICAgICAvLyBmZXRjaCByZW1vdGUgZGF0YVxuICAgICAgICBsb2FkOiBmdW5jdGlvbiAocXVlcnksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgcm91dGUgKyBlbmNvZGVVUklDb21wb25lbnQocXVlcnkpO1xuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgLy8gY3VzdG9tIHJlbmRlcmluZyBmdW5jdGlvbnMgZm9yIG9wdGlvbnMgYW5kIGl0ZW1zXG4gICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgb3B0aW9uOiBmdW5jdGlvbiAoaXRlbSwgZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cD4ke2l0ZW0uYXJ0aXN0TmFtZX08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAtLS1cblxuICAgIHRvbVNlbGVjdC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm1JbnB1dC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdG9tU2VsZWN0Lml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIGluIHRvbVNlbGVjdC5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGAke3RvbVNlbGVjdC5vcHRpb25zW29wdGlvbl1bJ2FydGlzdE5hbWUnXX1gID09PSBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG11c2ljaWFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgbXVzaWNpYW4ubmFtZSA9ICdiYW5kX2RldGFpbFttdXNpY2lhbnNdWycgKyBgJHt0b21TZWxlY3Qub3B0aW9uc1tvcHRpb25dWydpZCddfWAgKyAnXSc7XG4gICAgICAgICAgICAgICAgICAgIG11c2ljaWFuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgbXVzaWNpYW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgbXVzaWNpYW4uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3RvbVNlbGVjdC5vcHRpb25zW29wdGlvbl1bJ2lkJ119YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKG11c2ljaWFuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbXVzaWNpYW5zLmZvckVhY2goZnVuY3Rpb24gKG11c2ljaWFuKXtcbiAgICAgICAgdG9tU2VsZWN0LmFkZE9wdGlvbih7aWQ6IG11c2ljaWFuLmlkLCBhcnRpc3ROYW1lOiBtdXNpY2lhbi5hcnRpc3ROYW1lfSk7XG4gICAgICAgIHRvbVNlbGVjdC5hZGRJdGVtKG11c2ljaWFuLmFydGlzdE5hbWUpO1xuICAgIH0pO1xufSk7XG5cbiIsInZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgY29uc3RydWN0b3InKTtcbn07XG4iLCJ2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAodHlwZW9mIGFyZ3VtZW50ID09ICdvYmplY3QnIHx8IGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93ICRUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyAkU3RyaW5nKGFyZ3VtZW50KSArICcgYXMgYSBwcm90b3R5cGUnKTtcbn07XG4iLCJ2YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGFwcGx5ID0gRnVuY3Rpb25Qcm90b3R5cGUuYXBwbHk7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1yZWZsZWN0IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFJlZmxlY3QgPT0gJ29iamVjdCcgJiYgUmVmbGVjdC5hcHBseSB8fCAoTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoYXBwbHkpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShhcHBseSwgYXJndW1lbnRzKTtcbn0pO1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gLS0gc2FmZSAqL1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qtc2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdmFyIHNldHRlcjtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG4gICAgc2V0dGVyID0gdW5jdXJyeVRoaXMoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0KTtcbiAgICBzZXR0ZXIodGVzdCwgW10pO1xuICAgIENPUlJFQ1RfU0VUVEVSID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgIGFuT2JqZWN0KE8pO1xuICAgIGFQb3NzaWJsZVByb3RvdHlwZShwcm90byk7XG4gICAgaWYgKENPUlJFQ1RfU0VUVEVSKSBzZXR0ZXIoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKHRhcmdldCAmJiAhU1RBVElDKSB0YXJnZXQgPSB0YXJnZXQucHJvdG90eXBlO1xuICBpZiAodGFyZ2V0ICYmICFoYXNPd24odGFyZ2V0LCBUT19TVFJJTkdfVEFHKSkge1xuICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBGVU5DVElPTl9OQU1FX0VYSVNUUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuRVhJU1RTO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nKTtcbnZhciBuYW1lUkUgPSAvZnVuY3Rpb25cXGIoPzpcXHN8XFwvXFwqW1xcU1xcc10qP1xcKlxcL3xcXC9cXC9bXlxcblxccl0qW1xcblxccl0rKSooW15cXHMoL10qKS87XG52YXIgcmVnRXhwRXhlYyA9IHVuY3VycnlUaGlzKG5hbWVSRS5leGVjKTtcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICFGVU5DVElPTl9OQU1FX0VYSVNUUykge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiByZWdFeHBFeGVjKG5hbWVSRSwgZnVuY3Rpb25Ub1N0cmluZyh0aGlzKSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyIkIiwiVG9tU2VsZWN0IiwibXVzaWNpYW5zIiwiZGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdXRlIiwiZm9ybUlubmVyRGl2IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZm9ybUlucHV0IiwibmFtZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsImdldEVsZW1lbnRCeUlkIiwidG9tU2VsZWN0IiwicGx1Z2lucyIsInJlbW92ZV9idXR0b24iLCJ0aXRsZSIsInZhbHVlRmllbGQiLCJsYWJlbEZpZWxkIiwic2VhcmNoRmllbGQiLCJsb2FkIiwicXVlcnkiLCJjYWxsYmFjayIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJtZXNzYWdlIiwicmVuZGVyIiwib3B0aW9uIiwiaXRlbSIsImVzY2FwZSIsImFydGlzdE5hbWUiLCJvbiIsImlubmVySFRNTCIsIml0ZW1zIiwiZm9yRWFjaCIsIm9wdGlvbnMiLCJtdXNpY2lhbiIsInNldEF0dHJpYnV0ZSIsImFkZE9wdGlvbiIsImFkZEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9