import { GizmoClient } from '../GizmoClient.js';

export class Assets {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/assets', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/assets/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/assets', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/assets', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/assets/${id}`);
    }
}
