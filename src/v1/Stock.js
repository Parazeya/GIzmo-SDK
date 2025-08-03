import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for stock operations.
 */
export class Stock {
    /**
     * Create a Stock instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all stock items.
     * @returns {Promise<any>} List of stock items
     */
    getStock() {
        return this.client.request('get', '/stock');
    }
    /**
     * Get stock by product ID.
     * @param {number|string} productId - Product ID
     * @returns {Promise<any>} Stock details
     */
    getStockByProductId(productId) {
        return this.client.request('get', `/stock/${productId}`);
    }
    /**
     * Set stock amount for product.
     * @param {number|string} productId - Product ID
     * @param {number} amount - Amount
     * @param {Object} data - Additional data
     * @returns {Promise<any>} Set result
     */
    setStockAmount(productId, amount, data) {
        return this.client.request('put', `/stock/${productId}/${amount}`, data);
    }
    /**
     * Delete stock amount for product.
     * @param {number|string} productId - Product ID
     * @param {number} amount - Amount
     * @returns {Promise<any>} Delete result
     */
    deleteStockAmount(productId, amount) {
        return this.client.request('delete', `/stock/${productId}/${amount}`);
    }
    /**
     * Post stock amount for product.
     * @param {number|string} productId - Product ID
     * @param {number} amount - Amount
     * @param {Object} data - Additional data
     * @returns {Promise<any>} Post result
     */
    postStockAmount(productId, amount, data) {
        return this.client.request('post', `/stock/${productId}/${amount}`, data);
    }
}
