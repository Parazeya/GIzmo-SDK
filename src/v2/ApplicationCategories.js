import { GizmoClient } from '../GizmoClient.js';

export class ApplicationCategories {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/applicationcategories', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/applicationcategories/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/applicationcategories', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/applicationcategories', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/applicationcategories/${id}`);
    }
}
