import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing product order operations.
 */
export class Productorders {
    /**
     * Create a Productorders instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of product orders.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of product orders
     */
    getProductorders(params = {}) {
        return this.client.request('get', '/v3.0/productorders', {}, params);
    }

    /**
     * Get product order by ID.
     * @param {number|string} id - Product order ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Product order details
     */
    getProductorderById(id, params = {}) {
        return this.client.request('get', `/v3.0/productorders/${id}`, {}, params);
    }

    /**
     * Get active product orders.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of active product orders
     */
    getProductordersActive(params = {}) {
        return this.client.request('get', '/v3.0/productorders/active', {}, params);
    }

    /**
     * Get active product order by ID.
     * @param {number|string} id - Product order ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Active product order details
     */
    getProductorderActive(id, params = {}) {
        return this.client.request('get', `/v3.0/productorders/${id}/active`, {}, params);
    }

    /**
     * Get multiple product orders.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Multiple product orders
     */
    getProductordersMulti(params = {}) {
        return this.client.request('get', '/v3.0/productorders/multi', {}, params);
    }

    /**
     * Get invoice for product order.
     * @param {number|string} id - Product order ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Invoice details
     */
    getProductorderInvoice(id, params = {}) {
        return this.client.request('get', `/v3.0/productorders/${id}/invoice`, {}, params);
    }

    /**
     * Process product order.
     * @param {number|string} id - Product order ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Process result
     */
    getProductorderProcess(id, params = {}) {
        return this.client.request('get', `/v3.0/productorders/${id}/process`, {}, params);
    }

    /**
     * Complete product order.
     * @param {number|string} id - Product order ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Complete result
     */
    getProductorderComplete(id, params = {}) {
        return this.client.request('get', `/v3.0/productorders/${id}/complete`, {}, params);
    }

    /**
     * Cancel product order.
     * @param {number|string} id - Product order ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Cancel result
     */
    getProductorderCancel(id, params = {}) {
        return this.client.request('get', `/v3.0/productorders/${id}/cancel`, {}, params);
    }

    /**
     * Mark product order as delivered.
     * @param {number|string} id - Product order ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Delivered result
     */
    getProductorderDelivered(id, params = {}) {
        return this.client.request('get', `/v3.0/productorders/${id}/delivered`, {}, params);
    }

    /**
     * Mark product orderlines as delivered.
     * @param {number|string} id - Product order ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Delivered orderlines result
     */
    getProductorderOrderlinesDelivered(id, params = {}) {
        return this.client.request('get', `/v3.0/productorders/${id}/orderlines/delivered`, {}, params);
    }

    /**
     * Get payments for product order.
     * @param {number|string} id - Product order ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Payments details
     */
    getProductorderPayments(id, params = {}) {
        return this.client.request('get', `/v3.0/productorders/${id}/payments`, {}, params);
    }
}
