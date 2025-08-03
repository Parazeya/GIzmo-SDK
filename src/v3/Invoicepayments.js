import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing invoice payment operations.
 */
export class Invoicepayments {
    /**
     * Create an instance of Invoicepayments.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of invoice payments.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of invoice payments
     */
    getInvoicepayments(params = {}) {
        return this.client.request('get', '/v3.0/invoicepayments', {}, params);
    }

    /**
     * Get invoice payment by ID.
     * @param {number|string} id - Invoice payment ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Invoice payment details
     */
    getInvoicepaymentById(id, params = {}) {
        return this.client.request('get', `/v3.0/invoicepayments/${id}`, {}, params);
    }
}
