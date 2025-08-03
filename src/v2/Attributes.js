import { GizmoClient } from '../GizmoClient.js';

export class Attributes {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/attributes', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/attributes/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/attributes', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/attributes', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/attributes/${id}`);
    }
}
