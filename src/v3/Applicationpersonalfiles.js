import { GizmoClient } from '../GizmoClient.js';

export class Applicationpersonalfiles {
    constructor(client) {
        this.client = client;
    }
    getApplicationpersonalfiles(params = {}) {
        return this.client.request('get', '/v3.0/applicationpersonalfiles', {}, params);
    }
    getApplicationpersonalfileById(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationpersonalfiles/${id}`, {}, params);
    }
    getApplicationpersonalfileUsages(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationpersonalfiles/${id}/usages`, {}, params);
    }
    unassignApplicationpersonalfile(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationpersonalfiles/${id}/unassign`, {}, params);
    }
}
