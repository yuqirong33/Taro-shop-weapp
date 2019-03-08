"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _cartActions = require("../../store/actions/cartActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.connect)(function (_ref) {
  var cartReducer = _ref.cartReducer;
  return {
    cartReducer: cartReducer
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "cart", "anonymousState__temp4", "dispatch", "__fn_onIsOpen", "cartReducer", "isOpen"], _this.addGood = function (id, e) {
      e.stopPropagation();
      _this.props.dispatch((0, _cartActions.addToCart)(id));
      _this.__triggerPropsFn("onIsOpen", [null].concat(['2']));
    }, _this.subtractNum = function (id, e) {
      e.stopPropagation();
      _this.props.dispatch((0, _cartActions.deleteFromCart)(id));
      _this.__triggerPropsFn("onIsOpen", [null].concat(['3']));
      if (_this.props.cartReducer.cart.length < 1) {
        _this.__triggerPropsFn("onIsOpen", [null].concat(['1']));
      }
    }, _this.shadeNone = function () {
      _this.__triggerPropsFn("onIsOpen", [null].concat(['1']));
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
    }

    /**
     * 添加商品
     * @param id
     * @param e
     */


    /**
     * 减少商品
     * @param id
     * @param e
     */


    /**
     * 关闭蒙层
     */

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var isOpen = this.__props.isOpen;
      var cart = this.__props.cartReducer.cart;

      var anonymousState__temp = (0, _index.internal_inline_style)({ display: isOpen ? 'block' : 'none' });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ display: isOpen ? 'block' : 'none' });
      var anonymousState__temp3 = (0, _index.internal_inline_style)({ display: isOpen && cart.length < 1 ? 'block' : 'none' });
      var anonymousState__temp4 = Array.isArray(cart) && cart.length > 0;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        cart: cart,
        anonymousState__temp4: anonymousState__temp4
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.properties = {
  "dispatch": {
    "type": null,
    "value": null
  },
  "__fn_onIsOpen": {
    "type": null,
    "value": null
  },
  "cartReducer": {
    "type": null,
    "value": null
  },
  "isOpen": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["shadeNone", "subtractNum", "addGood"], _temp2)) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index));