"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vendor_symfony_ux-autocomplete_assets_dist_controller_js"],{

/***/ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-autocomplete/assets/dist/controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/js/tom-select.complete.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(tom_select__WEBPACK_IMPORTED_MODULE_28__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






























/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
var _instances, _getCommonConfig, _createAutocomplete, _createAutocompleteWithHtmlContents, _createAutocompleteWithRemoteData, _stripTags, _mergeObjects, _createTomSelect, _dispatchEvent;
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    var _this;
    _classCallCheck(this, default_1);
    _this = _super.apply(this, arguments);
    _instances.add(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      this.element.setAttribute('data-live-ignore', '');
      if (this.element.id) {
        var label = document.querySelector("label[for=\"".concat(this.element.id, "\"]"));
        if (label) {
          label.setAttribute('data-live-ignore', '');
        }
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.urlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _instances, "m", _createAutocompleteWithRemoteData).call(this, this.urlValue, this.minCharactersValue);
        return;
      }
      if (this.optionsAsHtmlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _instances, "m", _createAutocompleteWithHtmlContents).call(this);
        return;
      }
      this.tomSelect = __classPrivateFieldGet(this, _instances, "m", _createAutocomplete).call(this);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.tomSelect.revertSettings.innerHTML = this.element.innerHTML;
      this.tomSelect.destroy();
    }
  }, {
    key: "selectElement",
    get: function get() {
      if (!(this.element instanceof HTMLSelectElement)) {
        return null;
      }
      return this.element;
    }
  }, {
    key: "formElement",
    get: function get() {
      if (!(this.element instanceof HTMLInputElement) && !(this.element instanceof HTMLSelectElement)) {
        throw new Error('Autocomplete Stimulus controller can only be used no an <input> or <select>.');
      }
      return this.element;
    }
  }, {
    key: "preload",
    get: function get() {
      if (!this.hasPreloadValue) {
        return 'focus';
      }
      if (this.preloadValue == 'false') {
        return false;
      }
      if (this.preloadValue == 'true') {
        return true;
      }
      return this.preloadValue;
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_27__.Controller);
_instances = new WeakSet(), _getCommonConfig = function _getCommonConfig() {
  var _this2 = this;
  var plugins = {};
  var isMultiple = !this.selectElement || this.selectElement.multiple;
  if (!this.formElement.disabled && !isMultiple) {
    plugins.clear_button = {
      title: ''
    };
  }
  if (isMultiple) {
    plugins.remove_button = {
      title: ''
    };
  }
  if (this.urlValue) {
    plugins.virtual_scroll = {};
  }
  var render = {
    no_results: function no_results() {
      return "<div class=\"no-results\">".concat(_this2.noResultsFoundTextValue, "</div>");
    }
  };
  var config = {
    render: render,
    plugins: plugins,
    onItemAdd: function onItemAdd() {
      _this2.tomSelect.setTextboxValue('');
    },
    onInitialize: function onInitialize() {
      var tomSelect = this;
      tomSelect.wrapper.setAttribute('data-live-ignore', '');
    },
    closeAfterSelect: true
  };
  if (!this.selectElement && !this.urlValue) {
    config.shouldLoad = function () {
      return false;
    };
  }
  return __classPrivateFieldGet(this, _instances, "m", _mergeObjects).call(this, config, this.tomSelectOptionsValue);
}, _createAutocomplete = function _createAutocomplete() {
  var config = __classPrivateFieldGet(this, _instances, "m", _mergeObjects).call(this, __classPrivateFieldGet(this, _instances, "m", _getCommonConfig).call(this), {
    maxOptions: this.selectElement ? this.selectElement.options.length : 50
  });
  return __classPrivateFieldGet(this, _instances, "m", _createTomSelect).call(this, config);
}, _createAutocompleteWithHtmlContents = function _createAutocompleteWithHtmlContents() {
  var _this3 = this;
  var config = __classPrivateFieldGet(this, _instances, "m", _mergeObjects).call(this, __classPrivateFieldGet(this, _instances, "m", _getCommonConfig).call(this), {
    maxOptions: this.selectElement ? this.selectElement.options.length : 50,
    score: function score(search) {
      var scoringFunction = _this3.tomSelect.getScoreFunction(search);
      return function (item) {
        return scoringFunction(Object.assign(Object.assign({}, item), {
          text: __classPrivateFieldGet(_this3, _instances, "m", _stripTags).call(_this3, item.text)
        }));
      };
    },
    render: {
      item: function item(_item) {
        return "<div>".concat(_item.text, "</div>");
      },
      option: function option(item) {
        return "<div>".concat(item.text, "</div>");
      }
    }
  });
  return __classPrivateFieldGet(this, _instances, "m", _createTomSelect).call(this, config);
}, _createAutocompleteWithRemoteData = function _createAutocompleteWithRemoteData(autocompleteEndpointUrl, minCharacterLength) {
  var _this5 = this;
  var config = __classPrivateFieldGet(this, _instances, "m", _mergeObjects).call(this, __classPrivateFieldGet(this, _instances, "m", _getCommonConfig).call(this), {
    firstUrl: function firstUrl(query) {
      var separator = autocompleteEndpointUrl.includes('?') ? '&' : '?';
      return "".concat(autocompleteEndpointUrl).concat(separator, "query=").concat(encodeURIComponent(query));
    },
    load: function load(query, callback) {
      var _this4 = this;
      var url = this.getUrl(query);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this4.setNextUrl(query, json.next_page);
        callback(json.results);
      })["catch"](function () {
        return callback();
      });
    },
    shouldLoad: function shouldLoad(query) {
      var minLength = minCharacterLength || 3;
      return query.length >= minLength;
    },
    score: function score(search) {
      return function (item) {
        return 1;
      };
    },
    render: {
      option: function option(item) {
        return "<div>".concat(item.text, "</div>");
      },
      item: function item(_item2) {
        return "<div>".concat(_item2.text, "</div>");
      },
      no_more_results: function no_more_results() {
        return "<div class=\"no-more-results\">".concat(_this5.noMoreResultsTextValue, "</div>");
      },
      no_results: function no_results() {
        return "<div class=\"no-results\">".concat(_this5.noResultsFoundTextValue, "</div>");
      }
    },
    preload: this.preload
  });
  return __classPrivateFieldGet(this, _instances, "m", _createTomSelect).call(this, config);
}, _stripTags = function _stripTags(string) {
  return string.replace(/(<([^>]+)>)/gi, '');
}, _mergeObjects = function _mergeObjects(object1, object2) {
  return Object.assign(Object.assign({}, object1), object2);
}, _createTomSelect = function _createTomSelect(options) {
  __classPrivateFieldGet(this, _instances, "m", _dispatchEvent).call(this, 'autocomplete:pre-connect', {
    options: options
  });
  var tomSelect = new (tom_select__WEBPACK_IMPORTED_MODULE_28___default())(this.formElement, options);
  __classPrivateFieldGet(this, _instances, "m", _dispatchEvent).call(this, 'autocomplete:connect', {
    tomSelect: tomSelect,
    options: options
  });
  return tomSelect;
}, _dispatchEvent = function _dispatchEvent(name, payload) {
  this.element.dispatchEvent(new CustomEvent(name, {
    detail: payload,
    bubbles: true
  }));
};
default_1.values = {
  url: String,
  optionsAsHtml: Boolean,
  noResultsFoundText: String,
  noMoreResultsText: String,
  minCharacters: Number,
  tomSelectOptions: Object,
  preload: String
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yX3N5bWZvbnlfdXgtYXV0b2NvbXBsZXRlX2Fzc2V0c19kaXN0X2NvbnRyb2xsZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDYjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxzQkFBc0IsQ0FBQ0MsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsQ0FBQyxFQUFFO0VBQ3RELElBQUlELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLE1BQU0sSUFBSUMsU0FBUyxDQUFDLCtDQUErQyxDQUFDO0VBQzVGLElBQUksT0FBT0gsS0FBSyxLQUFLLFVBQVUsR0FBR0QsUUFBUSxLQUFLQyxLQUFLLElBQUksQ0FBQ0UsQ0FBQyxHQUFHLENBQUNGLEtBQUssQ0FBQ0ksR0FBRyxDQUFDTCxRQUFRLENBQUMsRUFBRSxNQUFNLElBQUlJLFNBQVMsQ0FBQywwRUFBMEUsQ0FBQztFQUNsTCxPQUFPRixJQUFJLEtBQUssR0FBRyxHQUFHQyxDQUFDLEdBQUdELElBQUksS0FBSyxHQUFHLEdBQUdDLENBQUMsQ0FBQ0csSUFBSSxDQUFDTixRQUFRLENBQUMsR0FBR0csQ0FBQyxHQUFHQSxDQUFDLENBQUNJLEtBQUssR0FBR04sS0FBSyxDQUFDTyxHQUFHLENBQUNSLFFBQVEsQ0FBQztBQUNqRztBQUVBLElBQUlTLFVBQVUsRUFBRUMsZ0JBQWdCLEVBQUVDLG1CQUFtQixFQUFFQyxtQ0FBbUMsRUFBRUMsaUNBQWlDLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxnQkFBZ0IsRUFBRUMsY0FBYztBQUFDLElBQ3JMQyxTQUFTO0VBQUE7RUFB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WCxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFO0lBQUVzQixTQUFTLEVBQVRBLFNBQVM7SUFBRWtDLE9BQU8sRUFBUEE7RUFBUSxDQUFDLENBQUM7RUFDeEgsT0FBT2xDLFNBQVM7QUFDcEIsQ0FBQyxFQUFFWCxjQUFjLEdBQUcsU0FBU0EsY0FBYyxDQUFDa0YsSUFBSSxFQUFFQyxPQUFPLEVBQUU7RUFDdkQsSUFBSSxDQUFDL0UsT0FBTyxDQUFDZ0YsYUFBYSxDQUFDLElBQUlDLFdBQVcsQ0FBQ0gsSUFBSSxFQUFFO0lBQUVJLE1BQU0sRUFBRUgsT0FBTztJQUFFSSxPQUFPLEVBQUU7RUFBSyxDQUFDLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBQ0R0RixTQUFTLENBQUN1RixNQUFNLEdBQUc7RUFDZnZCLEdBQUcsRUFBRXdCLE1BQU07RUFDWEMsYUFBYSxFQUFFQyxPQUFPO0VBQ3RCQyxrQkFBa0IsRUFBRUgsTUFBTTtFQUMxQkksaUJBQWlCLEVBQUVKLE1BQU07RUFDekJLLGFBQWEsRUFBRUMsTUFBTTtFQUNyQkMsZ0JBQWdCLEVBQUU1QyxNQUFNO0VBQ3hCeUIsT0FBTyxFQUFFWTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1hdXRvY29tcGxldGUvYXNzZXRzL2Rpc3QvY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCBUb21TZWxlY3QgZnJvbSAndG9tLXNlbGVjdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxudmFyIF9pbnN0YW5jZXMsIF9nZXRDb21tb25Db25maWcsIF9jcmVhdGVBdXRvY29tcGxldGUsIF9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzLCBfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEsIF9zdHJpcFRhZ3MsIF9tZXJnZU9iamVjdHMsIF9jcmVhdGVUb21TZWxlY3QsIF9kaXNwYXRjaEV2ZW50O1xuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJywgJycpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmlkKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7dGhpcy5lbGVtZW50LmlkfVwiXWApO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YSkuY2FsbCh0aGlzLCB0aGlzLnVybFZhbHVlLCB0aGlzLm1pbkNoYXJhY3RlcnNWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc0FzSHRtbFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9tU2VsZWN0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX2NyZWF0ZUF1dG9jb21wbGV0ZSkuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy50b21TZWxlY3QucmV2ZXJ0U2V0dGluZ3MuaW5uZXJIVE1MID0gdGhpcy5lbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgdGhpcy50b21TZWxlY3QuZGVzdHJveSgpO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0RWxlbWVudCgpIHtcbiAgICAgICAgaWYgKCEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgZm9ybUVsZW1lbnQoKSB7XG4gICAgICAgIGlmICghKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpICYmICEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F1dG9jb21wbGV0ZSBTdGltdWx1cyBjb250cm9sbGVyIGNhbiBvbmx5IGJlIHVzZWQgbm8gYW4gPGlucHV0PiBvciA8c2VsZWN0Pi4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgcHJlbG9hZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1ByZWxvYWRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICdmb2N1cyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJlbG9hZFZhbHVlID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmVsb2FkVmFsdWUgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVsb2FkVmFsdWU7XG4gICAgfVxufVxuX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9nZXRDb21tb25Db25maWcgPSBmdW5jdGlvbiBfZ2V0Q29tbW9uQ29uZmlnKCkge1xuICAgIGNvbnN0IHBsdWdpbnMgPSB7fTtcbiAgICBjb25zdCBpc011bHRpcGxlID0gIXRoaXMuc2VsZWN0RWxlbWVudCB8fCB0aGlzLnNlbGVjdEVsZW1lbnQubXVsdGlwbGU7XG4gICAgaWYgKCF0aGlzLmZvcm1FbGVtZW50LmRpc2FibGVkICYmICFpc011bHRpcGxlKSB7XG4gICAgICAgIHBsdWdpbnMuY2xlYXJfYnV0dG9uID0geyB0aXRsZTogJycgfTtcbiAgICB9XG4gICAgaWYgKGlzTXVsdGlwbGUpIHtcbiAgICAgICAgcGx1Z2lucy5yZW1vdmVfYnV0dG9uID0geyB0aXRsZTogJycgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMudXJsVmFsdWUpIHtcbiAgICAgICAgcGx1Z2lucy52aXJ0dWFsX3Njcm9sbCA9IHt9O1xuICAgIH1cbiAgICBjb25zdCByZW5kZXIgPSB7XG4gICAgICAgIG5vX3Jlc3VsdHM6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm5vLXJlc3VsdHNcIj4ke3RoaXMubm9SZXN1bHRzRm91bmRUZXh0VmFsdWV9PC9kaXY+YDtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICAgIG9uSXRlbUFkZDogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3Quc2V0VGV4dGJveFZhbHVlKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB0b21TZWxlY3QgPSB0aGlzO1xuICAgICAgICAgICAgdG9tU2VsZWN0LndyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJywgJycpO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZUFmdGVyU2VsZWN0OiB0cnVlLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLnNlbGVjdEVsZW1lbnQgJiYgIXRoaXMudXJsVmFsdWUpIHtcbiAgICAgICAgY29uZmlnLnNob3VsZExvYWQgPSAoKSA9PiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9tZXJnZU9iamVjdHMpLmNhbGwodGhpcywgY29uZmlnLCB0aGlzLnRvbVNlbGVjdE9wdGlvbnNWYWx1ZSk7XG59LCBfY3JlYXRlQXV0b2NvbXBsZXRlID0gZnVuY3Rpb24gX2NyZWF0ZUF1dG9jb21wbGV0ZSgpIHtcbiAgICBjb25zdCBjb25maWcgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9pbnN0YW5jZXMsIFwibVwiLCBfbWVyZ2VPYmplY3RzKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcbiAgICAgICAgbWF4T3B0aW9uczogdGhpcy5zZWxlY3RFbGVtZW50ID8gdGhpcy5zZWxlY3RFbGVtZW50Lm9wdGlvbnMubGVuZ3RoIDogNTAsXG4gICAgfSk7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9jcmVhdGVUb21TZWxlY3QpLmNhbGwodGhpcywgY29uZmlnKTtcbn0sIF9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzID0gZnVuY3Rpb24gX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMoKSB7XG4gICAgY29uc3QgY29uZmlnID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9pbnN0YW5jZXMsIFwibVwiLCBfZ2V0Q29tbW9uQ29uZmlnKS5jYWxsKHRoaXMpLCB7XG4gICAgICAgIG1heE9wdGlvbnM6IHRoaXMuc2VsZWN0RWxlbWVudCA/IHRoaXMuc2VsZWN0RWxlbWVudC5vcHRpb25zLmxlbmd0aCA6IDUwLFxuICAgICAgICBzY29yZTogKHNlYXJjaCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2NvcmluZ0Z1bmN0aW9uID0gdGhpcy50b21TZWxlY3QuZ2V0U2NvcmVGdW5jdGlvbihzZWFyY2gpO1xuICAgICAgICAgICAgcmV0dXJuIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3JpbmdGdW5jdGlvbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pLCB7IHRleHQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9zdHJpcFRhZ3MpLmNhbGwodGhpcywgaXRlbS50ZXh0KSB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgIGl0ZW06IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PiR7aXRlbS50ZXh0fTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj4ke2l0ZW0udGV4dH08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX2NyZWF0ZVRvbVNlbGVjdCkuY2FsbCh0aGlzLCBjb25maWcpO1xufSwgX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhID0gZnVuY3Rpb24gX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhKGF1dG9jb21wbGV0ZUVuZHBvaW50VXJsLCBtaW5DaGFyYWN0ZXJMZW5ndGgpIHtcbiAgICBjb25zdCBjb25maWcgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9pbnN0YW5jZXMsIFwibVwiLCBfbWVyZ2VPYmplY3RzKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcbiAgICAgICAgZmlyc3RVcmw6IChxdWVyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JztcbiAgICAgICAgICAgIHJldHVybiBgJHthdXRvY29tcGxldGVFbmRwb2ludFVybH0ke3NlcGFyYXRvcn1xdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YDtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZDogZnVuY3Rpb24gKHF1ZXJ5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocXVlcnkpO1xuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXROZXh0VXJsKHF1ZXJ5LCBqc29uLm5leHRfcGFnZSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soanNvbi5yZXN1bHRzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNhbGxiYWNrKCkpO1xuICAgICAgICB9LFxuICAgICAgICBzaG91bGRMb2FkOiBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IG1pbkNoYXJhY3Rlckxlbmd0aCB8fCAzO1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Lmxlbmd0aCA+PSBtaW5MZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIHNjb3JlOiBmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgb3B0aW9uOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj4ke2l0ZW0udGV4dH08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGl0ZW06IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PiR7aXRlbS50ZXh0fTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9fbW9yZV9yZXN1bHRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tbW9yZS1yZXN1bHRzXCI+JHt0aGlzLm5vTW9yZVJlc3VsdHNUZXh0VmFsdWV9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub19yZXN1bHRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPiR7dGhpcy5ub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZX08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlbG9hZDogdGhpcy5wcmVsb2FkLFxuICAgIH0pO1xuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9pbnN0YW5jZXMsIFwibVwiLCBfY3JlYXRlVG9tU2VsZWN0KS5jYWxsKHRoaXMsIGNvbmZpZyk7XG59LCBfc3RyaXBUYWdzID0gZnVuY3Rpb24gX3N0cmlwVGFncyhzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyk7XG59LCBfbWVyZ2VPYmplY3RzID0gZnVuY3Rpb24gX21lcmdlT2JqZWN0cyhvYmplY3QxLCBvYmplY3QyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb2JqZWN0MSksIG9iamVjdDIpO1xufSwgX2NyZWF0ZVRvbVNlbGVjdCA9IGZ1bmN0aW9uIF9jcmVhdGVUb21TZWxlY3Qob3B0aW9ucykge1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9kaXNwYXRjaEV2ZW50KS5jYWxsKHRoaXMsICdhdXRvY29tcGxldGU6cHJlLWNvbm5lY3QnLCB7IG9wdGlvbnMgfSk7XG4gICAgY29uc3QgdG9tU2VsZWN0ID0gbmV3IFRvbVNlbGVjdCh0aGlzLmZvcm1FbGVtZW50LCBvcHRpb25zKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9pbnN0YW5jZXMsIFwibVwiLCBfZGlzcGF0Y2hFdmVudCkuY2FsbCh0aGlzLCAnYXV0b2NvbXBsZXRlOmNvbm5lY3QnLCB7IHRvbVNlbGVjdCwgb3B0aW9ucyB9KTtcbiAgICByZXR1cm4gdG9tU2VsZWN0O1xufSwgX2Rpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiBfZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBidWJibGVzOiB0cnVlIH0pKTtcbn07XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIHVybDogU3RyaW5nLFxuICAgIG9wdGlvbnNBc0h0bWw6IEJvb2xlYW4sXG4gICAgbm9SZXN1bHRzRm91bmRUZXh0OiBTdHJpbmcsXG4gICAgbm9Nb3JlUmVzdWx0c1RleHQ6IFN0cmluZyxcbiAgICBtaW5DaGFyYWN0ZXJzOiBOdW1iZXIsXG4gICAgdG9tU2VsZWN0T3B0aW9uczogT2JqZWN0LFxuICAgIHByZWxvYWQ6IFN0cmluZyxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIlRvbVNlbGVjdCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJjYWxsIiwidmFsdWUiLCJnZXQiLCJfaW5zdGFuY2VzIiwiX2dldENvbW1vbkNvbmZpZyIsIl9jcmVhdGVBdXRvY29tcGxldGUiLCJfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cyIsIl9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YSIsIl9zdHJpcFRhZ3MiLCJfbWVyZ2VPYmplY3RzIiwiX2NyZWF0ZVRvbVNlbGVjdCIsIl9kaXNwYXRjaEV2ZW50IiwiZGVmYXVsdF8xIiwiYXJndW1lbnRzIiwiYWRkIiwiZWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlkIiwibGFiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1cmxWYWx1ZSIsInRvbVNlbGVjdCIsIm1pbkNoYXJhY3RlcnNWYWx1ZSIsIm9wdGlvbnNBc0h0bWxWYWx1ZSIsInJldmVydFNldHRpbmdzIiwiaW5uZXJIVE1MIiwiZGVzdHJveSIsIkhUTUxTZWxlY3RFbGVtZW50IiwiSFRNTElucHV0RWxlbWVudCIsIkVycm9yIiwiaGFzUHJlbG9hZFZhbHVlIiwicHJlbG9hZFZhbHVlIiwiV2Vha1NldCIsInBsdWdpbnMiLCJpc011bHRpcGxlIiwic2VsZWN0RWxlbWVudCIsIm11bHRpcGxlIiwiZm9ybUVsZW1lbnQiLCJkaXNhYmxlZCIsImNsZWFyX2J1dHRvbiIsInRpdGxlIiwicmVtb3ZlX2J1dHRvbiIsInZpcnR1YWxfc2Nyb2xsIiwicmVuZGVyIiwibm9fcmVzdWx0cyIsIm5vUmVzdWx0c0ZvdW5kVGV4dFZhbHVlIiwiY29uZmlnIiwib25JdGVtQWRkIiwic2V0VGV4dGJveFZhbHVlIiwib25Jbml0aWFsaXplIiwid3JhcHBlciIsImNsb3NlQWZ0ZXJTZWxlY3QiLCJzaG91bGRMb2FkIiwidG9tU2VsZWN0T3B0aW9uc1ZhbHVlIiwibWF4T3B0aW9ucyIsIm9wdGlvbnMiLCJsZW5ndGgiLCJzY29yZSIsInNlYXJjaCIsInNjb3JpbmdGdW5jdGlvbiIsImdldFNjb3JlRnVuY3Rpb24iLCJpdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwidGV4dCIsIm9wdGlvbiIsImF1dG9jb21wbGV0ZUVuZHBvaW50VXJsIiwibWluQ2hhcmFjdGVyTGVuZ3RoIiwiZmlyc3RVcmwiLCJxdWVyeSIsInNlcGFyYXRvciIsImluY2x1ZGVzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZCIsImNhbGxiYWNrIiwidXJsIiwiZ2V0VXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0TmV4dFVybCIsIm5leHRfcGFnZSIsInJlc3VsdHMiLCJtaW5MZW5ndGgiLCJub19tb3JlX3Jlc3VsdHMiLCJub01vcmVSZXN1bHRzVGV4dFZhbHVlIiwicHJlbG9hZCIsInN0cmluZyIsInJlcGxhY2UiLCJvYmplY3QxIiwib2JqZWN0MiIsIm5hbWUiLCJwYXlsb2FkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsInZhbHVlcyIsIlN0cmluZyIsIm9wdGlvbnNBc0h0bWwiLCJCb29sZWFuIiwibm9SZXN1bHRzRm91bmRUZXh0Iiwibm9Nb3JlUmVzdWx0c1RleHQiLCJtaW5DaGFyYWN0ZXJzIiwiTnVtYmVyIiwidG9tU2VsZWN0T3B0aW9ucyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9