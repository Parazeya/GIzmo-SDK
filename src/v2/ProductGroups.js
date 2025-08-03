import { GizmoClient } from '../GizmoClient.js';

export class ProductGroups {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/productgroups', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/productgroups/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/productgroups', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/productgroups', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/productgroups/${id}`);
    }

    // Работа с приложениями внутри группы
    getApplications(id, params = {}) {
        return this.client.request('get', `/v2.0/productgroups/${id}/applications`, {}, params);
    }
    addApplication(id, data) {
        return this.client.request('post', `/v2.0/productgroups/${id}/applications`, data);
    }
    deleteApplication(id, applicationId) {
        return this.client.request('delete', `/v2.0/productgroups/${id}/applications/${applicationId}`);
    }
}
