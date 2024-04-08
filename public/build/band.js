(self["webpackChunk"] = self["webpackChunk"] || []).push([["band"],{

/***/ "./assets/band.js":
/*!************************!*\
  !*** ./assets/band.js ***!
  \************************/
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
var bandSelect = document.getElementById('band_category_Band_autocomplete');
var bandCreate = document.getElementById('create-band');
var bandDetail = document.getElementById('modify-band');
document.addEventListener('DOMContentLoaded', function () {
  var route = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.js-band').data('route');
  var routeDetail = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.js-band').data('routeDetail');
  routeDetail = routeDetail.slice(0, -1);
  bandSelect.addEventListener("change", function () {
    if (bandSelect.value === "") {
      bandDetail.style.display = 'none';
      bandDetail.style.visibility = 'hidden';
      bandCreate.style.display = 'flex';
      bandCreate.style.visibility = 'visible';
    } else {
      bandCreate.style.display = 'none';
      bandCreate.style.visibility = 'hidden';
      bandDetail.style.display = 'flex';
      bandDetail.style.visibility = 'visible';
      bandDetail.href = routeDetail + bandSelect.value;
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default().post(route, function (response) {
    response.message.forEach(function (element) {
      var bandNameDiv = document.createElement('div');
      var editDiv = document.createElement('div');
      bandNameDiv.className = 'inner-grid-item';
      editDiv.className = 'inner-grid-item';
      var bandName = document.createElement('h1');
      var editButton = document.createElement('a');
      var editButtonImg = document.createElement('img');
      bandName.className = 'inner-entity-title';
      editButton.className = '';
      bandName.innerHTML = element['bandName'];
      editButton.href = routeDetail + element['id'];
      editButtonImg.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/6324/6324826.png');
      editButtonImg.style.width = '30px';
      editButtonImg.style.height = '30px';
      bandNameDiv.appendChild(bandName);
      editButton.appendChild(editButtonImg);
      editDiv.appendChild(editButton);
      innerCategoryListing.appendChild(bandNameDiv);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-2f5289","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_web_do-d03a26"], () => (__webpack_exec__("./assets/band.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsNkZBQWdDO0FBQzlELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQztBQUMxRixrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IGlubmVyQ2F0ZWdvcnlMaXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lubmVyLWNhdGVnb3J5LWxpc3RpbmcnKTtcbmNvbnN0IGJhbmRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFuZF9jYXRlZ29yeV9CYW5kX2F1dG9jb21wbGV0ZScpO1xuY29uc3QgYmFuZENyZWF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtYmFuZCcpO1xuY29uc3QgYmFuZERldGFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RpZnktYmFuZCcpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZSA9ICQoJy5qcy1iYW5kJykuZGF0YSgncm91dGUnKTtcbiAgICB2YXIgcm91dGVEZXRhaWwgPSAkKCcuanMtYmFuZCcpLmRhdGEoJ3JvdXRlRGV0YWlsJyk7XG4gICAgcm91dGVEZXRhaWwgPSByb3V0ZURldGFpbC5zbGljZSgwLCAtMSk7XG5cbiAgICBiYW5kU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKGJhbmRTZWxlY3QudmFsdWUgPT09IFwiXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJhbmREZXRhaWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGJhbmREZXRhaWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICAgICAgICBiYW5kQ3JlYXRlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBiYW5kQ3JlYXRlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGJhbmRDcmVhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGJhbmRDcmVhdGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICAgICAgICBiYW5kRGV0YWlsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBiYW5kRGV0YWlsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICBiYW5kRGV0YWlsLmhyZWYgPSByb3V0ZURldGFpbCArIGJhbmRTZWxlY3QudmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQucG9zdChyb3V0ZSxcbiAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXNwb25zZS5tZXNzYWdlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYW5kTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBiYW5kTmFtZURpdi5jbGFzc05hbWUgPSAnaW5uZXItZ3JpZC1pdGVtJztcbiAgICAgICAgICAgICAgICBlZGl0RGl2LmNsYXNzTmFtZSA9ICdpbm5lci1ncmlkLWl0ZW0nO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYmFuZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICAgICAgYmFuZE5hbWUuY2xhc3NOYW1lID0gJ2lubmVyLWVudGl0eS10aXRsZSc7XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSAnJztcblxuICAgICAgICAgICAgICAgIGJhbmROYW1lLmlubmVySFRNTCA9IGVsZW1lbnRbJ2JhbmROYW1lJ107XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi5ocmVmID0gcm91dGVEZXRhaWwgKyBlbGVtZW50WydpZCddO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAgJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzYzMjQvNjMyNDgyNi5wbmcnKTtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uSW1nLnN0eWxlLndpZHRoID0gJzMwcHgnO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b25JbWcuc3R5bGUuaGVpZ2h0ID0gJzMwcHgnO1xuXG4gICAgICAgICAgICAgICAgYmFuZE5hbWVEaXYuYXBwZW5kQ2hpbGQoYmFuZE5hbWUpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbkltZyk7XG4gICAgICAgICAgICAgICAgZWRpdERpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgIGlubmVyQ2F0ZWdvcnlMaXN0aW5nLmFwcGVuZENoaWxkKGJhbmROYW1lRGl2KTtcbiAgICAgICAgICAgICAgICBpbm5lckNhdGVnb3J5TGlzdGluZy5hcHBlbmRDaGlsZChlZGl0RGl2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBcImpzb25cIik7XG59KTtcblxuXG5cblxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgbmF0aXZlU2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzbGljZScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyICRBcnJheSA9IEFycmF5O1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAoaXNDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvcikgJiYgKENvbnN0cnVjdG9yID09PSAkQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09ICRBcnJheSB8fCBDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTbGljZShPLCBrLCBmaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyAkQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyIkIiwiaW5uZXJDYXRlZ29yeUxpc3RpbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFuZFNlbGVjdCIsImJhbmRDcmVhdGUiLCJiYW5kRGV0YWlsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdXRlIiwiZGF0YSIsInJvdXRlRGV0YWlsIiwic2xpY2UiLCJ2YWx1ZSIsInN0eWxlIiwiZGlzcGxheSIsInZpc2liaWxpdHkiLCJocmVmIiwicG9zdCIsInJlc3BvbnNlIiwibWVzc2FnZSIsImZvckVhY2giLCJlbGVtZW50IiwiYmFuZE5hbWVEaXYiLCJjcmVhdGVFbGVtZW50IiwiZWRpdERpdiIsImNsYXNzTmFtZSIsImJhbmROYW1lIiwiZWRpdEJ1dHRvbiIsImVkaXRCdXR0b25JbWciLCJpbm5lckhUTUwiLCJzZXRBdHRyaWJ1dGUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==