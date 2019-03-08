'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_TO_CART = 'ADD_TO_CART';
var DELETE_FROM_CART = 'DELETE_FROM_CART';

/**
 * 添加商品
 * @param id 商品id
 * @param name 商品名字
 * @param price 商品价格
 */
function addToCart(id, name, price) {
  return {
    type: ADD_TO_CART,
    payload: { id: id, name: name, price: price }
  };
}

/**
 * 减少删除商品
 * @param id 商品
 */
function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: { id: id }
  };
}

exports.ADD_TO_CART = ADD_TO_CART;
exports.DELETE_FROM_CART = DELETE_FROM_CART;
exports.addToCart = addToCart;
exports.deleteFromCart = deleteFromCart;