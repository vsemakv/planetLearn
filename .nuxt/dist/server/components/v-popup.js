exports.ids = [4,6];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("57a2c6b6", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VSelect.vue?vue&type=template&id=07a205c2&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "select"
  }, [_vm._ssrNode("<p class=\"select__name\" data-v-07a205c2>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</p><div class=\"select__title\" data-v-07a205c2><p data-v-07a205c2>" + _vm._ssrEscape(_vm._s(_vm.selected)) + "</p><img" + _vm._ssrAttr("src", __webpack_require__(33)) + " alt=\"Arrow bottom\" data-v-07a205c2></div><div class=\"select__options\" data-v-07a205c2>" + _vm._ssrList(_vm.options, function (option) {
    return _vm.isVisible ? "<ul class=\"select__options-list\" data-v-07a205c2><li class=\"select__options-item\" data-v-07a205c2>" + _vm._ssrEscape(_vm._s(option.name)) + "</li></ul>" : "<!---->";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VSelect.vue?vue&type=template&id=07a205c2&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VSelect.vue?vue&type=script&lang=js&
/* harmony default export */ var VSelectvue_type_script_lang_js_ = ({
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    showOptions() {
      this.isVisible = !this.isVisible;
    },
    selectOption(option) {
      this.$emit('select', option);
      this.isVisible = false;
    },
    hideSelect() {
      this.isVisible = false;
    }
  }
});
// CONCATENATED MODULE: ./components/VSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VSelectvue_type_script_lang_js_ = (VSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VSelect.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "07a205c2",
  "793698f4"
  
)

/* harmony default export */ var VSelect = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjc3ODM4IDYuMTUzMzhDMy4xMDc4OCA1LjgyMzg3IDMuNjQyMTIgNS44MjM4NyAzLjk3MTYyIDYuMTUzMzhMOSAxMS4xODE4TDE0LjAyODQgNi4xNTMzOEMxNC4zNTc5IDUuODIzODcgMTQuODkyMSA1LjgyMzg3IDE1LjIyMTYgNi4xNTMzOEMxNS41NTExIDYuNDgyODggMTUuNTUxMSA3LjAxNzEyIDE1LjIyMTYgNy4zNDY2Mkw5LjU5NjYyIDEyLjk3MTZDOS4yNjcxMiAxMy4zMDExIDguNzMyODggMTMuMzAxMSA4LjQwMzM4IDEyLjk3MTZMMi43NzgzOCA3LjM0NjYyQzIuNDQ4ODcgNy4wMTcxMiAyLjQ0ODg3IDYuNDgyODggMi43NzgzOCA2LjE1MzM4WiIgZmlsbD0iIzZDNzI3RiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_id_07a205c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_id_07a205c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_id_07a205c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_id_07a205c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_id_07a205c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".select[data-v-07a205c2]{cursor:pointer;position:relative;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:rgba(0,0,0,0)}.select__name[data-v-07a205c2]{font-size:12px}.select__title[data-v-07a205c2]{display:flex;justify-content:space-between;align-items:center;width:84px;padding:16px;background:#fff;border:1px solid #d2d5da;border-radius:8px}@media screen and (min-width:360px)and (max-width:1024px){.select__title[data-v-07a205c2]{padding:16px 4px;justify-content:space-around}}.select__title>p[data-v-07a205c2]{font-weight:400;font-size:12px;line-height:15px;color:#6c727f}.select__name[data-v-07a205c2]{font-weight:700;font-size:14px;line-height:15px;color:#121826;background-color:#fff;padding:0 8px;position:absolute;top:-7px;left:12.15px}@media screen and (min-width:360px)and (max-width:1024px){.select__name[data-v-07a205c2]{font-size:12px}}.select__options[data-v-07a205c2]{position:absolute;width:100%;overflow-y:scroll;max-height:100px}.select__options-list[data-v-07a205c2]{display:flex;justify-content:center}.select__options-item[data-v-07a205c2]{border:1px solid #6c727f;border-top:none;width:80%;background-color:#fff;transition:all .3s}.select__options-item[data-v-07a205c2]:hover{background-color:#e5e5e5;transition:all .3s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("067c7804", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/PayPal.d07553a.svg";

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/googlePay.fdb1b76.svg";

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VPopup_vue_vue_type_style_index_0_id_15e69975_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VPopup_vue_vue_type_style_index_0_id_15e69975_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VPopup_vue_vue_type_style_index_0_id_15e69975_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VPopup_vue_vue_type_style_index_0_id_15e69975_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VPopup_vue_vue_type_style_index_0_id_15e69975_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(54);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".popup__bg[data-v-15e69975]{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.2)}.popup__form[data-v-15e69975]{display:flex;flex-direction:column;align-items:center;justify-content:space-around;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:400px;height:552px;background:#fff;box-shadow:0 0 0 4px rgba(0,0,0,.05);border-radius:12px;padding:24px 16px 16px}@media screen and (min-width:360px)and (max-width:1024px){.popup__form[data-v-15e69975]{width:80%}}.popup__form-title[data-v-15e69975]{font-weight:800;font-size:21px;line-height:120%;text-align:center}.popup__form-button--paypal[data-v-15e69975]{display:flex;justify-content:center;align-items:center;width:100%;height:56px;background:#fec538;border-radius:12px;border:none;transition:all .3s}.popup__form-button--paypal[data-v-15e69975]:hover{transition:all .3s;background:#ffda80}.popup__form-button--paypal>p[data-v-15e69975]{margin-left:10px;text-transform:uppercase;font-weight:700;font-size:16px;line-height:19px}.popup__form-button--google[data-v-15e69975]{display:flex;justify-content:center;align-items:center;width:100%;height:56px;background:#fff;border-radius:12px;border:1px solid #e1e1e1;transition:all .3s}.popup__form-button--google[data-v-15e69975]:hover{transition:all .3s;background:#000;color:#fff}.popup__form-button--google>p[data-v-15e69975]{margin-left:10px;text-transform:uppercase;font-weight:700;font-size:16px;line-height:19px}.popup__form-button--submit[data-v-15e69975]{padding:18.5px 124px;background:#d2d2d2;border-radius:12px;color:#fff;font-weight:700;font-size:16px;line-height:120%;border:none;cursor:default}.popup__form-button--close[data-v-15e69975]{padding:10px;font-size:16px;background-color:#fff;border:none}.popup__form-button--close[data-v-15e69975],.popup__form-choose[data-v-15e69975]{font-weight:600;line-height:140%;color:rgba(0,0,0,.4)}.popup__form-choose[data-v-15e69975]{width:100%;font-size:12px;letter-spacing:-.36px;text-align:center;position:relative}.popup__form-choose[data-v-15e69975]:before{left:0}.popup__form-choose[data-v-15e69975]:after,.popup__form-choose[data-v-15e69975]:before{position:absolute;content:\"\";display:block;width:45%;height:2px;background-color:rgba(0,0,0,.1);top:50%;transform:translateY(-50%)}.popup__form-choose[data-v-15e69975]:after{right:0}.popup__form-number[data-v-15e69975]{width:100%;position:relative;display:flex}.popup__form-number--input[data-v-15e69975]{width:100%;background:#fff;border:1px solid #d2d5da;border-radius:8px;height:46px;font-size:20px;padding-left:16px;outline:0;outline-offset:0}@media screen and (min-width:360px)and (max-width:1024px){.popup__form-number--input[data-v-15e69975]{font-size:12px}}.popup__form-number>p[data-v-15e69975]{font-weight:700;font-size:14px;line-height:15px;color:#121826;background-color:#fff;padding:0 8px;position:absolute;top:-7px;left:12.15px}@media screen and (min-width:360px)and (max-width:1024px){.popup__form-number>p[data-v-15e69975]{font-size:12px}}.popup__form-number[data-v-15e69975]:after{position:absolute;display:flex;justify-content:center;align-items:center;content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");width:32px;height:22px;right:12px;top:50%;transform:translateY(-50%);border:1px solid #f2f4f7;border-radius:4px;padding-top:3px}.popup__form-card[data-v-15e69975]{width:100%;display:flex;justify-content:space-between;align-items:center;margin:16px 0}.popup__form-select[data-v-15e69975]{position:relative}.popup__form-select--input[data-v-15e69975]{width:84px;padding:16px;background:#fff;border:1px solid #d2d5da;border-radius:8px;outline:0;outline-offset:0}@media screen and (min-width:360px)and (max-width:1024px){.popup__form-select--input[data-v-15e69975]{padding:16px 4px}}.popup__form-select--name[data-v-15e69975]{font-weight:700;font-size:14px;line-height:15px;color:#121826;background-color:#fff;padding:0 8px;position:absolute;top:-7px;left:12.15px}@media screen and (min-width:360px)and (max-width:1024px){.popup__form-select--name[data-v-15e69975]{font-size:12px}}.popup .validator[data-v-15e69975]{display:flex;width:100%}.popup .error[data-v-15e69975]{position:absolute;top:50%;transform:translateY(-50%);right:52px;color:red}.popup .active[data-v-15e69975]{background-color:#00ca14;cursor:pointer}.popup .hidden[data-v-15e69975]{display:none}.popup .incorrect[data-v-15e69975]{border:2px solid red}.popup .correct[data-v-15e69975]{border:2px solid #00ca14}.popup .correct-select[data-v-15e69975]{border-radius:10px;border:2px solid #00ca14}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mastercard.6769281.svg";

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VPopup.vue?vue&type=template&id=15e69975&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "popup"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("popup__bg", {
    'hidden': !_vm.$store.state.popup.showPopup
  }) + " data-v-15e69975></div>"), _c('ValidationObserver', [_c('form', {
    staticClass: "popup__form",
    class: {
      'hidden': !_vm.$store.state.popup.showPopup
    }
  }, [_c('p', {
    staticClass: "popup__form-title"
  }, [_vm._v("Payment method")]), _c('button', {
    staticClass: "popup__form-button--paypal"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(50),
      "alt": "PayPal logo"
    }
  }), _c('p', [_vm._v("Buy now")])]), _c('button', {
    staticClass: "popup__form-button--google"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(51),
      "alt": "GooglePay logo"
    }
  }), _c('p', [_vm._v("Pay")])]), _c('span', {
    staticClass: "popup__form-choose"
  }, [_vm._v("OR")]), _c('div', {
    staticClass: "popup__form-number"
  }, [_c('p', [_vm._v("Card number")]), _c('ValidationProvider', {
    staticClass: "validator",
    attrs: {
      "rules": "min:19"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.valueCard,
            expression: "valueCard"
          }, {
            name: "mask",
            rawName: "v-mask",
            value: '#### #### #### ####',
            expression: "'#### #### #### ####'"
          }],
          staticClass: "popup__form-number--input",
          class: {
            'incorrect': _vm.isIncorrectNum,
            'correct': _vm.isCorrectNum
          },
          attrs: {
            "type": "text",
            "placeholder": "•••• •••• •••• ••••"
          },
          domProps: {
            "value": _vm.valueCard
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.valueCard = $event.target.value;
            }
          }
        }), _c('span', {
          staticClass: "error"
        }, [_vm._v(_vm._s(errors[0]))])];
      }
    }])
  })], 1), _c('div', {
    staticClass: "popup__form-card"
  }, [_c('div', {
    staticClass: "popup__form-select"
  }, [_c('VSelect', {
    class: {
      'correct-select': _vm.isSelectedMonth
    },
    attrs: {
      "options": _vm.months,
      "selected": _vm.selectedMonth,
      "title": _vm.titleMonth
    },
    on: {
      "select": _vm.selectOptionMonth
    }
  })], 1), _c('div', {
    staticClass: "popup__form-select"
  }, [_c('VSelect', {
    class: {
      'correct-select': _vm.isSelectedYear
    },
    attrs: {
      "options": _vm.years,
      "selected": _vm.selectedYear,
      "title": _vm.titleYear
    },
    on: {
      "select": _vm.selectOptionYear
    }
  })], 1), _c('div', {
    staticClass: "popup__form-select"
  }, [_c('p', {
    staticClass: "popup__form-select--name"
  }, [_vm._v("CVC")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.valueCvc,
      expression: "valueCvc"
    }, {
      name: "mask",
      rawName: "v-mask",
      value: '###',
      expression: "'###'"
    }],
    staticClass: "popup__form-select--input",
    class: {
      'correct': _vm.isCorrectCvc
    },
    attrs: {
      "type": "password",
      "placeholder": "•••"
    },
    domProps: {
      "value": _vm.valueCvc
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.valueCvc = $event.target.value;
      }
    }
  })])]), _c('button', {
    staticClass: "popup__form-button--submit",
    class: {
      'active': _vm.isCorrectNum && _vm.isCorrectCvc && _vm.selectedYear.length == 4 && _vm.selectedMonth.length == 2
    },
    attrs: {
      "disabled": !_vm.isCorrectNum || !_vm.isCorrectCvc || _vm.selectedYear.length !== 4 || _vm.selectedMonth.length !== 2
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
      }
    }
  }, [_vm._v("Submit")]), _c('button', {
    staticClass: "popup__form-button--close",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_vm._v("Close")])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VPopup.vue?vue&type=template&id=15e69975&scoped=true&lang=pug&

// EXTERNAL MODULE: ./components/VSelect.vue + 4 modules
var VSelect = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.js
var vee_validate = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VPopup.vue?vue&type=script&lang=js&



Object(vee_validate["extend"])('required', {
  ...rules["b" /* required */],
  message: 'This field is required'
});
Object(vee_validate["extend"])('min', {
  ...rules["a" /* min */],
  message: 'Invalid number'
});
/* harmony default export */ var VPopupvue_type_script_lang_js_ = ({
  components: {
    VSelect: VSelect["default"],
    ValidationProvider: vee_validate["ValidationProvider"]
  },
  data() {
    return {
      months: [{
        name: "01",
        id: 1
      }, {
        name: "02",
        id: 2
      }, {
        name: "03",
        id: 3
      }, {
        name: "04",
        id: 4
      }, {
        name: "05",
        id: 5
      }, {
        name: "06",
        id: 6
      }, {
        name: "07",
        id: 7
      }, {
        name: "08",
        id: 8
      }, {
        name: "09",
        id: 9
      }, {
        name: "10",
        id: 10
      }, {
        name: "11",
        id: 11
      }, {
        name: "12",
        id: 12
      }],
      years: [{
        name: "2023",
        id: 1
      }, {
        name: "2024",
        id: 2
      }, {
        name: "2025",
        id: 3
      }, {
        name: "2026",
        id: 4
      }, {
        name: "2027",
        id: 5
      }, {
        name: "2028",
        id: 6
      }],
      selectedMonth: 'Select',
      isSelectedMonth: false,
      selectedYear: 'Select',
      isSelectedYear: false,
      titleYear: 'Year',
      titleMonth: 'Month',
      isVisible: false,
      valueCard: '',
      valueCvc: '',
      isCorrectCvc: false,
      isIncorrectNum: false,
      isCorrectNum: false,
      activeButton: false,
      isDisabled: true
    };
  },
  watch: {
    valueCard() {
      if (this.valueCard.length == 19) {
        this.isIncorrectNum = false;
        this.isCorrectNum = true;
      } else {
        this.isIncorrectNum = true;
        this.isCorrectNum = false;
      }
    },
    selectedMonth() {
      if (this.selectedMonth.length == 2) {
        this.isSelectedMonth = true;
      }
    },
    selectedYear() {
      if (this.selectedYear.length == 4) {
        this.isSelectedYear = true;
      }
    },
    valueCvc() {
      if (this.valueCvc.length == 3) {
        this.isCorrectCvc = true;
      } else {
        this.isCorrectCvc = false;
      }
    }
  },
  methods: {
    selectOptionMonth(option) {
      this.selectedMonth = option.name;
    },
    selectOptionYear(option) {
      this.selectedYear = option.name;
    },
    closeModal() {
      document.querySelector("body").style = "overflow-y: unset";
      this.$store.dispatch("popup/close");
    }
  },
  mounted() {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        this.$store.dispatch("popup/close");
      }
    });
  }
});
// CONCATENATED MODULE: ./components/VPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VPopupvue_type_script_lang_js_ = (VPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VPopup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "15e69975",
  "71153d12"
  
)

/* harmony default export */ var VPopup = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VSelect: __webpack_require__(30).default})


/***/ })

};;
//# sourceMappingURL=v-popup.js.map