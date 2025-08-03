import { GizmoClient } from '../GizmoClient.js';

export class Invoices {
    constructor(client) {
        this.client = client;
    }
    getInvoices() {
        return this.client.request('get', '/invoices');
    }
    getInvoiceById(invoiceId) {
        return this.client.request('get', `/invoices/${invoiceId}`);
    }
    voidInvoice(invoiceId) {
        return this.client.request('delete', `/invoices/void/${invoiceId}`);
    }
    voidInvoiceWithRefund(invoiceId, refundMethod) {
        return this.client.request('delete', `/invoices/void/${invoiceId}/${refundMethod}`);
    }
}
