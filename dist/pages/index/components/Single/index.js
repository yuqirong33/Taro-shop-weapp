"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Single = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Single, _BaseComponent);

  function Single() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Single);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Single.__proto__ || Object.getPrototypeOf(Single)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["singleList", "anonymousState__temp"], _this.goGoodInfo = function (id, name, price) {
      _this.$preload({
        id: id,
        name: name,
        price: price
      });
      _index2.default.navigateTo({
        url: "/pages/goodInfo/index"
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Single, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Single.prototype.__proto__ || Object.getPrototypeOf(Single.prototype), "_constructor", this).apply(this, arguments);
    }

    /**
     * 跳转商品详情
     * @param id
     * @param name
     * @param price
     */

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var singleList = this.__props.singleList;

      var anonymousState__temp = Array.isArray(singleList) && singleList.length > 0;
      Object.assign(this.__state, {
        singleList: singleList,
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Single;
}(_index.Component), _class.properties = {
  "singleList": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["goGoodInfo"], _temp2);
exports.default = Single;

Component(require('../../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Single));