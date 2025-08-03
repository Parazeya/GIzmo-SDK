import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for product operations.
 */
export class Products {
    /**
     * Create a Products instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all products.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of products
     */
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/products', {}, params);
    }
    /**
     * Get product by ID.
     * @param {number|string} id - Product ID
     * @returns {Promise<any>} Product details
     */
    getById(id) {
        return this.client.request('get', `/v2.0/products/${id}`);
    }
    /**
     * Create a new product.
     * @param {Object} data - Product data
     * @returns {Promise<any>} Created product
     */
    create(data) {
        return this.client.request('post', '/v2.0/products', data);
    }
    /**
     * Update a product.
     * @param {Object} data - Product data
     * @returns {Promise<any>} Updated product
     */
    update(data) {
        return this.client.request('put', '/v2.0/products', data);
    }
    /**
     * Delete a product by ID.
     * @param {number|string} id - Product ID
     * @returns {Promise<any>} Delete result
     */
    delete(id) {
        return this.client.request('delete', `/v2.0/products/${id}`);
    }
    /**
     * Get purchase availability for product.
     * @param {number|string} id - Product ID
     * @returns {Promise<any>} Purchase availability
     */
    getPurchaseAvailability(id) {
        return this.client.request('get', `/v2.0/products/${id}/purchaseavailability`);
    }
    /**
     * Update purchase availability for product.
     * @param {number|string} id - Product ID
     * @param {Object} data - Availability data
     * @returns {Promise<any>} Update result
     */
    updatePurchaseAvailability(id, data) {
        return this.client.request('put', `/v2.0/products/${id}/purchaseavailability`, data);
    }
    /**
     * Get images for product.
     * @param {number|string} id - Product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of images
     */
    getImages(id, params = {}) {
        return this.client.request('get', `/v2.0/products/${id}/images`, {}, params);
    }
    /**
     * Add image to product.
     * @param {number|string} id - Product ID
     * @param {Object} data - Image data
     * @returns {Promise<any>} Add result
     */
    addImage(id, data) {
        return this.client.request('post', `/v2.0/products/${id}/images`, data);
    }
    /**
     * Update images for products.
     * @param {Object} data - Images data
     * @returns {Promise<any>} Update result
     */
    updateImages(data) {
        return this.client.request('put', '/v2.0/products/images', data);
    }
    /**
     * Delete image from product.
     * @param {number|string} id - Product ID
     * @param {number|string} productImageId - Image ID
     * @returns {Promise<any>} Delete result
     */
    deleteImage(id, productImageId) {
        return this.client.request('delete', `/v2.0/products/${id}/images/${productImageId}`);
    }
    /**
     * Get user prices for product.
     * @param {number|string} id - Product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of user prices
     */
    getUserPrices(id, params = {}) {
        return this.client.request('get', `/v2.0/products/${id}/userprices`, {}, params);
    }
    /**
     * Add user price to product.
     * @param {number|string} id - Product ID
     * @param {Object} data - User price data
     * @returns {Promise<any>} Add result
     */
    addUserPrice(id, data) {
        return this.client.request('post', `/v2.0/products/${id}/userprices`, data);
    }
    /**
     * Update user prices for products.
     * @param {Object} data - User prices data
     * @returns {Promise<any>} Update result
     */
    updateUserPrices(data) {
        return this.client.request('put', '/v2.0/products/userprices', data);
    }
    /**
     * Delete user price from product.
     * @param {number|string} id - Product ID
     * @param {number|string} userPriceId - User Price ID
     * @returns {Promise<any>} Delete result
     */
    deleteUserPrice(id, userPriceId) {
        return this.client.request('delete', `/v2.0/products/${id}/userprices/${userPriceId}`);
    }
    /**
     * Get disallowed user groups for product.
     * @param {number|string} id - Product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of disallowed user groups
     */
    getDisallowedUserGroups(id, params = {}) {
        return this.client.request('get', `/v2.0/products/${id}/disallowedusergroups`, {}, params);
    }
    /**
     * Add disallowed user group to product.
     * @param {number|string} id - Product ID
     * @param {Object} data - Disallowed user group data
     * @returns {Promise<any>} Add result
     */
    addDisallowedUserGroup(id, data) {
        return this.client.request('post', `/v2.0/products/${id}/disallowedusergroups`, data);
    }
    /**
     * Update disallowed user groups for products.
     * @param {Object} data - Disallowed user groups data
     * @returns {Promise<any>} Update result
     */
    updateDisallowedUserGroups(data) {
        return this.client.request('put', '/v2.0/products/disallowedusergroups', data);
    }
    /**
     * Delete disallowed user group from product.
     * @param {number|string} id - Product ID
     * @param {number|string} productDisallowedUserGroupId - Disallowed User Group ID
     * @returns {Promise<any>} Delete result
     */
    deleteDisallowedUserGroup(id, productDisallowedUserGroupId) {
        return this.client.request('delete', `/v2.0/products/${id}/disallowedusergroups/${productDisallowedUserGroupId}`);
    }
    /**
     * Get bundled products for product.
     * @param {number|string} id - Product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of bundled products
     */
    getBundledProducts(id, params = {}) {
        return this.client.request('get', `/v2.0/products/bundle/${id}/bundledproducts`, {}, params);
    }
    /**
     * Add bundled product to product.
     * @param {number|string} id - Product ID
     * @param {Object} data - Bundled product data
     * @returns {Promise<any>} Add result
     */
    addBundledProduct(id, data) {
        return this.client.request('post', `/v2.0/products/bundle/${id}/bundledproducts`, data);
    }
    /**
     * Update bundled products for products.
     * @param {Object} data - Bundled products data
     * @returns {Promise<any>} Update result
     */
    updateBundledProducts(data) {
        return this.client.request('put', '/v2.0/products/bundle/bundledproducts', data);
    }
    /**
     * Delete bundled product from product.
     * @param {number|string} id - Product ID
     * @param {number|string} bundledProductId - Bundled Product ID
     * @returns {Promise<any>} Delete result
     */
    deleteBundledProduct(id, bundledProductId) {
        return this.client.request('delete', `/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}`);
    }
    /**
     * Get user prices for bundled product.
     * @param {number|string} id - Product ID
     * @param {number|string} bundledProductId - Bundled Product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of user prices
     */
    getBundledProductUserPrices(id, bundledProductId, params = {}) {
        return this.client.request('get', `/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`, {}, params);
    }
    /**
     * Add user price to bundled product.
     * @param {number|string} id - Product ID
     * @param {number|string} bundledProductId - Bundled Product ID
     * @param {Object} data - User price data
     * @returns {Promise<any>} Add result
     */
    addBundledProductUserPrice(id, bundledProductId, data) {
        return this.client.request('post', `/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`, data);
    }
    /**
     * Update user prices for bundled products.
     * @param {Object} data - User prices data
     * @returns {Promise<any>} Update result
     */
    updateBundledProductUserPrices(data) {
        return this.client.request('put', '/v2.0/products/bundle/bundledproducts/userprices', data);
    }
    /**
     * Delete user price from bundled product.
     * @param {number|string} id - Product ID
     * @param {number|string} bundledProductId - Bundled Product ID
     * @param {number|string} userPriceId - User Price ID
     * @returns {Promise<any>} Delete result
     */
    deleteBundledProductUserPrice(id, bundledProductId, userPriceId) {
        return this.client.request('delete', `/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices/${userPriceId}`);
    }
    /**
     * Get usage availability for product.
     * @param {number|string} id - Product ID
     * @returns {Promise<any>} Usage availability
     */
    getUsageAvailability(id) {
        return this.client.request('get', `/v2.0/products/time/${id}/usageavailability`);
    }
    /**
     * Update usage availability for product.
     * @param {number|string} id - Product ID
     * @param {Object} data - Availability data
     * @returns {Promise<any>} Update result
     */
    updateUsageAvailability(id, data) {
        return this.client.request('put', `/v2.0/products/time/${id}/usageavailability`, data);
    }
    /**
     * Get disallowed host groups for product.
     * @param {number|string} id - Product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of disallowed host groups
     */
    getDisallowedHostGroupsTime(id, params = {}) {
        return this.client.request('get', `/v2.0/products/time/${id}/disallowedhostgroups`, {}, params);
    }
    /**
     * Add disallowed host group to product.
     * @param {number|string} id - Product ID
     * @param {Object} data - Disallowed host group data
     * @returns {Promise<any>} Add result
     */
    addDisallowedHostGroupTime(id, data) {
        return this.client.request('post', `/v2.0/products/time/${id}/disallowedhostgroups`, data);
    }
    /**
     * Update disallowed host groups for products.
     * @param {Object} data - Disallowed host groups data
     * @returns {Promise<any>} Update result
     */
    updateDisallowedHostGroupsTime(data) {
        return this.client.request('put', '/v2.0/products/time/disallowedhostgroups', data);
    }
    /**
     * Delete disallowed host group from product.
     * @param {number|string} id - Product ID
     * @param {number|string} timeProductDisallowedHostGroupId - Disallowed Host Group ID
     * @returns {Promise<any>} Delete result
     */
    deleteDisallowedHostGroupTime(id, timeProductDisallowedHostGroupId) {
        return this.client.request('delete', `/v2.0/products/time/${id}/disallowedhostgroups/${timeProductDisallowedHostGroupId}`);
    }
}
