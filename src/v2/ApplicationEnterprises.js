import { GizmoClient } from '../GizmoClient.js';

export class ApplicationEnterprises {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/applicationenterprises', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/applicationenterprises/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/applicationenterprises', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/applicationenterprises', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/applicationenterprises/${id}`);
    }
}
