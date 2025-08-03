import { GizmoClient } from '../GizmoClient.js';

export class Users {
    constructor(client) {
        this.client = client;
    }
    getUsers(params = {}) {
        return this.client.request('get', '/users', {}, params);
    }
    addUser(data) {
        return this.client.request('put', '/users', data);
    }
    updateUser(data) {
        return this.client.request('post', '/users', data);
    }
    getUserByUsername(username) {
        return this.client.request('get', `/users/${username}/username`);
    }
    getUserById(userId) {
        return this.client.request('get', `/users/${userId}`);
    }
    deleteUser(userId) {
        return this.client.request('delete', `/users/${userId}`);
    }
    getUserIdByUsername(username) {
        return this.client.request('get', `/users/${username}/userid`);
    }
    setUsername(userId, newUsername) {
        return this.client.request('post', `/users/${userId}/username/${newUsername}`);
    }
    undeleteUser(userId) {
        return this.client.request('post', `/users/${userId}/undelete`);
    }
    userExists(userId) {
        return this.client.request('get', `/users/${userId}/exist`);
    }
    userExistsByUsername(userName) {
        return this.client.request('get', `/users/username/${userName}/exist`);
    }
    userExistsByEmail(userEmail) {
        return this.client.request('get', `/users/email/${userEmail}/exist`);
    }
    userExistsByLoginName(loginName) {
        return this.client.request('get', `/users/loginname/${loginName}/exist`);
    }
    resetPassword(userId) {
        return this.client.request('post', `/users/${userId}/password/reset`);
    }
    setPassword(userId, newPassword) {
        return this.client.request('post', `/users/${userId}/password/${newPassword}`);
    }
    setEmail(userId, newEmail) {
        return this.client.request('post', `/users/${userId}/email/${newEmail}`);
    }
    setUserGroup(userId, newUserGroupId) {
        return this.client.request('post', `/users/${userId}/usergroup/${newUserGroupId}`);
    }
    logoutUser(userId) {
        return this.client.request('post', `/users/${userId}/logout`);
    }
    loginUser(userId, hostId) {
        return this.client.request('post', `/users/${userId}/login/${hostId}`);
    }
    getLastLogin(userId) {
        return this.client.request('get', `/users/${userId}/lastlogin`);
    }
    getLastLogout(userId) {
        return this.client.request('get', `/users/${userId}/lastlogout`);
    }
    getLoginState(userId) {
        return this.client.request('get', `/users/${userId}/loginstate`);
    }
    getCurrentHost(userId) {
        return this.client.request('get', `/users/${userId}/currenthost`);
    }
    getCurrentHostId(userId) {
        return this.client.request('get', `/users/${userId}/currenthostid`);
    }
    putDeposit(userId, amount, paymentMethodId) {
        return this.client.request('put', `/users/${userId}/deposit/${amount}/${paymentMethodId}`);
    }
    deleteDeposit(userId, amount) {
        return this.client.request('delete', `/users/${userId}/deposit/${amount}`);
    }
    getUserPoints(userId) {
        return this.client.request('get', `/users/${userId}/points`);
    }
    putUserPoints(userId, amount) {
        return this.client.request('put', `/users/${userId}/points/${amount}`);
    }
    deleteUserPoints(userId, amount) {
        return this.client.request('delete', `/users/${userId}/points/${amount}`);
    }
    awardPoints(userName, amount) {
        return this.client.request('put', `/users/${userName}/points/${amount}/award`);
    }
    redeemPoints(userName, amount) {
        return this.client.request('delete', `/users/${userName}/points/${amount}/redeem`);
    }
    getUserAttributes(userId) {
        return this.client.request('get', `/users/${userId}/attribute`);
    }
    putUserAttributeById(userId, attributeId, attributeValue) {
        return this.client.request('put', `/users/${userId}/attribute/${attributeId}/${attributeValue}`);
    }
    putUserAttributeByName(userId, attributeName, attributeValue) {
        return this.client.request('put', `/users/${userId}/attribute/${attributeName}/${attributeValue}`);
    }
    getUserAttributeByName(userId, attributeName) {
        return this.client.request('get', `/users/${userId}/attribute/${attributeName}`);
    }
    deleteUserAttributeByName(userId, attributeName) {
        return this.client.request('delete', `/users/${userId}/attribute/${attributeName}`);
    }
    getUserAttributeById(userId, attributeId) {
        return this.client.request('get', `/users/${userId}/attribute/${attributeId}`);
    }
    deleteUserAttributeById(userId, attributeId) {
        return this.client.request('delete', `/users/${userId}/attribute/${attributeId}`);
    }
    getUsersBalance() {
        return this.client.request('get', '/users/balance');
    }
    getUserBalance(userId) {
        return this.client.request('get', `/users/${userId}/balance`);
    }
    getUserTimeMoney(userId, minutes) {
        return this.client.request('get', `/users/${userId}/time/${minutes}/money`);
    }
    getUserMoneyTime(userId, money) {
        return this.client.request('get', `/users/${userId}/money/${money}/time`);
    }
    orderTimeInvoice(userId, amount) {
        return this.client.request('post', `/users/${userId}/order/time/${amount}/invoice`);
    }
    orderTimeInvoicePayment(userId, amount, paymentMethodId) {
        return this.client.request('post', `/users/${userId}/order/time/${amount}/invoice/payment/${paymentMethodId}`);
    }
    orderTimePriceInvoice(userId, amount, price) {
        return this.client.request('post', `/users/${userId}/order/time/${amount}/price/${price}/invoice`);
    }
    orderTimePriceInvoicePayment(userId, amount, price, paymentMethodId) {
        return this.client.request('post', `/users/${userId}/order/time/${amount}/price/${price}/invoice/payment/${paymentMethodId}`);
    }
    orderTimeMoneyInvoice(userId, amount) {
        return this.client.request('post', `/users/${userId}/order/time/money/${amount}/invoice`);
    }
    orderTimeMoneyInvoicePayment(userId, amount, paymentMethodId) {
        return this.client.request('post', `/users/${userId}/order/time/money/${amount}/invoice/payment/${paymentMethodId}`);
    }
    putUserNote(userId, text, sevirity) {
        return this.client.request('put', `/users/${userId}/note/${text}/${sevirity}`);
    }
    getUserNote(userId) {
        return this.client.request('get', `/users/${userId}/note`);
    }
    getUserPicture(userId) {
        return this.client.request('get', `/users/${userId}/picture`);
    }
    putUserPicture(userId, data) {
        return this.client.request('put', `/users/${userId}/picture`, data);
    }
    putUserAppRating(userId, appId, value) {
        return this.client.request('put', `/users/${userId}/app/${appId}/rating/${value}`);
    }
    getUserAppRating(userId, appId) {
        return this.client.request('get', `/users/${userId}/app/${appId}/rating`);
    }
    validateUser(username, password) {
        return this.client.request('get', `/users/${username}/${password}/valid`);
    }
    getUserAppInfosTopRating(userId) {
        return this.client.request('get', `/users/${userId}/app/infos/top/rating`);
    }
    getUserAppInfosTopUse(userId) {
        return this.client.request('get', `/users/${userId}/app/infos/top/use`);
    }
    orderProductInvoicePayment(userId, productId, quantity, paymentMethodId) {
        return this.client.request('post', `/users/${userId}/order/${productId}/${quantity}/invoice/payment/${paymentMethodId}`);
    }
    orderProductInvoice(userId, productId) {
        return this.client.request('post', `/users/${userId}/order/${productId}/invoice`);
    }
    orderProductInvoicePayment2(userId, productId, paymentMethodId) {
        return this.client.request('post', `/users/${userId}/order/${productId}/invoice/payment/${paymentMethodId}`);
    }
    getUserLogins(userId) {
        return this.client.request('get', `/users/${userId}/logins`);
    }
    getUserProductTime(userId) {
        return this.client.request('get', `/users/${userId}/producttime`);
    }
    getUserProductTimeExtended(userId) {
        return this.client.request('get', `/users/${userId}/producttimeextended`);
    }
}
