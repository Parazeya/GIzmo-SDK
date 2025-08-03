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
     * @returns {Promise<any>} List of invoices
     */
    getInvoices() {
        return this.client.request('get', '/invoices');
    }
    /**
     * Get invoice by ID.
     * @param {number|string} invoiceId - Invoice ID
     * @returns {Promise<any>} Invoice details
     */
    getInvoiceById(invoiceId) {
        return this.client.request('get', `/invoices/${invoiceId}`);
    }
    /**
     * Void invoice by ID.
     * @param {number|string} invoiceId - Invoice ID
     * @returns {Promise<any>} Void result
     */
    voidInvoice(invoiceId) {
        return this.client.request('delete', `/invoices/void/${invoiceId}`);
    }
    /**
     * Void invoice with refund method.
     * @param {number|string} invoiceId - Invoice ID
     * @param {string} refundMethod - Refund method
     * @returns {Promise<any>} Void result
     */
    voidInvoiceWithRefund(invoiceId, refundMethod) {
        return this.client.request('delete', `/invoices/void/${invoiceId}/${refundMethod}`);
    }
}
