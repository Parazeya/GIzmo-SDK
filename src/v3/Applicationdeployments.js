import { GizmoClient } from '../GizmoClient.js';

export class Applicationdeployments {
    constructor(client) {
        this.client = client;
    }
    getApplicationdeployments(params = {}) {
        return this.client.request('get', '/v3.0/applicationdeployments', {}, params);
    }
    getApplicationdeploymentById(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationdeployments/${id}`, {}, params);
    }
    getApplicationdeploymentUsages(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationdeployments/${id}/usages`, {}, params);
    }
    unassignApplicationdeployment(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationdeployments/${id}/unassign`, {}, params);
    }
}
