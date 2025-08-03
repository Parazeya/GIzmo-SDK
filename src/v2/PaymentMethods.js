import { GizmoClient } from '../GizmoClient.js';

export class PaymentMethods {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/paymentmethods', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/paymentmethods/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/paymentmethods', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/paymentmethods', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/paymentmethods/${id}`);
    }
}
