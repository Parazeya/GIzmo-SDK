import { GizmoClient } from '../GizmoClient.js';

export class ApplicationPersonalFiles {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/applicationpersonalfiles', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/applicationpersonalfiles/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/applicationpersonalfiles', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/applicationpersonalfiles', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/applicationpersonalfiles/${id}`);
    }
}
