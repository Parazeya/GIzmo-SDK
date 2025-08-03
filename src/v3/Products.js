
import { GizmoClient } from '../GizmoClient.js';

export class Products {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of products.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @param {string} [params.name] - Filter by name
     * @returns {Promise<any>}
     */
    getProducts(params = {}) {
        return this.client.request('get', '/v3.0/products', {}, params);
    }
    /**
     * Get product by ID.
     * @param {number|string} id - Product ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getProductById(id, params = {}) {
        return this.client.request('get', `/v3.0/products/${id}`, {}, params);
    }
    /**
     * Get product images.
     * @param {number|string} id - Product ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getProductImages(id, params = {}) {
        return this.client.request('get', `/v3.0/products/${id}/images`, {}, params);
    }
    /**
     * Get user prices for product.
     * @param {number|string} id - Product ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getProductUserPrices(id, params = {}) {
        return this.client.request('get', `/v3.0/products/${id}/userprices`, {}, params);
    }
    /**
     * Get disallowed user groups for product.
     * @param {number|string} id - Product ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getProductDisallowedUserGroups(id, params = {}) {
        return this.client.request('get', `/v3.0/products/${id}/disallowedusergroups`, {}, params);
    }
    /**
     * Get branches related to product.
     * @param {number|string} id - Product ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getProductBranches(id, params = {}) {
        return this.client.request('get', `/v3.0/products/${id}/branches`, {}, params);
    }
}
