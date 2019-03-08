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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = (_dec = (0, _index3.connect)(function (_ref) {
  var userReducer = _ref.userReducer;
  return {
    userReducer: userReducer
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(User, _BaseComponent);

  function User() {
    var _ref2,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["avatar", "nickName", "consignee", "address", "phone", "userReducer"], _this.config = {
      navigationBarTitleText: '个人中心',
      navigationBarBackgroundColor: '#000',
      navigationBarTextStyle: "white"
    }, _this.componentDidShow = function () {
      var userReducer = _this.props.userReducer;

      _this.setState({
        consignee: userReducer.consignee,
        address: userReducer.address,
        phone: userReducer.phone
      });
    }, _this.componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var userInfo;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = _index2.default.getStorageSync('userInfo');
              _context.next = 3;
              return _this.setState({
                avatar: userInfo.avatarUrl,
                nickName: userInfo.nickName
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.goOrder = function (type) {
      _this.$preload({ type: type });
      _index2.default.navigateTo({
        url: '/pages/order/index'
      });
    }, _this.goUserEdit = function () {
      _index2.default.navigateTo({
        url: '/pages/userEdit/index'
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), "_constructor", this).call(this, props);
    }

    /**
     * 跳转订单列表
     * @param type
     */


    /**
     * 跳转订单列表
     */

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          avatar = _state.avatar,
          nickName = _state.nickName,
          consignee = _state.consignee,
          address = _state.address,
          phone = _state.phone;

      Object.assign(this.__state, {
        avatar: avatar,
        nickName: nickName,
        consignee: consignee,
        address: address,
        phone: phone
      });
      return this.__state;
    }
  }]);

  return User;
}(_index.Component), _class2.properties = {
  "userReducer": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["goOrder", "goUserEdit"], _temp2)) || _class);
exports.default = User;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(User, true));