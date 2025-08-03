import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for payment method operations.
 */
export class PaymentMethods {
    /**
     * Create a PaymentMethods instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all payment methods.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of payment methods
     */
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/paymentmethods', {}, params);
    }
    /**
     * Get payment method by ID.
     * @param {number|string} id - Payment method ID
     * @returns {Promise<any>} Payment method details
     */
    getById(id) {
        return this.client.request('get', `/v2.0/paymentmethods/${id}`);
    }
    /**
     * Create a new payment method.
     * @param {Object} data - Payment method data
     * @returns {Promise<any>} Created payment method
     */
    create(data) {
        return this.client.request('post', '/v2.0/paymentmethods', data);
    }
    /**
     * Update a payment method.
     * @param {Object} data - Payment method data
     * @returns {Promise<any>} Updated payment method
     */
    update(data) {
        return this.client.request('put', '/v2.0/paymentmethods', data);
    }
    /**
     * Delete a payment method by ID.
     * @param {number|string} id - Payment method ID
     * @returns {Promise<any>} Delete result
     */
    delete(id) {
        return this.client.request('delete', `/v2.0/paymentmethods/${id}`);
    }
}
