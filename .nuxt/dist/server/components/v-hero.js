exports.ids = [3,5,7];
exports.modules = {

/***/ 31:
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

/***/ 32:
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

/***/ 36:
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

/***/ 37:
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VRewards_vue_vue_type_style_index_0_id_4704a512_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VRewards_vue_vue_type_style_index_0_id_4704a512_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VRewards_vue_vue_type_style_index_0_id_4704a512_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VRewards_vue_vue_type_style_index_0_id_4704a512_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VRewards_vue_vue_type_style_index_0_id_4704a512_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 41:
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

/***/ 42:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjE1MzEgMS4zNDg5QzExLjU0NTEgMC43MjQ1NDggMTIuNDU0OSAwLjcyNDU0OCAxMi44NDY5IDEuMzQ4OUwxNS44MjgxIDYuMDk3MTNDMTUuOTY1MSA2LjMxNTM4IDE2LjE4MTEgNi40NzIzIDE2LjQzMSA2LjUzNTE3TDIxLjg2ODEgNy45MDMxN0MyMi41ODMgOC4wODMwNSAyMi44NjQyIDguOTQ4MzQgMjIuMzkxNSA5LjUxNDA5TDE4Ljc5NjkgMTMuODE2N0MxOC42MzE3IDE0LjAxNDQgMTguNTQ5MiAxNC4yNjgzIDE4LjU2NjYgMTQuNTI1NEwxOC45NDU3IDIwLjExOTFDMTguOTk1NiAyMC44NTQ2IDE4LjI1OTUgMjEuMzg5NCAxNy41NzU0IDIxLjExNDdMMTIuMzcyNiAxOS4wMjU2QzEyLjEzMzUgMTguOTI5NiAxMS44NjY1IDE4LjkyOTYgMTEuNjI3NCAxOS4wMjU2TDYuNDI0NjEgMjEuMTE0N0M1Ljc0MDQ4IDIxLjM4OTQgNS4wMDQ0MyAyMC44NTQ2IDUuMDU0MjggMjAuMTE5MUw1LjQzMzM4IDE0LjUyNTRDNS40NTA4MSAxNC4yNjgzIDUuMzY4MzEgMTQuMDE0NCA1LjIwMzA5IDEzLjgxNjdMMS42MDg0OSA5LjUxNDA5QzEuMTM1ODMgOC45NDgzNCAxLjQxNjk4IDguMDgzMDUgMi4xMzE5MSA3LjkwMzE3TDcuNTY4OTkgNi41MzUxN0M3LjgxODg5IDYuNDcyMyA4LjAzNDg4IDYuMzE1MzggOC4xNzE5IDYuMDk3MTNMMTEuMTUzMSAxLjM0ODlaIiBmaWxsPSIjRkY4RDI0Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lock.77a8328.svg";

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTimer_vue_vue_type_style_index_0_id_3ebe0d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTimer_vue_vue_type_style_index_0_id_3ebe0d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTimer_vue_vue_type_style_index_0_id_3ebe0d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTimer_vue_vue_type_style_index_0_id_3ebe0d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTimer_vue_vue_type_style_index_0_id_3ebe0d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".timer[data-v-3ebe0d28]{position:relative}.timer__time[data-v-3ebe0d28]{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.timer__time>p[data-v-3ebe0d28]{padding:2px}.timer__time>p[data-v-3ebe0d28],.timer__time>span[data-v-3ebe0d28]{color:#fff;font-weight:600;font-size:24px;line-height:140%}.timer__wrapper[data-v-3ebe0d28]{width:160px;height:60px;border-radius:12px;background:#000}@media screen and (min-width:360px)and (max-width:1024px){.timer__wrapper[data-v-3ebe0d28]{width:105px;height:47px}}.timer__bar[data-v-3ebe0d28]{width:160px;height:60px;border-radius:11px;background:#00ca14;display:flex;align-items:center;transition:width .3s ease-out}@media screen and (min-width:360px)and (max-width:1024px){.timer__bar[data-v-3ebe0d28]{width:105px;height:47px}}.low[data-v-3ebe0d28]{border:2px solid red;border-radius:13px;box-shadow:2px;box-shadow:0 0 15px 2px red}.sec[data-v-3ebe0d28]{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 46:
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

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/asteroid.2962a7e.svg";

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHero_vue_vue_type_style_index_0_id_e4350e9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHero_vue_vue_type_style_index_0_id_e4350e9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHero_vue_vue_type_style_index_0_id_e4350e9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHero_vue_vue_type_style_index_0_id_e4350e9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHero_vue_vue_type_style_index_0_id_e4350e9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main[data-v-e4350e9a]{padding:70px 100px;display:flex;justify-content:center}@media screen and (min-width:360px)and (max-width:1024px){.main[data-v-e4350e9a]{flex-direction:column-reverse;padding:0}}.main__offer[data-v-e4350e9a]{max-width:473px;padding-top:15px}.main__offer-title[data-v-e4350e9a]{font-weight:800;font-size:48px;line-height:120%}@media screen and (min-width:360px)and (max-width:1024px){.main__offer-title[data-v-e4350e9a]{font-size:32px}}.main__offer-description[data-v-e4350e9a]{font-weight:600;font-size:24px;line-height:120%;margin-top:24px;max-width:375px}.main__offer-description>span[data-v-e4350e9a]{font-weight:800}.main__offer-description>span[data-v-e4350e9a]:first-child{color:#ff8d24}@media screen and (min-width:360px)and (max-width:1024px){.main__offer-description[data-v-e4350e9a]{font-size:24px}}.main__offer-button[data-v-e4350e9a]{margin-top:23px;width:273px;height:56px;background:#000;border-radius:12px;padding:16px 40px;color:#fff;font-weight:700;font-size:16px;line-height:120%;border:none;cursor:pointer;transition:all .3s}.main__offer-button[data-v-e4350e9a]:hover{transition:all .3s;background-color:#00ca14}@media screen and (min-width:360px)and (max-width:1024px){.main__offer-button[data-v-e4350e9a]{width:100%}}.main__product[data-v-e4350e9a]{display:flex;flex-direction:column;align-items:center;padding:24px;width:50%;background:#fff;border:1px solid #cdcdcd;box-shadow:0 4px 4px rgba(0,0,0,.06);border-radius:24px;position:relative}@media screen and (min-width:360px)and (max-width:1024px){.main__product[data-v-e4350e9a]{width:100%;padding:0;margin:32px 0 24px}}.main__product-asteroid[data-v-e4350e9a]{position:absolute;left:53.3%;top:-56px}@media screen and (min-width:360px)and (max-width:1024px){.main__product-asteroid[data-v-e4350e9a]{display:none}}.main__product-rewards[data-v-e4350e9a]:first-child{display:none}@media screen and (min-width:360px)and (max-width:1024px){.main__product-rewards[data-v-e4350e9a]:first-child{display:block}}@media screen and (min-width:360px)and (max-width:1024px){.main__product-rewards[data-v-e4350e9a]:last-child{display:none;padding:12px 14px}}.main__action[data-v-e4350e9a]{width:100%;display:flex;justify-content:space-between;align-items:center}.main__action-price[data-v-e4350e9a]{min-height:85px}.main__action-price>p[data-v-e4350e9a]{font-weight:800;font-size:24px;line-height:120%;color:#000}.main__action-price>p>span[data-v-e4350e9a]{color:#ff8d24}.main__action-price>p[data-v-e4350e9a]:nth-child(2){font-weight:600;font-size:20px;line-height:120%;margin-top:8px}@media screen and (min-width:360px)and (max-width:1024px){.main__action-price>p[data-v-e4350e9a]:nth-child(2){font-size:16px}}.main__action-price>p[data-v-e4350e9a]:nth-child(3){font-weight:600;font-size:20px;line-height:120%;margin-top:8px}@media screen and (min-width:360px)and (max-width:1024px){.main__action-price>p[data-v-e4350e9a]:nth-child(3){font-size:16px}}.main__action-price>p[data-v-e4350e9a]:last-child{-webkit-text-decoration-line:line-through;text-decoration-line:line-through;opacity:.4;font-weight:600;font-size:16px;line-height:140%}@media screen and (min-width:360px)and (max-width:1024px){.main__action-price>p[data-v-e4350e9a]:last-child{font-size:14px}}@media screen and (min-width:360px)and (max-width:1024px){.main__action-price>p[data-v-e4350e9a]{font-size:18px}}@media screen and (min-width:360px)and (max-width:1024px){.main__action-price[data-v-e4350e9a]{padding:12px 14px;min-height:70px}}@media screen and (min-width:360px)and (max-width:1024px){.main__action-timer[data-v-e4350e9a]{padding-right:14px}}.main .end-action[data-v-e4350e9a]{display:none}@media screen and (min-width:360px)and (max-width:1024px){.main .end-action-price[data-v-e4350e9a]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 60:
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


/***/ })

};;
//# sourceMappingURL=v-hero.js.map