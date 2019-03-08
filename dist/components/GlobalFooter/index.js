"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalFooter = (_temp2 = _class = function (_BaseComponent) {
  _inherits(GlobalFooter, _BaseComponent);

  function GlobalFooter() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, GlobalFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GlobalFooter.__proto__ || Object.getPrototypeOf(GlobalFooter)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["isActive"], _this.goHref = function (type) {
      switch (type) {
        case '01':
          _index2.default.navigateTo({
            url: '/pages/index/index'
          });
          break;
        case '02':
          _index2.default.navigateTo({
            url: '/pages/goodList/index'
          });
          break;
        case '03':
          _index2.default.navigateTo({
            url: '/pages/cart/index'
          });
          break;
        case '04':
          // 获取用户信息
          _index2.default.getUserInfo({
            success: function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _index2.default.setStorageSync('userInfo', res.userInfo);

                      case 2:
                        _index2.default.navigateTo({
                          url: '/pages/user/index'
                        });

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, _this2);
              }));

              function success(_x) {
                return _ref2.apply(this, arguments);
              }

              return success;
            }()
          });
          break;
        default:
          _index2.default.navigateTo({
            url: '/pages/index/index'
          });
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GlobalFooter, [{
    key: "_constructor",
    value: function _constructor() {
      _get(GlobalFooter.prototype.__proto__ || Object.getPrototypeOf(GlobalFooter.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
    }

    /**
     * 跳转页面
     * @param type
     */

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var isActive = this.__props.isActive;

      Object.assign(this.__state, {
        isActive: isActive
      });
      return this.__state;
    }
  }]);

  return GlobalFooter;
}(_index.Component), _class.properties = {
  "isActive": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["goHref"], _temp2);
exports.default = GlobalFooter;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(GlobalFooter));