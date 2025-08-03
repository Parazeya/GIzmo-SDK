import { GizmoClient } from '../GizmoClient.js';

export class Products {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/products', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/products/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/products', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/products', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/products/${id}`);
    }

    // Доступность покупки
    getPurchaseAvailability(id) {
        return this.client.request('get', `/v2.0/products/${id}/purchaseavailability`);
    }
    updatePurchaseAvailability(id, data) {
        return this.client.request('put', `/v2.0/products/${id}/purchaseavailability`, data);
    }

    // Картинки
    getImages(id, params = {}) {
        return this.client.request('get', `/v2.0/products/${id}/images`, {}, params);
    }
    addImage(id, data) {
        return this.client.request('post', `/v2.0/products/${id}/images`, data);
    }
    updateImages(data) {
        return this.client.request('put', '/v2.0/products/images', data);
    }
    deleteImage(id, productImageId) {
        return this.client.request('delete', `/v2.0/products/${id}/images/${productImageId}`);
    }

    // UserPrices
    getUserPrices(id, params = {}) {
        return this.client.request('get', `/v2.0/products/${id}/userprices`, {}, params);
    }
    addUserPrice(id, data) {
        return this.client.request('post', `/v2.0/products/${id}/userprices`, data);
    }
    updateUserPrices(data) {
        return this.client.request('put', '/v2.0/products/userprices', data);
    }
    deleteUserPrice(id, userPriceId) {
        return this.client.request('delete', `/v2.0/products/${id}/userprices/${userPriceId}`);
    }

    // DisallowedUserGroups
    getDisallowedUserGroups(id, params = {}) {
        return this.client.request('get', `/v2.0/products/${id}/disallowedusergroups`, {}, params);
    }
    addDisallowedUserGroup(id, data) {
        return this.client.request('post', `/v2.0/products/${id}/disallowedusergroups`, data);
    }
    updateDisallowedUserGroups(data) {
        return this.client.request('put', '/v2.0/products/disallowedusergroups', data);
    }
    deleteDisallowedUserGroup(id, productDisallowedUserGroupId) {
        return this.client.request('delete', `/v2.0/products/${id}/disallowedusergroups/${productDisallowedUserGroupId}`);
    }

    // Bundle
    getBundledProducts(id, params = {}) {
        return this.client.request('get', `/v2.0/products/bundle/${id}/bundledproducts`, {}, params);
    }
    addBundledProduct(id, data) {
        return this.client.request('post', `/v2.0/products/bundle/${id}/bundledproducts`, data);
    }
    updateBundledProducts(data) {
        return this.client.request('put', '/v2.0/products/bundle/bundledproducts', data);
    }
    deleteBundledProduct(id, bundledProductId) {
        return this.client.request('delete', `/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}`);
    }
    getBundledProductUserPrices(id, bundledProductId, params = {}) {
        return this.client.request('get', `/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`, {}, params);
    }
    addBundledProductUserPrice(id, bundledProductId, data) {
        return this.client.request('post', `/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`, data);
    }
    updateBundledProductUserPrices(data) {
        return this.client.request('put', '/v2.0/products/bundle/bundledproducts/userprices', data);
    }
    deleteBundledProductUserPrice(id, bundledProductId, userPriceId) {
        return this.client.request('delete', `/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices/${userPriceId}`);
    }

    // Time
    getUsageAvailability(id) {
        return this.client.request('get', `/v2.0/products/time/${id}/usageavailability`);
    }
    updateUsageAvailability(id, data) {
        return this.client.request('put', `/v2.0/products/time/${id}/usageavailability`, data);
    }
    getDisallowedHostGroupsTime(id, params = {}) {
        return this.client.request('get', `/v2.0/products/time/${id}/disallowedhostgroups`, {}, params);
    }
    addDisallowedHostGroupTime(id, data) {
        return this.client.request('post', `/v2.0/products/time/${id}/disallowedhostgroups`, data);
    }
    updateDisallowedHostGroupsTime(data) {
        return this.client.request('put', '/v2.0/products/time/disallowedhostgroups', data);
    }
    deleteDisallowedHostGroupTime(id, timeProductDisallowedHostGroupId) {
        return this.client.request('delete', `/v2.0/products/time/${id}/disallowedhostgroups/${timeProductDisallowedHostGroupId}`);
    }
}
