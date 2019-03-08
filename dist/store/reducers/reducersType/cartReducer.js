"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case _cartActions.ADD_TO_CART:
      {
        return addToCart(state, action);
      }
    case _cartActions.DELETE_FROM_CART:
      {
        return deleteFromCart(state, action);
      }
    default:
      return state;
  }
};

var _cartActions = require("../../actions/cartActions.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = {
  totalMoney: 0, // 订单总价
  badgeNum: 0, // 购物车右上角图标数字
  cart: [] // 购物车商品列表
};

/**
 * 添加商品
 * @param state
 * @param action
 */
function addToCart(state, action) {
  var cloneCart = [].concat(_toConsumableArray(state.cart));
  var notInArr = true;
  var totalMoney = 0;
  var badgeNum = 0;
  // 如果订单中不存在该商品，则加入订单
  if (cloneCart.length > 0) {
    cloneCart.map(function (goodOne) {
      if (goodOne.id === action.payload.id) {
        notInArr = false;
      }
    });
    if (notInArr) {
      cloneCart.push(_extends({}, action.payload, { num: 0 }));
    }
  } else {
    cloneCart.push(_extends({}, action.payload, { num: 0 }));
  }
  // 如果订单中存在该商品，则数量+1
  cloneCart.map(function (goodTwo) {
    if (goodTwo.id === action.payload.id) {
      goodTwo.num += 1;
    }
    badgeNum += goodTwo.num;
    totalMoney += goodTwo.price * goodTwo.num;
  });
  return _extends({}, state, {
    totalMoney: totalMoney,
    badgeNum: badgeNum,
    cart: cloneCart
  });
}

/**
 * 减少删除商品
 * @param state
 * @param action
 */
function deleteFromCart(state, action) {
  var cloneCartDel = [].concat(_toConsumableArray(state.cart));
  var totalMoney = 0;
  var badgeNum = 0;
  cloneCartDel.map(function (deleteGood, deleteIndex) {
    if (deleteGood.id === action.payload.id && deleteGood.num >= 1) {
      deleteGood.num -= 1;
      // // 商品计数为0，删除商品
      if (deleteGood.num === 0) {
        cloneCartDel.splice(deleteIndex, 1);
      }
    }
  });
  cloneCartDel.map(function (item) {
    badgeNum += item.num;
    totalMoney += item.price * item.num;
  });
  return _extends({}, state, {
    totalMoney: totalMoney,
    badgeNum: badgeNum,
    cart: cloneCartDel
  });
}