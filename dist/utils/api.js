'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiUrl = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.postRequest = postRequest;

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiUrl = exports.apiUrl = 'https://www.easy-mock.com';

function postRequest(url, date) {
  return new Promise(function (resolve, reject) {
    _index2.default.request({
      url: apiUrl + url,
      data: _extends({}, date),
      method: 'POST',
      header: {
        'content-type': 'application/json'
      }
    }).then(function (res) {
      resolve(res.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}