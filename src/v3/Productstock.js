import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing product stock operations.
 */
export class Productstock {
    /**
     * Create a Productstock instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of product stock items.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of product stock items
     */
    getProductstock(params = {}) {
        return this.client.request('get', '/v3.0/productstock', {}, params);
    }

    /**
     * Get product stock by product ID.
     * @param {number|string} productId - Product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Product stock details
     */
    getProductstockByProductId(productId, params = {}) {
        return this.client.request('get', `/v3.0/productstock/${productId}`, {}, params);
    }

    /**
     * Get product stock by product ID and stock ID.
     * @param {number|string} productId - Product ID
     * @param {number|string} stockId - Stock ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Product stock details
     */
    getProductstockByProductIdStockId(productId, stockId, params = {}) {
        return this.client.request('get', `/v3.0/productstock/${productId}/stock/${stockId}`, {}, params);
    }

    /**
     * Get product stock transaction.
     * @param {number|string} productId - Product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Product stock transaction
     */
    getProductstockTransaction(productId, params = {}) {
        return this.client.request('get', `/v3.0/productstock/${productId}/transaction`, {}, params);
    }

    /**
     * Add amount to product stock.
     * @param {number|string} productId - Product ID
     * @param {number} amount - Amount to add
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Add result
     */
    addProductstockAmount(productId, amount, params = {}) {
        return this.client.request('get', `/v3.0/productstock/${productId}/add/${amount}`, {}, params);
    }

    /**
     * Set amount for product stock.
     * @param {number|string} productId - Product ID
     * @param {number} amount - Amount to set
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Set result
     */
    setProductstockAmount(productId, amount, params = {}) {
        return this.client.request('get', `/v3.0/productstock/${productId}/set/${amount}`, {}, params);
    }

    /**
     * Remove amount from product stock.
     * @param {number|string} productId - Product ID
     * @param {number} amount - Amount to remove
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Remove result
     */
    removeProductstockAmount(productId, amount, params = {}) {
        return this.client.request('get', `/v3.0/productstock/${productId}/remove/${amount}`, {}, params);
    }
}
