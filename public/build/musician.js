(self["webpackChunk"] = self["webpackChunk"] || []).push([["musician"],{

/***/ "./assets/musician.js":
/*!****************************!*\
  !*** ./assets/musician.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var innerCategoryListing = document.getElementById('inner-category-listing');
var musicianSelect = document.getElementById('musician_category_Musiker_autocomplete');
var musicianCreate = document.getElementById('create-musician');
var musicianDetail = document.getElementById('modify-musician');
document.addEventListener('DOMContentLoaded', function () {
  var route = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.js-musician').data('route');
  var routeDetail = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.js-musician').data('routeDetail');
  routeDetail = routeDetail.slice(0, -1);
  musicianSelect.addEventListener("change", function () {
    if (musicianSelect.value === "") {
      musicianDetail.style.display = 'none';
      musicianDetail.style.visibility = 'hidden';
      musicianCreate.style.display = 'flex';
      musicianCreate.style.visibility = 'visible';
    } else {
      musicianCreate.style.display = 'none';
      musicianCreate.style.visibility = 'hidden';
      musicianDetail.style.display = 'flex';
      musicianDetail.style.visibility = 'visible';
      musicianDetail.href = routeDetail + musicianSelect.value;
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default().post(route, function (response) {
    response.message.forEach(function (element) {
      var artistDiv = document.createElement('div');
      var lastNameDiv = document.createElement('div');
      var editDiv = document.createElement('div');
      artistDiv.className = 'inner-grid-item';
      lastNameDiv.className = 'inner-grid-item';
      editDiv.className = 'inner-grid-item';
      var artistName = document.createElement('h1');
      var lastName = document.createElement('h1');
      var editButton = document.createElement('a');
      var editButtonImg = document.createElement('img');
      artistName.className = 'inner-entity-title';
      lastName.className = 'inner-entity-title';
      editButton.className = '';
      artistName.innerHTML = element['artistName'];
      lastName.innerHTML = element['lastName'];
      editButton.href = routeDetail + element['id'];
      editButtonImg.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/6324/6324826.png');
      editButtonImg.style.width = '30px';
      editButtonImg.style.height = '30px';
      artistDiv.appendChild(artistName);
      lastNameDiv.appendChild(lastName);
      editButton.appendChild(editButtonImg);
      editDiv.appendChild(editButton);
      innerCategoryListing.appendChild(artistDiv);
      innerCategoryListing.appendChild(lastNameDiv);
      innerCategoryListing.appendChild(editDiv);
    });
  }, "json");
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var nativeSlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-2f5289","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_web_do-d03a26"], () => (__webpack_exec__("./assets/musician.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQU8sQ0FBQywrR0FBeUM7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsMkVBQXVCO0FBQzdDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCx3QkFBd0IsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDbkUsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELHFCQUFxQixtQkFBTyxDQUFDLHlGQUE4QjtBQUMzRCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9tdXNpY2lhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IGlubmVyQ2F0ZWdvcnlMaXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lubmVyLWNhdGVnb3J5LWxpc3RpbmcnKTtcbmNvbnN0IG11c2ljaWFuU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljaWFuX2NhdGVnb3J5X011c2lrZXJfYXV0b2NvbXBsZXRlJyk7XG5jb25zdCBtdXNpY2lhbkNyZWF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbXVzaWNpYW4nKTtcbmNvbnN0IG11c2ljaWFuRGV0YWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGlmeS1tdXNpY2lhbicpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZSA9ICQoJy5qcy1tdXNpY2lhbicpLmRhdGEoJ3JvdXRlJyk7XG4gICAgdmFyIHJvdXRlRGV0YWlsID0gJCgnLmpzLW11c2ljaWFuJykuZGF0YSgncm91dGVEZXRhaWwnKTtcbiAgICByb3V0ZURldGFpbCA9IHJvdXRlRGV0YWlsLnNsaWNlKDAsIC0xKTtcblxuICAgIG11c2ljaWFuU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKG11c2ljaWFuU2VsZWN0LnZhbHVlID09PSBcIlwiKVxuICAgICAgICB7XG4gICAgICAgICAgICBtdXNpY2lhbkRldGFpbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbXVzaWNpYW5EZXRhaWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICAgICAgICBtdXNpY2lhbkNyZWF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbXVzaWNpYW5DcmVhdGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgbXVzaWNpYW5DcmVhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG11c2ljaWFuQ3JlYXRlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgICAgICAgbXVzaWNpYW5EZXRhaWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIG11c2ljaWFuRGV0YWlsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICBtdXNpY2lhbkRldGFpbC5ocmVmID0gcm91dGVEZXRhaWwgKyBtdXNpY2lhblNlbGVjdC52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJC5wb3N0KHJvdXRlLFxuICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLm1lc3NhZ2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFydGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGFydGlzdERpdi5jbGFzc05hbWUgPSAnaW5uZXItZ3JpZC1pdGVtJztcbiAgICAgICAgICAgICAgICBsYXN0TmFtZURpdi5jbGFzc05hbWUgPSAnaW5uZXItZ3JpZC1pdGVtJztcbiAgICAgICAgICAgICAgICBlZGl0RGl2LmNsYXNzTmFtZSA9ICdpbm5lci1ncmlkLWl0ZW0nO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXJ0aXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICAgICAgYXJ0aXN0TmFtZS5jbGFzc05hbWUgPSAnaW5uZXItZW50aXR5LXRpdGxlJztcbiAgICAgICAgICAgICAgICBsYXN0TmFtZS5jbGFzc05hbWUgPSAnaW5uZXItZW50aXR5LXRpdGxlJztcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgYXJ0aXN0TmFtZS5pbm5lckhUTUwgPSBlbGVtZW50WydhcnRpc3ROYW1lJ107XG4gICAgICAgICAgICAgICAgbGFzdE5hbWUuaW5uZXJIVE1MID0gZWxlbWVudFsnbGFzdE5hbWUnXTtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLmhyZWYgPSByb3V0ZURldGFpbCArIGVsZW1lbnRbJ2lkJ107XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvNjMyNC82MzI0ODI2LnBuZycpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b25JbWcuc3R5bGUud2lkdGggPSAnMzBweCc7XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbkltZy5zdHlsZS5oZWlnaHQgPSAnMzBweCc7XG5cbiAgICAgICAgICAgICAgICBhcnRpc3REaXYuYXBwZW5kQ2hpbGQoYXJ0aXN0TmFtZSk7XG4gICAgICAgICAgICAgICAgbGFzdE5hbWVEaXYuYXBwZW5kQ2hpbGQobGFzdE5hbWUpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbkltZyk7XG4gICAgICAgICAgICAgICAgZWRpdERpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgIGlubmVyQ2F0ZWdvcnlMaXN0aW5nLmFwcGVuZENoaWxkKGFydGlzdERpdik7XG4gICAgICAgICAgICAgICAgaW5uZXJDYXRlZ29yeUxpc3RpbmcuYXBwZW5kQ2hpbGQobGFzdE5hbWVEaXYpO1xuICAgICAgICAgICAgICAgIGlubmVyQ2F0ZWdvcnlMaXN0aW5nLmFwcGVuZENoaWxkKGVkaXREaXYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIFwianNvblwiKTtcbn0pO1xuXG5cblxuXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3InKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBuYXRpdmVTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgJEFycmF5ID0gQXJyYXk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc2xpY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc2xpY2Vcbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGsgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbmd0aCk7XG4gICAgdmFyIGZpbiA9IHRvQWJzb2x1dGVJbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZCwgbGVuZ3RoKTtcbiAgICAvLyBpbmxpbmUgYEFycmF5U3BlY2llc0NyZWF0ZWAgZm9yIHVzYWdlIG5hdGl2ZSBgQXJyYXkjc2xpY2VgIHdoZXJlIGl0J3MgcG9zc2libGVcbiAgICB2YXIgQ29uc3RydWN0b3IsIHJlc3VsdCwgbjtcbiAgICBpZiAoaXNBcnJheShPKSkge1xuICAgICAgQ29uc3RydWN0b3IgPSBPLmNvbnN0cnVjdG9yO1xuICAgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICAgIGlmIChpc0NvbnN0cnVjdG9yKENvbnN0cnVjdG9yKSAmJiAoQ29uc3RydWN0b3IgPT09ICRBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBudWxsKSBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gJEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNsaWNlKE8sIGssIGZpbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCA9IG5ldyAoQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCA/ICRBcnJheSA6IENvbnN0cnVjdG9yKShtYXgoZmluIC0gaywgMCkpO1xuICAgIGZvciAobiA9IDA7IGsgPCBmaW47IGsrKywgbisrKSBpZiAoayBpbiBPKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIG4sIE9ba10pO1xuICAgIHJlc3VsdC5sZW5ndGggPSBuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJpbm5lckNhdGVnb3J5TGlzdGluZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtdXNpY2lhblNlbGVjdCIsIm11c2ljaWFuQ3JlYXRlIiwibXVzaWNpYW5EZXRhaWwiLCJhZGRFdmVudExpc3RlbmVyIiwicm91dGUiLCJkYXRhIiwicm91dGVEZXRhaWwiLCJzbGljZSIsInZhbHVlIiwic3R5bGUiLCJkaXNwbGF5IiwidmlzaWJpbGl0eSIsImhyZWYiLCJwb3N0IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhcnRpc3REaXYiLCJjcmVhdGVFbGVtZW50IiwibGFzdE5hbWVEaXYiLCJlZGl0RGl2IiwiY2xhc3NOYW1lIiwiYXJ0aXN0TmFtZSIsImxhc3ROYW1lIiwiZWRpdEJ1dHRvbiIsImVkaXRCdXR0b25JbWciLCJpbm5lckhUTUwiLCJzZXRBdHRyaWJ1dGUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==