import { GizmoClient } from '../GizmoClient.js';

export class Hosts {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/hosts', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/hosts/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/hosts', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/hosts', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/hosts/${id}`);
    }
}
