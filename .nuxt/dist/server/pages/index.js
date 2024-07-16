exports.ids = [8,2,3,4,5,6,7];
exports.modules = Array(29).concat([
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0f01aacd", content, true, context)
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("37451aa0", content, true, context)
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjc3ODM4IDYuMTUzMzhDMy4xMDc4OCA1LjgyMzg3IDMuNjQyMTIgNS44MjM4NyAzLjk3MTYyIDYuMTUzMzhMOSAxMS4xODE4TDE0LjAyODQgNi4xNTMzOEMxNC4zNTc5IDUuODIzODcgMTQuODkyMSA1LjgyMzg3IDE1LjIyMTYgNi4xNTMzOEMxNS41NTExIDYuNDgyODggMTUuNTUxMSA3LjAxNzEyIDE1LjIyMTYgNy4zNDY2Mkw5LjU5NjYyIDEyLjk3MTZDOS4yNjcxMiAxMy4zMDExIDguNzMyODggMTMuMzAxMSA4LjQwMzM4IDEyLjk3MTZMMi43NzgzOCA3LjM0NjYyQzIuNDQ4ODcgNy4wMTcxMiAyLjQ0ODg3IDYuNDgyODggMi43NzgzOCA2LjE1MzM4WiIgZmlsbD0iIzZDNzI3RiIvPgo8L3N2Zz4K"

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_id_07a205c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_id_07a205c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_id_07a205c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_id_07a205c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_style_index_0_id_07a205c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".select[data-v-07a205c2]{cursor:pointer;position:relative;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:rgba(0,0,0,0)}.select__name[data-v-07a205c2]{font-size:12px}.select__title[data-v-07a205c2]{display:flex;justify-content:space-between;align-items:center;width:84px;padding:16px;background:#fff;border:1px solid #d2d5da;border-radius:8px}@media screen and (min-width:360px)and (max-width:1024px){.select__title[data-v-07a205c2]{padding:16px 4px;justify-content:space-around}}.select__title>p[data-v-07a205c2]{font-weight:400;font-size:12px;line-height:15px;color:#6c727f}.select__name[data-v-07a205c2]{font-weight:700;font-size:14px;line-height:15px;color:#121826;background-color:#fff;padding:0 8px;position:absolute;top:-7px;left:12.15px}@media screen and (min-width:360px)and (max-width:1024px){.select__name[data-v-07a205c2]{font-size:12px}}.select__options[data-v-07a205c2]{position:absolute;width:100%;overflow-y:scroll;max-height:100px}.select__options-list[data-v-07a205c2]{display:flex;justify-content:center}.select__options-item[data-v-07a205c2]{border:1px solid #6c727f;border-top:none;width:80%;background-color:#fff;transition:all .3s}.select__options-item[data-v-07a205c2]:hover{background-color:#e5e5e5;transition:all .3s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VRewards.vue?vue&type=template&id=4704a512&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "reward"
  }, [_vm._ssrNode("<div class=\"reward__product-rewards\" data-v-4704a512><p data-v-4704a512> Exclusive access to <span data-v-4704a512>350+ </span>learning programs</p><p data-v-4704a512>Personalized course plan</p><p data-v-4704a512>Comfy learning schedule made by you</p><p data-v-4704a512><span data-v-4704a512>24/7 </span>tutor support in a secure chat</p><p data-v-4704a512>Lifetime access to materials</p><button class=\"reward__product-button\" data-v-4704a512>Safe &amp; secure payment</button><div class=\"reward__product-info\" data-v-4704a512><p data-v-4704a512>$0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By continuing, you indicate that you've read and agree to our Terms &amp; Conditions, Privacy Policy , Money Back , and Subscription Terms .</p></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VRewards.vue?vue&type=template&id=4704a512&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VRewards.vue?vue&type=script&lang=js&
/* harmony default export */ var VRewardsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/VRewards.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VRewardsvue_type_script_lang_js_ = (VRewardsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VRewards.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VRewardsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4704a512",
  "54d6a7ec"
  
)

/* harmony default export */ var VRewards = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VTimer.vue?vue&type=template&id=3ebe0d28&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "timer"
  }, [_vm._ssrNode("<div class=\"timer__time\" data-v-3ebe0d28><p data-v-3ebe0d28>" + _vm._ssrEscape("0" + _vm._s(_vm.minutes)) + "</p><span data-v-3ebe0d28>:</span><p data-v-3ebe0d28><span" + _vm._ssrClass(null, {
    'sec': _vm.isLowSec
  }) + " data-v-3ebe0d28>0</span>" + _vm._ssrEscape(_vm._s(_vm.seconds)) + "</p></div><div" + _vm._ssrClass("timer__wrapper", {
    'low': _vm.isLow
  }) + " data-v-3ebe0d28><div class=\"timer__bar\" data-v-3ebe0d28></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VTimer.vue?vue&type=template&id=3ebe0d28&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VTimer.vue?vue&type=script&lang=js&
/* harmony default export */ var VTimervue_type_script_lang_js_ = ({
  data() {
    return {
      time: 180,
      interval: 180,
      isLow: false,
      isLowSec: false,
      totalTime: 180,
      minutes: 0,
      seconds: 0
    };
  },
  methods: {
    start() {
      let countDown = setInterval(() => {
        this.minutes = Math.floor(this.totalTime / 60);
        this.seconds = this.totalTime - this.minutes * 60;
        this.totalTime--;
        this.interval--;
        let progressWith = this.interval / this.time * 100;
        if (this.interval > 0) {
          this.$refs.bar.style.width = progressWith + "%";
        } else {
          clearInterval(countDown);
          this.$refs.bar.style = "width: 0%";
        }
      }, 1000);
    }
  },
  watch: {
    interval() {
      if (this.interval < 11) {
        this.isLow = true;
      }
    },
    seconds() {
      if (this.seconds > 9) {
        this.isLowSec = true;
        console.log(this.seconds);
      } else {
        this.isLowSec = false;
      }
    }
  },
  mounted() {
    this.start();
  }
});
// CONCATENATED MODULE: ./components/VTimer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VTimervue_type_script_lang_js_ = (VTimervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VTimer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VTimervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3ebe0d28",
  "ce0841aa"
  
)

/* harmony default export */ var VTimer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b159bd70", content, true, context)
};

/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VRewards_vue_vue_type_style_index_0_id_4704a512_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VRewards_vue_vue_type_style_index_0_id_4704a512_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VRewards_vue_vue_type_style_index_0_id_4704a512_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VRewards_vue_vue_type_style_index_0_id_4704a512_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VRewards_vue_vue_type_style_index_0_id_4704a512_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(43);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".reward[data-v-4704a512]{padding:0}.reward__product-rewards[data-v-4704a512]{margin-top:24px;width:100%}.reward__product-rewards>p[data-v-4704a512]{padding-left:34px;margin-bottom:24px;font-weight:400;font-size:16px;line-height:120%;position:relative}.reward__product-rewards>p>span[data-v-4704a512]{color:#ff8d24;font-weight:700}.reward__product-rewards>p[data-v-4704a512]:before{display:block;content:\"\";position:absolute;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");width:24px;height:24px;left:0;top:50%;transform:translateY(-50%)}.reward__product-button[data-v-4704a512]{width:100%;height:56px;background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:12px;transition:all .3s;font-weight:500;font-size:16px;line-height:16px;color:#01c120;padding-left:45px;margin:8px 0;position:relative}.reward__product-button[data-v-4704a512]:before{position:absolute;display:block;content:\"\";background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");width:24px;height:24px;left:29%;top:50%;transform:translateY(-50%)}@media screen and (min-width:360px)and (max-width:1024px){.reward__product-button[data-v-4704a512]:before{left:20%}}@media screen and (min-width:360px)and (max-width:1024px){.reward__product-button[data-v-4704a512]{width:100%}}.reward__product-info[data-v-4704a512]{margin-top:24px}.reward__product-info>p[data-v-4704a512]{font-weight:400;font-size:12px;line-height:120%;text-align:center;opacity:.5}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjE1MzEgMS4zNDg5QzExLjU0NTEgMC43MjQ1NDggMTIuNDU0OSAwLjcyNDU0OCAxMi44NDY5IDEuMzQ4OUwxNS44MjgxIDYuMDk3MTNDMTUuOTY1MSA2LjMxNTM4IDE2LjE4MTEgNi40NzIzIDE2LjQzMSA2LjUzNTE3TDIxLjg2ODEgNy45MDMxN0MyMi41ODMgOC4wODMwNSAyMi44NjQyIDguOTQ4MzQgMjIuMzkxNSA5LjUxNDA5TDE4Ljc5NjkgMTMuODE2N0MxOC42MzE3IDE0LjAxNDQgMTguNTQ5MiAxNC4yNjgzIDE4LjU2NjYgMTQuNTI1NEwxOC45NDU3IDIwLjExOTFDMTguOTk1NiAyMC44NTQ2IDE4LjI1OTUgMjEuMzg5NCAxNy41NzU0IDIxLjExNDdMMTIuMzcyNiAxOS4wMjU2QzEyLjEzMzUgMTguOTI5NiAxMS44NjY1IDE4LjkyOTYgMTEuNjI3NCAxOS4wMjU2TDYuNDI0NjEgMjEuMTE0N0M1Ljc0MDQ4IDIxLjM4OTQgNS4wMDQ0MyAyMC44NTQ2IDUuMDU0MjggMjAuMTE5MUw1LjQzMzM4IDE0LjUyNTRDNS40NTA4MSAxNC4yNjgzIDUuMzY4MzEgMTQuMDE0NCA1LjIwMzA5IDEzLjgxNjdMMS42MDg0OSA5LjUxNDA5QzEuMTM1ODMgOC45NDgzNCAxLjQxNjk4IDguMDgzMDUgMi4xMzE5MSA3LjkwMzE3TDcuNTY4OTkgNi41MzUxN0M3LjgxODg5IDYuNDcyMyA4LjAzNDg4IDYuMzE1MzggOC4xNzE5IDYuMDk3MTNMMTEuMTUzMSAxLjM0ODlaIiBmaWxsPSIjRkY4RDI0Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lock.77a8328.svg";

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTimer_vue_vue_type_style_index_0_id_3ebe0d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTimer_vue_vue_type_style_index_0_id_3ebe0d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTimer_vue_vue_type_style_index_0_id_3ebe0d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTimer_vue_vue_type_style_index_0_id_3ebe0d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTimer_vue_vue_type_style_index_0_id_3ebe0d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".timer[data-v-3ebe0d28]{position:relative}.timer__time[data-v-3ebe0d28]{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.timer__time>p[data-v-3ebe0d28]{padding:2px}.timer__time>p[data-v-3ebe0d28],.timer__time>span[data-v-3ebe0d28]{color:#fff;font-weight:600;font-size:24px;line-height:140%}.timer__wrapper[data-v-3ebe0d28]{width:160px;height:60px;border-radius:12px;background:#000}@media screen and (min-width:360px)and (max-width:1024px){.timer__wrapper[data-v-3ebe0d28]{width:105px;height:47px}}.timer__bar[data-v-3ebe0d28]{width:160px;height:60px;border-radius:11px;background:#00ca14;display:flex;align-items:center;transition:width .3s ease-out}@media screen and (min-width:360px)and (max-width:1024px){.timer__bar[data-v-3ebe0d28]{width:105px;height:47px}}.low[data-v-3ebe0d28]{border:2px solid red;border-radius:13px;box-shadow:2px;box-shadow:0 0 15px 2px red}.sec[data-v-3ebe0d28]{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("36924abf", content, true, context)
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTYiIGZpbGw9IiNGRjg0MkIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC44NzQgMjUuMzU1OEMzMC4zMDkgMjMuNzg3NiAzNy41MDA5IDE5LjcxNDQgMzYuOTM3NSAxNi4yNTgxQzM2Ljg2NjcgMTUuODIzMyAzNi42NzY0IDE1LjQxOSAzNi4zNzkyIDE1LjA0NzVDMzcuNzk5IDE1Ljc1NDMgMzguNjgyNSAxNi42NzEzIDM4Ljg2MTEgMTcuNzY3NEMzOS40NzYxIDIxLjU0MDIgMzEuNTA2NSAyNi4wMDYzIDIxLjA2MDcgMjcuNzQyNUMxMC42MTQ4IDI5LjQ3ODcgMS42NDgyNyAyNy44Mjc3IDEuMDMzMzIgMjQuMDU0OUMwLjgyMzg0NiAyMi43Njk2IDEuNjEwNSAyMS40MDQgMy4xNTE4NSAyMC4wOTMyQzIuODA5MjQgMjAuNzE1NiAyLjY3MjQyIDIxLjMzNTcgMi43NzA0NSAyMS45MzcyQzMuMzMzNzkgMjUuMzkzNCAxMS40MzkgMjYuOTI0IDIwLjg3NCAyNS4zNTU4WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_394f595d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_394f595d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_394f595d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_394f595d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_394f595d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header[data-v-394f595d]{display:flex}.header__logo[data-v-394f595d]{display:flex;justify-content:center;align-items:center;text-decoration:none}.header__logo-text[data-v-394f595d]{color:#ff842b;font-weight:700;font-size:24px;line-height:29px;margin-left:8px}.header__logo-text>span[data-v-394f595d]{color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/PayPal.d07553a.svg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/googlePay.fdb1b76.svg";

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VPopup_vue_vue_type_style_index_0_id_15e69975_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VPopup_vue_vue_type_style_index_0_id_15e69975_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VPopup_vue_vue_type_style_index_0_id_15e69975_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VPopup_vue_vue_type_style_index_0_id_15e69975_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VPopup_vue_vue_type_style_index_0_id_15e69975_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 53 */
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mastercard.6769281.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/asteroid.2962a7e.svg";

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHero_vue_vue_type_style_index_0_id_e4350e9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHero_vue_vue_type_style_index_0_id_e4350e9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHero_vue_vue_type_style_index_0_id_e4350e9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHero_vue_vue_type_style_index_0_id_e4350e9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHero_vue_vue_type_style_index_0_id_e4350e9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main[data-v-e4350e9a]{padding:70px 100px;display:flex;justify-content:center}@media screen and (min-width:360px)and (max-width:1024px){.main[data-v-e4350e9a]{flex-direction:column-reverse;padding:0}}.main__offer[data-v-e4350e9a]{max-width:473px;padding-top:15px}.main__offer-title[data-v-e4350e9a]{font-weight:800;font-size:48px;line-height:120%}@media screen and (min-width:360px)and (max-width:1024px){.main__offer-title[data-v-e4350e9a]{font-size:32px}}.main__offer-description[data-v-e4350e9a]{font-weight:600;font-size:24px;line-height:120%;margin-top:24px;max-width:375px}.main__offer-description>span[data-v-e4350e9a]{font-weight:800}.main__offer-description>span[data-v-e4350e9a]:first-child{color:#ff8d24}@media screen and (min-width:360px)and (max-width:1024px){.main__offer-description[data-v-e4350e9a]{font-size:24px}}.main__offer-button[data-v-e4350e9a]{margin-top:23px;width:273px;height:56px;background:#000;border-radius:12px;padding:16px 40px;color:#fff;font-weight:700;font-size:16px;line-height:120%;border:none;cursor:pointer;transition:all .3s}.main__offer-button[data-v-e4350e9a]:hover{transition:all .3s;background-color:#00ca14}@media screen and (min-width:360px)and (max-width:1024px){.main__offer-button[data-v-e4350e9a]{width:100%}}.main__product[data-v-e4350e9a]{display:flex;flex-direction:column;align-items:center;padding:24px;width:50%;background:#fff;border:1px solid #cdcdcd;box-shadow:0 4px 4px rgba(0,0,0,.06);border-radius:24px;position:relative}@media screen and (min-width:360px)and (max-width:1024px){.main__product[data-v-e4350e9a]{width:100%;padding:0;margin:32px 0 24px}}.main__product-asteroid[data-v-e4350e9a]{position:absolute;left:53.3%;top:-56px}@media screen and (min-width:360px)and (max-width:1024px){.main__product-asteroid[data-v-e4350e9a]{display:none}}.main__product-rewards[data-v-e4350e9a]:first-child{display:none}@media screen and (min-width:360px)and (max-width:1024px){.main__product-rewards[data-v-e4350e9a]:first-child{display:block}}@media screen and (min-width:360px)and (max-width:1024px){.main__product-rewards[data-v-e4350e9a]:last-child{display:none;padding:12px 14px}}.main__action[data-v-e4350e9a]{width:100%;display:flex;justify-content:space-between;align-items:center}.main__action-price[data-v-e4350e9a]{min-height:85px}.main__action-price>p[data-v-e4350e9a]{font-weight:800;font-size:24px;line-height:120%;color:#000}.main__action-price>p>span[data-v-e4350e9a]{color:#ff8d24}.main__action-price>p[data-v-e4350e9a]:nth-child(2){font-weight:600;font-size:20px;line-height:120%;margin-top:8px}@media screen and (min-width:360px)and (max-width:1024px){.main__action-price>p[data-v-e4350e9a]:nth-child(2){font-size:16px}}.main__action-price>p[data-v-e4350e9a]:nth-child(3){font-weight:600;font-size:20px;line-height:120%;margin-top:8px}@media screen and (min-width:360px)and (max-width:1024px){.main__action-price>p[data-v-e4350e9a]:nth-child(3){font-size:16px}}.main__action-price>p[data-v-e4350e9a]:last-child{-webkit-text-decoration-line:line-through;text-decoration-line:line-through;opacity:.4;font-weight:600;font-size:16px;line-height:140%}@media screen and (min-width:360px)and (max-width:1024px){.main__action-price>p[data-v-e4350e9a]:last-child{font-size:14px}}@media screen and (min-width:360px)and (max-width:1024px){.main__action-price>p[data-v-e4350e9a]{font-size:18px}}@media screen and (min-width:360px)and (max-width:1024px){.main__action-price[data-v-e4350e9a]{padding:12px 14px;min-height:70px}}@media screen and (min-width:360px)and (max-width:1024px){.main__action-timer[data-v-e4350e9a]{padding-right:14px}}.main .end-action[data-v-e4350e9a]{display:none}@media screen and (min-width:360px)and (max-width:1024px){.main .end-action-price[data-v-e4350e9a]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VHeader.vue?vue&type=template&id=394f595d&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "header"
  }, [_c('n-link', {
    staticClass: "header__logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "header__logo-image",
    attrs: {
      "src": __webpack_require__(47),
      "alt": "Logo PlanetLearn"
    }
  }), _c('p', {
    staticClass: "header__logo-text"
  }, [_vm._v("Planet"), _c('span', [_vm._v("Learn")])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VHeader.vue?vue&type=template&id=394f595d&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VHeader.vue?vue&type=script&lang=js&
/* harmony default export */ var VHeadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/VHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VHeadervue_type_script_lang_js_ = (VHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "394f595d",
  "c8119ed2"
  
)

/* harmony default export */ var VHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 59 */
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


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VHero.vue?vue&type=template&id=e4350e9a&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main"
  }, [_vm._ssrNode("<div class=\"main__product-rewards\" data-v-e4350e9a>", "</div>", [_c('VRewards')], 1), _vm._ssrNode("<div class=\"main__offer\" data-v-e4350e9a><p class=\"main__offer-title\" data-v-e4350e9a>Start your learning journey now</p><p class=\"main__offer-description\" data-v-e4350e9a> Get a <span class=\"colored\" data-v-e4350e9a> Planet</span><span data-v-e4350e9a>Learn </span>plan to rock self-learning</p><button class=\"main__offer-button\" data-v-e4350e9a>Get my plan</button></div>"), _vm._ssrNode("<div class=\"main__product\" data-v-e4350e9a>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", __webpack_require__(55)) + " alt=\"Image asteroid\" class=\"main__product-asteroid\" data-v-e4350e9a>"), _vm._ssrNode("<div" + _vm._ssrClass("main__action", {
    'end-action-price': _vm.timeOut
  }) + " data-v-e4350e9a>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("main__action-price", {
    'end-action-price': _vm.timeOut
  }) + " data-v-e4350e9a><p data-v-e4350e9a>3-day trial for <span data-v-e4350e9a>$0.99</span></p><p" + _vm._ssrClass(null, {
    'end-action': _vm.timeOut
  }) + " data-v-e4350e9a>Then $9.99</p><p" + _vm._ssrClass(null, {
    'end-action': !_vm.timeOut
  }) + " data-v-e4350e9a>Then $39.99/week</p><p" + _vm._ssrClass(null, {
    'end-action': _vm.timeOut
  }) + " data-v-e4350e9a>$39.99/week</p></div>"), _vm._ssrNode("<div class=\"main__action-timer\" data-v-e4350e9a>", "</div>", [_c('VTimer', {
    class: {
      'end-action': _vm.timeOut
    }
  })], 1)], 2), _vm._ssrNode("<div class=\"main__product-rewards\" data-v-e4350e9a>", "</div>", [_c('VRewards')], 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VHero.vue?vue&type=template&id=e4350e9a&scoped=true&lang=pug&

// EXTERNAL MODULE: ./components/VRewards.vue + 4 modules
var VRewards = __webpack_require__(36);

// EXTERNAL MODULE: ./components/VTimer.vue + 4 modules
var VTimer = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VHero.vue?vue&type=script&lang=js&


/* harmony default export */ var VHerovue_type_script_lang_js_ = ({
  components: {
    VRewards: VRewards["default"],
    VTimer: VTimer["default"]
  },
  data() {
    return {
      timeOut: false
    };
  },
  methods: {
    showModal() {
      document.querySelector("body").style = "overflow-y: hidden";
      this.$store.dispatch("popup/toggle");
    }
  },
  mounted() {
    setTimeout(() => {
      this.timeOut = true;
    }, 180000);
  }
});
// CONCATENATED MODULE: ./components/VHero.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VHerovue_type_script_lang_js_ = (VHerovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VHero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VHerovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e4350e9a",
  "71cb17f8"
  
)

/* harmony default export */ var VHero = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VRewards: __webpack_require__(36).default,VTimer: __webpack_require__(37).default})


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("69ac3673", content, true, context)
};

/***/ }),
/* 62 */,
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_038610d8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_038610d8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_038610d8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_038610d8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_038610d8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page[data-v-038610d8]{background-color:hsla(0,0%,100%,.95);background-size:cover;height:-moz-max-content;height:max-content;min-height:100vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=038610d8&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page"
  }, [_vm._ssrNode("<div class=\"container\" data-v-038610d8>", "</div>", [_c('VHeader'), _c('VHero'), _c('VPopup')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=038610d8&scoped=true&lang=pug&

// EXTERNAL MODULE: ./components/VHeader.vue + 4 modules
var VHeader = __webpack_require__(58);

// EXTERNAL MODULE: ./components/VPopup.vue + 4 modules
var VPopup = __webpack_require__(59);

// EXTERNAL MODULE: ./components/VHero.vue + 4 modules
var VHero = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    VHeader: VHeader["default"],
    VHero: VHero["default"],
    VPopup: VPopup["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "038610d8",
  "70bc6dec"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VHeader: __webpack_require__(58).default,VHero: __webpack_require__(60).default,VPopup: __webpack_require__(59).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map