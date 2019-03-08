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

var _api = require("../../utils/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodInfo = (_dec = (0, _index3.connect)(function (_ref) {
  var cartReducer = _ref.cartReducer;
  return {
    cartReducer: cartReducer
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(GoodInfo, _BaseComponent);

  function GoodInfo() {
    var _ref2,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = GoodInfo.__proto__ || Object.getPrototypeOf(GoodInfo)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "dataList", "id", "name", "price", "isOpen", "anonymousState__temp2", "fetchData", "anonymousState__temp3", "badgeNum", "isLoading", "cartReducer", "dispatch"], _this.config = {
      navigationBarTitleText: '商品详情',
      navigationBarBackgroundColor: '#000',
      navigationBarTextStyle: "white"
    }, _this.componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var preload, id, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({ isLoading: true });
              preload = _this.$router.preload;

              _this.setState({
                id: preload.id,
                name: preload.name,
                price: preload.price
              });
              id = preload.id;
              _context.next = 6;
              return (0, _api.postRequest)('/mock/5c47cf65f513860f4ceef6a3/example/taroMini/goodInfo', {
                id: id
              });

            case 6:
              data = _context.sent;

              if (data.code === 0) {
                _this.setState({
                  fetchData: data.data
                });
              }
              _this.setState({ isLoading: false });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.componentDidShow = function () {
      var cartReducer = _this.props.cartReducer;


      _this.setState({
        badgeNum: cartReducer.badgeNum
      });
    }, _this.addGood = function (id, name, price) {
      _this.props.dispatch((0, _cartActions.addToCart)(id, name, price));
      var cartReducer = _this.props.cartReducer;


      _this.setState({
        badgeNum: cartReducer.badgeNum
      });
    }, _this.buyingInfo = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    }, _this.goHomepage = function () {
      _index2.default.navigateTo({
        url: "/pages/index/index"
      });
    }, _this.goGoodList = function () {
      _index2.default.navigateTo({
        url: "/pages/goodList/index"
      });
    }, _this.goPay = function () {
      _index2.default.navigateTo({
        url: "/pages/cart/index"
      });
    }, _this.callback = function (type) {
      if (type === '1') {
        _this.setState({ isOpen: false });
      } else if (type === '2') {
        var badgeNum = _this.state.badgeNum;
        badgeNum += 1;
        _this.setState({
          badgeNum: badgeNum
        });
      } else if (type === '3') {
        var _badgeNum = _this.state.badgeNum;
        _badgeNum -= 1;
        _this.setState({
          badgeNum: _badgeNum
        });
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodInfo, [{
    key: "_constructor",
    value: function _constructor() {
      _get(GoodInfo.prototype.__proto__ || Object.getPrototypeOf(GoodInfo.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isOpen: false,
        badgeNum: 0,
        fetchData: {
          dataList: []
        }
      };
    }

    /**
     * 添加商品
     * @param id
     * @param name
     * @param price
     */


    /**
     * 打开关闭购物车详情
     */


    /**
     * 跳转首页
     */


    /**
     * 跳转商品列表
     */


    /**
     * 跳转购物车
     */


    /**
     * CartGoodList 子组件回调
     * @param type
     */

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          fetchData = _state.fetchData,
          id = _state.id,
          name = _state.name,
          price = _state.price,
          isOpen = _state.isOpen,
          badgeNum = _state.badgeNum;
      var dataList = fetchData.dataList;

      var anonymousState__temp = (0, _index.internal_inline_style)({ display: badgeNum > 0 ? 'block' : 'none' });
      var anonymousState__temp2 = Array.isArray(dataList) && dataList.length > 0;
      var anonymousState__temp3 = Array.isArray(dataList) && dataList.length > 0;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        dataList: dataList,
        id: id,
        name: name,
        price: price,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3
      });
      return this.__state;
    }
  }]);

  return GoodInfo;
}(_index.Component), _class2.properties = {
  "cartReducer": {
    "type": null,
    "value": null
  },
  "dispatch": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["goHomepage", "goGoodList", "buyingInfo", "addGood", "goPay", "callback"], _temp2)) || _class);
exports.default = GoodInfo;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(GoodInfo, true));