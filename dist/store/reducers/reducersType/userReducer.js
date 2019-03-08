'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case _userActions.EDIT_USERINFO:
      {
        return Object.keys(action.payload).length > 0 ? _extends({}, action.payload) : state;
      }
    default:
      return state;
  }
};

var _userActions = require('../../actions/userActions.js');

var initState = {
  consignee: 'Vidomina', // 收货人姓名
  address: 'Erathia', // 收货人地址
  phone: '110' // 收货人电话
};