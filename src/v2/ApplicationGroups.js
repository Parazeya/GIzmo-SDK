import { GizmoClient } from '../GizmoClient.js';

export class ApplicationGroups {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/applicationgroups', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/applicationgroups/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/applicationgroups', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/applicationgroups', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/applicationgroups/${id}`);
    }

    // Работа с приложениями внутри группы
    getApplications(id, params = {}) {
        return this.client.request('get', `/v2.0/applicationgroups/${id}/applications`, {}, params);
    }
    addApplication(id, data) {
        return this.client.request('post', `/v2.0/applicationgroups/${id}/applications`, data);
    }
    deleteApplication(id, applicationId) {
        return this.client.request('delete', `/v2.0/applicationgroups/${id}/applications/${applicationId}`);
    }
}
