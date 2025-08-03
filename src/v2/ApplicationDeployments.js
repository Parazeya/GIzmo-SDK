import { GizmoClient } from '../GizmoClient.js';

export class ApplicationDeployments {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/applicationdeployments', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/applicationdeployments/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/applicationdeployments', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/applicationdeployments', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/applicationdeployments/${id}`);
    }
}
