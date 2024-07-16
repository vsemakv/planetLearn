exports.ids = [7];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=v-timer.js.map