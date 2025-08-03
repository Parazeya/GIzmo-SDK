import { GizmoClient } from '../GizmoClient.js';

export class InvoicesUser {
    constructor(client) {
        this.client = client;
    }
    getInvoicesUserUsageSessionActiveInvoice(userId, params = {}) {
        return this.client.request('get', `/v3.0/invoices/user/${userId}/usagesession/active/invoice`, {}, params);
    }
    getInvoicesUserBalanceClose(userId, params = {}) {
        return this.client.request('get', `/v3.0/invoices/user/${userId}/balance/close`, {}, params);
    }
}
