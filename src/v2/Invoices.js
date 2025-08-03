import { GizmoClient } from '../GizmoClient.js';

export class Invoices {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/invoices', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/invoices/${id}`);
    }
}
