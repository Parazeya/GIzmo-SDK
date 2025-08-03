import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for invoice operations.
 */
export class Invoices {
    /**
     * Create an Invoices instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all invoices.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of invoices
     */
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/invoices', {}, params);
    }
    /**
     * Get invoice by ID.
     * @param {number|string} id - Invoice ID
     * @returns {Promise<any>} Invoice details
     */
    getById(id) {
        return this.client.request('get', `/v2.0/invoices/${id}`);
    }
}
