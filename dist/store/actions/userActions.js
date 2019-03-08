'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var EDIT_USERINFO = 'EDIT_USERINFO';

/**
 * 编辑个人信息
 * @param consignee
 * @param address
 * @param phone
 */
function editUserInfo(consignee, address, phone) {
  return {
    type: EDIT_USERINFO,
    payload: { consignee: consignee, address: address, phone: phone }
  };
}

exports.EDIT_USERINFO = EDIT_USERINFO;
exports.editUserInfo = editUserInfo;