import { GizmoClient } from '../GizmoClient.js';

export class Applicationtasks {
    constructor(client) {
        this.client = client;
    }
    getApplicationtasks(params = {}) {
        return this.client.request('get', '/v3.0/applicationtasks', {}, params);
    }
    getApplicationtaskById(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationtasks/${id}`, {}, params);
    }
    getApplicationtaskUsages(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationtasks/${id}/usages`, {}, params);
    }
    unassignApplicationtask(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationtasks/${id}/unassign`, {}, params);
    }
}
