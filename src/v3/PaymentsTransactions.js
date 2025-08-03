import { GizmoClient } from '../GizmoClient.js';

export class PaymentsTransactions {
    constructor(client) {
        this.client = client;
    }
    getPaymentsTransactions(params = {}) {
        return this.client.request('get', '/v3.0/payments/transactions', {}, params);
    }
}
