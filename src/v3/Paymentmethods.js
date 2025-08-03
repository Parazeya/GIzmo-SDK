import { GizmoClient } from '../GizmoClient.js';

export class Paymentmethods {
    constructor(client) {
        this.client = client;
    }
    getPaymentmethods(params = {}) {
        return this.client.request('get', '/v3.0/paymentmethods', {}, params);
    }
    getPaymentmethodById(id, params = {}) {
        return this.client.request('get', `/v3.0/paymentmethods/${id}`, {}, params);
    }
    getPaymentmethodNameExists(name, params = {}) {
        return this.client.request('get', `/v3.0/paymentmethods/name/${name}/exist`, {}, params);
    }
}
