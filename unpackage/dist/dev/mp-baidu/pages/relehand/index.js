(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/relehand/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/handone_shiliucrm/handonewework/components/input-box/input-box.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























var _verification = _interopRequireDefault(__webpack_require__(/*! ./verification.js */ "E:\\handone_shiliucrm\\handonewework\\components\\input-box\\verification.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { props: { //自定义传入的 class ，自定义样式
    set: { type: String, default: '' }, //input 类型,默认 text
    type: { type: String, default: '' }, // input字数限制
    maxLength: { type: String, default: '100' }, // 组件对于上方的间距
    maTop: { type: String, default: '0' }, // 组件对于下方的间距
    maBtm: { type: String, default: '0' }, //输入框默认值
    inputValue: { type: String, default: '' }, //是否禁用
    disabled: { default: false }, // input placeholder 提示文字
    placeholder: {
      type: String,
      default: '请输入内容' },

    // input 校验
    verification: {
      type: Array,
      default: null },

    // input 校验提示语
    verificationTip: {
      type: Array,
      default: null },

    // input左边的文字
    leftText: {
      type: String,
      default: '' },

    // input左边自定义的样式
    leftClass: {
      type: String,
      default: '' },

    // input右边的文字
    rightText: {
      type: String,
      default: '' },

    // input右边自定义的样式
    rightClass: {
      type: String,
      default: '' },

    //是否显示清除按钮,默认显示
    clearShow: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      value: this.inputValue,
      marginTop: parseFloat(this.maTop) / 375 * 750 + 'rpx',
      marginBottom: parseFloat(this.maBtm) / 375 * 750 + 'rpx',
      isShowEye: false //是否显示密码
    };
  },
  mounted: function mounted() {
    console.log(_verification.default);
  },
  methods: {
    /**
             * @desc 密码显隐操作
             */
    passwordClick: function passwordClick() {
      this.isShowEye = !this.isShowEye;
    },
    /**
        * @desc 左边点击事件
        */
    leftClick: function leftClick() {
      //传值到父组件和父组件双向绑定
      this.$emit('leftClick', this.value);
    },
    /**
        * @desc 右边点击事件
        */
    rightClick: function rightClick() {
      //传值到父组件和父组件双向绑定
      this.$emit('rightClick', this.value);
    },
    /**
       * @desc 监听输入框的值
       */
    keyInput: function keyInput(event) {
      var value = event.detail.value;
      this.value = value;
      //传值到父组件和父组件双向绑定
      this.$emit('input', this.value);
    },
    /**
        * @desc 清楚输入框的值
        */
    clear: function clear(flag) {
      console.log('点击了清除');
      this.value = '';
      // 双向绑定到父组件（双向绑定，不能弹出提示）
      this.$emit('input', this.value);
    },
    /**
        * @param 获取带校验的输入框的值
        */
    /**
           * @name:获取输入框的值
           * @return value || undefined
           */
    getValue: function getValue(flag) {
      if (!flag) {
        // 判断是否有校验
        if (this.verification && this.verification.length > 0) {
          for (var i = 0; i < this.verification.length; i++) {
            // 获取校验的名称
            var verificationName = this.verification[i];
            // 判断校验是否正确
            var verificationResult = _verification.default.verificationFuc({ name: verificationName, value: this.value });
            if (!verificationResult.flag) {
              // 弹出错误信息
              // 判断有没有自定义的弹出信息
              if (this.verificationTip && this.verificationTip[i]) {
                uni.showToast({
                  icon: 'none',
                  title: this.verificationTip[i] || ''



                  // mask: true
                });
              } else {
                // 弹出方法自带的提示语
                uni.showToast({
                  icon: 'none',
                  title: verificationResult.tip || ''



                  // mask: true
                });
              }
              return '';
            }
          }
        }
      }
      return this.value || '';
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ "./node_modules/@dcloudio/uni-mp-baidu/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/handone_shiliucrm/handonewework/pages/relehand/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












var _inputBox = _interopRequireDefault(__webpack_require__(/*! @/components/input-box/input-box */ "E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { inputBox: _inputBox.default }, data: function data() {return { username: '', password: '', userid: '', corpid: '' };},
  methods: {
    submit: function submit() {
      console.log(this.username);
      console.log(this.password);
      uni.request({
        url: 'https://testapi.shiliucrm.com/v2/user/user/qywxbinding',
        method: 'POST',
        data: {
          user_name: this.username,
          password: this.password,
          cropid: this.cropid,
          userid: this.userid },

        header: {
          'content-type': 'application/x-www-form-urlencoded' },

        success: function success(res) {
          console.log(res);
        } });


    },
    onerification: function onerification() {
      if (this.$refs.input1.getValue() && this.$refs.input2.getValue()) {
        uni.showToast({
          icon: 'none',
          title: '校验通过'



          // mask: true
        });
      }
    } },

  onLoad: function onLoad() {
    var list = uni.getStorageSync('login');
    if (list) {
      this.userid = list.userid;
      this.corpid = list.corpid;
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ "./node_modules/@dcloudio/uni-mp-baidu/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!E:/handone_shiliucrm/handonewework/components/input-box/input-box.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/handone_shiliucrm/handonewework/pages/relehand/index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=template&id=b906dd0c&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/handone_shiliucrm/handonewework/components/input-box/input-box.vue?vue&type=template&id=b906dd0c& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: "input-box-all",
      class: _vm.set,
      style: { marginTop: _vm.marginTop, marginBottom: _vm.marginBottom },
      attrs: { _hid: 0 }
    },
    [
      _c(
        "view",
        { staticClass: "input-box align-items flex", attrs: { _hid: 1 } },
        [
          _vm._ri(!!(_vm.leftText || _vm.leftClass), 2)
            ? _c(
                "view",
                {
                  staticClass: "input-box-left left",
                  class: _vm.leftClass,
                  attrs: { _hid: 2 },
                  on: { click: _vm.leftClick }
                },
                [
                  _vm._ri(!!_vm.leftText, 3)
                    ? _c("text", { attrs: { _hid: 3 } }, [
                        _vm._v(_vm._s(_vm.leftText), 4)
                      ])
                    : _vm._e()
                ]
              )
            : _vm._e(),
          _vm._ri(!!(_vm.type === "password"), 5)
            ? _c(
                "view",
                { staticClass: "input-box-center", attrs: { _hid: 5 } },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isShowEye,
                        expression: "isShowEye"
                      }
                    ],
                    staticClass: "input-box-center-text",
                    attrs: {
                      placeholder: _vm.placeholder,
                      disabled: _vm.disabled,
                      value: _vm.value,
                      type: "text",
                      maxlength: _vm.maxLength,
                      _hid: 6,
                      _batrs: "placeholder,disabled,value,maxlength"
                    },
                    on: { input: _vm.keyInput }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isShowEye,
                        expression: "!isShowEye"
                      }
                    ],
                    staticClass: "input-box-center-text",
                    attrs: {
                      placeholder: _vm.placeholder,
                      disabled: _vm.disabled,
                      value: _vm.value,
                      type: "password",
                      password: true,
                      maxlength: _vm.maxLength,
                      _hid: 7,
                      _batrs: "placeholder,disabled,value,password,maxlength"
                    },
                    on: { input: _vm.keyInput }
                  })
                ]
              )
            : _c(
                "view",
                { staticClass: "input-box-center", attrs: { _hid: 8 } },
                [
                  _c("input", {
                    staticClass: "input-box-center-text",
                    attrs: {
                      placeholder: _vm.placeholder,
                      disabled: _vm.disabled,
                      value: _vm.value,
                      type: _vm.type,
                      maxlength: _vm.maxLength,
                      _hid: 9,
                      _batrs: "placeholder,disabled,value,type,maxlength"
                    },
                    on: { input: _vm.keyInput }
                  })
                ]
              ),
          _c(
            "view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.clearShow && _vm.value,
                  expression: "clearShow && value"
                }
              ],
              staticClass: "input-box-clear",
              attrs: { _hid: 10 },
              on: { click: _vm.clear }
            },
            []
          ),
          _vm._ri(!!(_vm.type === "password"), 12)
            ? _c("view", {
                staticClass: "left password-control",
                class: _vm.isShowEye ? "show" : "hide",
                attrs: { _hid: 12 },
                on: { click: _vm.passwordClick }
              })
            : _vm._e(),
          _vm._ri(!!(_vm.rightText || _vm.rightClass), 13)
            ? _c(
                "view",
                {
                  staticClass: "input-box-right right",
                  class: _vm.rightClass,
                  attrs: { _hid: 13 },
                  on: { click: _vm.rightClick }
                },
                [
                  _vm._ri(!!_vm.rightText, 14)
                    ? _c("text", { attrs: { _hid: 14 } }, [
                        _vm._v(_vm._s(_vm.rightText), 15)
                      ])
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=template&id=5693497b&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/handone_shiliucrm/handonewework/pages/relehand/index.vue?vue&type=template&id=5693497b& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "content", attrs: { _hid: 0 } },
    [
      _c("input-box", {
        ref: "input1",
        attrs: {
          verification: ["isNull", "isPhoneNum"],
          verificationTip: ["手机号码不能为空", "请输入正确的手机号"],
          placeholder: "请输入手机号码",
          maBtm: "10",
          maxLength: "11",
          _hid: 1,
          _batrs: "verification,verificationTip",
          _cid: 0
        },
        model: {
          value: _vm.username,
          callback: function($$v) {
            _vm.username = $$v
          },
          expression: "username"
        }
      }),
      _c("input-box", {
        ref: "input2",
        attrs: {
          type: "password",
          verification: ["isNull", "isChineseEnlishAndNumber"],
          verificationTip: ["密码不能为空", ""],
          placeholder: "请输入密码",
          maBtm: "10",
          _hid: 1003,
          _batrs: "verification,verificationTip",
          _cid: 1
        },
        model: {
          value: _vm.password,
          callback: function($$v) {
            _vm.password = $$v
          },
          expression: "password"
        }
      }),
      _c(
        "view",
        { staticClass: "btn", attrs: { _hid: 2005 } },
        [
          _c(
            "button",
            { attrs: { type: "warn", _hid: 2006 }, on: { click: _vm.submit } },
            []
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue":
/*!*****************************************************************************!*\
  !*** E:/handone_shiliucrm/handonewework/components/input-box/input-box.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_box_vue_vue_type_template_id_b906dd0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-box.vue?vue&type=template&id=b906dd0c& */ "E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=template&id=b906dd0c&");
/* harmony import */ var _input_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-box.vue?vue&type=script&lang=js& */ "E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _input_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _input_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _input_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-box.vue?vue&type=style&index=0&lang=scss& */ "E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _input_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _input_box_vue_vue_type_template_id_b906dd0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _input_box_vue_vue_type_template_id_b906dd0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/handone_shiliucrm/handonewework/components/input-box/input-box.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** E:/handone_shiliucrm/handonewework/components/input-box/input-box.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./input-box.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=script&lang=js&");
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** E:/handone_shiliucrm/handonewework/components/input-box/input-box.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./input-box.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=template&id=b906dd0c&":
/*!************************************************************************************************************!*\
  !*** E:/handone_shiliucrm/handonewework/components/input-box/input-box.vue?vue&type=template&id=b906dd0c& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_template_id_b906dd0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./input-box.vue?vue&type=template&id=b906dd0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\components\\input-box\\input-box.vue?vue&type=template&id=b906dd0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_template_id_b906dd0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_input_box_vue_vue_type_template_id_b906dd0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "E:\\handone_shiliucrm\\handonewework\\components\\input-box\\verification.js":
/*!*******************************************************************************!*\
  !*** E:/handone_shiliucrm/handonewework/components/input-box/verification.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 输入框校验
var verification = {
  // 校验的正则和提示语
  verificationReg: {
    'isNull': {
      tip: '此项不能为空',
      reg: /(^\s*)|(\s*$)/g },

    // 校验验证码
    'code': {
      tip: '请输入正确的验证码',
      reg: /^\d{6}$/ },

    'isPhoneNum': {
      tip: '请输入正确的手机号码',
      reg: /^(1[0-9])\d{9}$/ },

    // 校验密码(由6-16数字和字母组成)
    'isPassWord': {
      tip: '请输入(6-16位)数字和字母组成',
      reg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/ },

    // 校验正整数
    'isInt': {
      tip: '请输入正确的数字',
      reg: /^([1-9][0-9]*){1,3}$/ },

    // 校验金额
    'isMoney': {
      tip: '请输入正确的金额',
      // reg: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
      reg: /^\d{1,8}(\.\d{1,2})?$/ },

    // 校验数字和字母
    'isEnlishAndNumber': {
      tip: '请输入数字和字母',
      reg: /^[A-Za-z0-9]*$/ },

    // 校验中文数字和字母
    'isChineseEnlishAndNumber': {
      tip: '只能输入中文、数字和字母',
      reg: /^[A-Za-z0-9\u4e00-\u9fa5]+$/ },

    // 校验中文和字母
    'isChineseAndEnlish': {
      tip: '只能输入中文和字母',
      reg: /^[A-Za-z\u4e00-\u9fa5]+$/ },

    // 汉字,数字,字母,下划线
    'isEnCnUnderline': {
      tip: '只能输入中文、字母、数字和下划线',
      reg: /^[A-Za-z0-9\u4e00-\u9fa5a-zA-Z_]{4,8}$/ } },


  /**
                                                          * @name:输入框校验方法
                                                          * @param {name} 校验的正则和提示语名称
                                                          * @param {value} 输入框的值
                                                          */
  verificationFuc: function verificationFuc(param) {
    // 获取提示语
    var tip = verification.verificationReg[param.name].tip;
    // 获取正则
    var reg = verification.verificationReg[param.name].reg;
    // 获取输入框的值
    var value = param.value || '';

    var res = {
      flag: false,
      tip: tip };

    var val = value ? reg.test(value) : false;
    if (param.name === 'isNull') {
      res.flag = val ? val.toString().length > 0 : false;
    } else {
      res.flag = val || false;
    }

    return res;
  } };var _default =

verification;exports.default = _default;

/***/ }),

/***/ "E:\\handone_shiliucrm\\handonewework\\main.js?{\"page\":\"pages%2Frelehand%2Findex\"}":
/*!**************************************************************************************!*\
  !*** E:/handone_shiliucrm/handonewework/main.js?{"page":"pages%2Frelehand%2Findex"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "E:\\handone_shiliucrm\\handonewework\\pages.json");
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/relehand/index.vue */ "E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue"));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_index.default.mpType = 'page';
var app = new _vue.default(_index.default);
app.$mount();

/***/ }),

/***/ "E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue":
/*!*******************************************************************!*\
  !*** E:/handone_shiliucrm/handonewework/pages/relehand/index.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5693497b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5693497b& */ "E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=template&id=5693497b&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5693497b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5693497b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/handone_shiliucrm/handonewework/pages/relehand/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** E:/handone_shiliucrm/handonewework/pages/relehand/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=script&lang=js&");
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** E:/handone_shiliucrm/handonewework/pages/relehand/index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=template&id=5693497b&":
/*!**************************************************************************************************!*\
  !*** E:/handone_shiliucrm/handonewework/pages/relehand/index.vue?vue&type=template&id=5693497b& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5693497b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5693497b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\handone_shiliucrm\\handonewework\\pages\\relehand\\index.vue?vue&type=template&id=5693497b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5693497b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_86132_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5693497b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\handone_shiliucrm\\handonewework\\main.js?{\"page\":\"pages%2Frelehand%2Findex\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-baidu/pages/relehand/index.js.map