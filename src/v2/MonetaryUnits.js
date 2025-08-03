import { GizmoClient } from '../GizmoClient.js';

export class MonetaryUnits {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/monetaryunits', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/monetaryunits/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/monetaryunits', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/monetaryunits', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/monetaryunits/${id}`);
    }
}
