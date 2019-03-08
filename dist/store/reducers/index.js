"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../../npm/redux/lib/redux.js");

var _cartReducer = require("./reducersType/cartReducer.js");

var _cartReducer2 = _interopRequireDefault(_cartReducer);

var _userReducer = require("./reducersType/userReducer.js");

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allReducers = {
  cartReducer: _cartReducer2.default,
  userReducer: _userReducer2.default
};

var rootReducer = (0, _redux.combineReducers)(allReducers);
exports.default = rootReducer;