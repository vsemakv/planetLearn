exports.ids = [5];
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

/***/ })

};;
//# sourceMappingURL=v-rewards.js.map