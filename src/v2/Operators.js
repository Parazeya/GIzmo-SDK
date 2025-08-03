import { GizmoClient } from '../GizmoClient.js';

export class Operators {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/operators', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/operators/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/operators', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/operators', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/operators/${id}`);
    }
}
