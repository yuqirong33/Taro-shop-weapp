"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../utils/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Order, _BaseComponent);

  function Order() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Order.__proto__ || Object.getPrototypeOf(Order)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["searchVal", "orderList", "isLoading", "anonymousState__temp"], _this.config = {
      navigationBarTitleText: '我的订单',
      navigationBarBackgroundColor: '#000',
      navigationBarTextStyle: "white"
    }, _this.componentDidMount = function () {
      var type = _this.$router.preload.type;
      _this.fetchApi(type);
    }, _this.handleSearchValChange = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var data, orderList, list;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({ isLoading: true });
                _this.setState({ searchVal: e.detail.value });
                _context.next = 4;
                return (0, _api.postRequest)('/mock/5c47cf65f513860f4ceef6a3/taroMini/orderList');

              case 4:
                data = _context.sent;
                orderList = [].concat(_toConsumableArray(data.data.dataList));
                list = orderList.filter(function (cur) {
                  return e.detail.value === cur.title;
                });

                _this.setState({
                  orderList: list
                });
                if (e.detail.value === '') {
                  _this.fetchApi('01');
                }
                _this.setState({ isLoading: false });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.removeSearchVal = function () {
      _this.setState({
        searchVal: ''
      });
      _this.fetchApi('01');
    }, _this.fetchApi = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(type) {
        var list, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({ isLoading: true });
                list = [];
                _context2.next = 4;
                return (0, _api.postRequest)('/mock/5c47cf65f513860f4ceef6a3/taroMini/orderList');

              case 4:
                data = _context2.sent;

                if (type === '01') {
                  list = data.data.dataList;
                } else {
                  list = data.data.dataList.filter(function (cur) {
                    return type === cur.type;
                  });
                }
                if (data.code === 0) {
                  _this.setState({
                    orderList: list
                  });
                }
                _this.setState({ isLoading: false });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Order, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Order.prototype.__proto__ || Object.getPrototypeOf(Order.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        searchVal: '',
        orderList: []
      };
    }

    /**
     * 搜索框值改变
     * @param e
     */


    /**
     * 清空搜索框内容
     */


    /**
     * 获取数据
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
          orderList = _state.orderList,
          searchVal = _state.searchVal,
          isLoading = _state.isLoading;

      var anonymousState__temp = Array.isArray(orderList) && orderList.length > 0;
      Object.assign(this.__state, {
        isLoading: isLoading,
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Order;
}(_index.Component), _class.properties = {}, _class.$$events = ["handleSearchValChange", "removeSearchVal"], _temp2);
exports.default = Order;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Order, true));