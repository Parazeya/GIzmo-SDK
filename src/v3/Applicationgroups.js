import { GizmoClient } from '../GizmoClient.js';

export class Applicationgroups {
    constructor(client) {
        this.client = client;
    }
    getApplicationgroups(params = {}) {
        return this.client.request('get', '/v3.0/applicationgroups', {}, params);
    }
    getApplicationgroupById(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationgroups/${id}`, {}, params);
    }
    getApplicationgroupApplications(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationgroups/${id}/applications`, {}, params);
    }
}
