import { GizmoClient } from '../GizmoClient.js';

export class Invoices {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of invoices.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getInvoices(params = {}) {
        return this.client.request('get', '/v3.0/invoices', {}, params);
    }
    /**
     * Get invoice by ID.
     * @param {number|string} id - Invoice ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getInvoiceById(id, params = {}) {
        return this.client.request('get', `/v3.0/invoices/${id}`, {}, params);
    }
    /**
     * Void invoice.
     * @param {number|string} id - Invoice ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    voidInvoice(id, params = {}) {
        return this.client.request('get', `/v3.0/invoices/${id}/void`, {}, params);
    }
}
