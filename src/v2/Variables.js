import { GizmoClient } from '../GizmoClient.js';

export class Variables {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/variables', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/variables/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/variables', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/variables', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/variables/${id}`);
    }
}
