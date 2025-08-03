import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for order operations.
 */
export class Orders {
    /**
     * Create an Orders instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all orders.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of orders
     */
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/orders', {}, params);
    }
    /**
     * Get order by ID.
     * @param {number|string} id - Order ID
     * @returns {Promise<any>} Order details
     */
    getById(id) {
        return this.client.request('get', `/v2.0/orders/${id}`);
    }
    /**
     * Create a new order.
     * @param {Object} data - Order data
     * @returns {Promise<any>} Created order
     */
    create(data) {
        return this.client.request('post', '/v2.0/orders', data);
    }
    /**
     * Update an order.
     * @param {Object} data - Order data
     * @returns {Promise<any>} Updated order
     */
    update(data) {
        return this.client.request('put', '/v2.0/orders', data);
    }
    /**
     * Delete an order by ID.
     * @param {number|string} id - Order ID
     * @returns {Promise<any>} Delete result
     */
    delete(id) {
        return this.client.request('delete', `/v2.0/orders/${id}`);
    }
    /**
     * Create invoice for order.
     * @param {number|string} id - Order ID
     * @param {Object} data - Invoice data
     * @returns {Promise<any>} Created invoice
     */
    createInvoice(id, data) {
        return this.client.request('post', `/v2.0/orders/${id}/invoice`, data);
    }
    /**
     * Complete order.
     * @param {number|string} id - Order ID
     * @param {Object} data - Completion data
     * @returns {Promise<any>} Completion result
     */
    complete(id, data) {
        return this.client.request('put', `/v2.0/orders/${id}/complete`, data);
    }
    /**
     * Cancel order.
     * @param {number|string} id - Order ID
     * @param {Object} data - Cancel data
     * @returns {Promise<any>} Cancel result
     */
    cancel(id, data) {
        return this.client.request('put', `/v2.0/orders/${id}/cancel`, data);
    }
    /**
     * Get delivered order.
     * @param {number|string} id - Order ID
     * @returns {Promise<any>} Delivered order
     */
    getDelivered(id) {
        return this.client.request('get', `/v2.0/orders/${id}/delivered`);
    }
    setDelivered(id, data) {
        return this.client.request('put', `/v2.0/orders/${id}/delivered`, data);
    }

    // OrderLines Delivered
    getOrderLineDelivered(id, orderLineId) {
        return this.client.request('get', `/v2.0/orders/${id}/orderlines/${orderLineId}/delivered`);
    }
    setOrderLineDelivered(id, orderLineId, data) {
        return this.client.request('put', `/v2.0/orders/${id}/orderlines/${orderLineId}/delivered`, data);
    }
}
