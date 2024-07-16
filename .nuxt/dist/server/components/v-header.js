exports.ids = [2];
exports.modules = {

/***/ 38:
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

/***/ 47:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTYiIGZpbGw9IiNGRjg0MkIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC44NzQgMjUuMzU1OEMzMC4zMDkgMjMuNzg3NiAzNy41MDA5IDE5LjcxNDQgMzYuOTM3NSAxNi4yNTgxQzM2Ljg2NjcgMTUuODIzMyAzNi42NzY0IDE1LjQxOSAzNi4zNzkyIDE1LjA0NzVDMzcuNzk5IDE1Ljc1NDMgMzguNjgyNSAxNi42NzEzIDM4Ljg2MTEgMTcuNzY3NEMzOS40NzYxIDIxLjU0MDIgMzEuNTA2NSAyNi4wMDYzIDIxLjA2MDcgMjcuNzQyNUMxMC42MTQ4IDI5LjQ3ODcgMS42NDgyNyAyNy44Mjc3IDEuMDMzMzIgMjQuMDU0OUMwLjgyMzg0NiAyMi43Njk2IDEuNjEwNSAyMS40MDQgMy4xNTE4NSAyMC4wOTMyQzIuODA5MjQgMjAuNzE1NiAyLjY3MjQyIDIxLjMzNTcgMi43NzA0NSAyMS45MzcyQzMuMzMzNzkgMjUuMzkzNCAxMS40MzkgMjYuOTI0IDIwLjg3NCAyNS4zNTU4WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_394f595d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_394f595d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_394f595d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_394f595d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VHeader_vue_vue_type_style_index_0_id_394f595d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header[data-v-394f595d]{display:flex}.header__logo[data-v-394f595d]{display:flex;justify-content:center;align-items:center;text-decoration:none}.header__logo-text[data-v-394f595d]{color:#ff842b;font-weight:700;font-size:24px;line-height:29px;margin-left:8px}.header__logo-text>span[data-v-394f595d]{color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
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

/***/ })

};;
//# sourceMappingURL=v-header.js.map