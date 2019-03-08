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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodList = (_dec = (0, _index3.connect)(function (_ref) {
  var cartReducer = _ref.cartReducer;
  return {
    cartReducer: cartReducer
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(GoodList, _BaseComponent);

  function GoodList() {
    var _ref2,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = GoodList.__proto__ || Object.getPrototypeOf(GoodList)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anchorIndex2", "goodList", "anchorIndex", "isOpen", "badgeNum", "totalMoney", "isLoading", "cartReducer", "dispatch"], _this.config = {
      navigationBarTitleText: '商品列表',
      navigationBarBackgroundColor: '#000',
      navigationBarTextStyle: "white"
    }, _this.componentDidShow = function () {
      var cartReducer = _this.props.cartReducer;

      _this.setState({
        totalMoney: cartReducer.totalMoney,
        badgeNum: cartReducer.badgeNum
      });
    }, _this.componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({ isLoading: true });
              _context.next = 3;
              return (0, _api.postRequest)('/mock/5c47cf65f513860f4ceef6a3/example/taroMini/goodList');

            case 3:
              data = _context.sent;

              if (data.code === 0) {
                _this.setState({ goodList: data.data.tabData });
              }
              if (typeof _this.$router.preload !== 'undefined') {
                data.data.tabData.map(function (item, index) {
                  if (item.id === _this.$router.preload.iconId) {
                    _this.setState({
                      anchorIndex: "anchor" + index,
                      anchorIndex2: "anchor" + index
                    });
                  }
                });
              }
              _this.setState({ isLoading: false });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.handleClick = function (index) {
      _this.setState({
        anchorIndex: "anchor" + index,
        anchorIndex2: "anchor" + index
      });
    }, _this.onScrollView = function (e) {
      if (e.currentTarget.id === 'panelRight' && Array.isArray(_this.state.goodList)) {
        var tabDataArr = JSON.parse(JSON.stringify(_this.state.goodList));
        var curTopArr = [];

        tabDataArr.map(function (item, index) {
          // 获取右边栏每个title的当前所在高度
          _index2.default.createSelectorQuery().select("#anchor" + index).boundingClientRect(function (rect) {
            curTopArr.push(_defineProperty({}, "anchor" + index, rect.top));
            // 根据右边栏每个title的当前所在高度距离页面顶部的距离设置左边栏按钮样式
            curTopArr.map(function (offsetTop) {
              if (offsetTop["anchor" + index] >= 0 && offsetTop["anchor" + index] < 200) {
                _this.setState({ anchorIndex2: "anchor" + index });
              }
            });
          }).exec();
        });
      }
    }, _this.addGood = function (id, name, price, e) {
      e.stopPropagation();
      _this.props.dispatch((0, _cartActions.addToCart)(id, name, price));
      var cartReducer = _this.props.cartReducer;


      _this.setState({
        totalMoney: cartReducer.totalMoney,
        badgeNum: cartReducer.badgeNum
      });
    }, _this.buyingInfo = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    }, _this.goCart = function () {
      _index2.default.navigateTo({
        url: "/pages/cart/index"
      });
    }, _this.goGoodInfo = function (id, name, price) {
      _this.$preload({ id: id, name: name, price: price });
      _index2.default.navigateTo({
        url: "/pages/goodInfo/index"
      });
    }, _this.callback = function (type) {
      if (type === '1') {
        _this.setState({
          isOpen: false
        });
      } else if (type === '2') {
        var badgeNum = _this.state.badgeNum;
        badgeNum += 1;
        _this.setState({
          badgeNum: badgeNum,
          totalMoney: _this.props.cartReducer.totalMoney
        });
      } else if (type === '3') {
        var _badgeNum = _this.state.badgeNum;
        _badgeNum -= 1;
        _this.setState({
          badgeNum: _badgeNum,
          totalMoney: _this.props.cartReducer.totalMoney
        });
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodList, [{
    key: "_constructor",
    value: function _constructor() {
      _get(GoodList.prototype.__proto__ || Object.getPrototypeOf(GoodList.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        anchorIndex: 'anchor0',
        anchorIndex2: 'anchor0',
        isOpen: false, // 订单详情开关
        totalMoney: 0, // 合计总价
        badgeNum: 0, // 购物车 Icon 数字
        goodList: []
      };
    }

    /**
     * 侧边栏按钮点击
     * @param index
     */


    /**
     * 监听滚动条滚动
     * @param e
     */


    /**
     * 添加商品
     * @param id
     * @param name
     * @param price
     * @param e
     */


    /**
     * 打开关闭购物车详情
     */


    /**
     * 跳转购物车页面
     */


    /**
     * 跳转商品详情
     * @param id
     * @param name
     * @param price
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
          anchorIndex = _state.anchorIndex,
          anchorIndex2 = _state.anchorIndex2,
          isOpen = _state.isOpen,
          totalMoney = _state.totalMoney,
          badgeNum = _state.badgeNum,
          goodList = _state.goodList;

      var anonymousState__temp = (0, _index.internal_inline_style)({ display: badgeNum > 0 ? 'block' : 'none' });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return GoodList;
}(_index.Component), _class2.properties = {
  "cartReducer": {
    "type": null,
    "value": null
  },
  "dispatch": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleClick", "onScrollView", "goGoodInfo", "addGood", "buyingInfo", "goCart", "callback"], _temp2)) || _class);
exports.default = GoodList;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(GoodList, true));