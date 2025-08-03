import { GizmoClient } from '../GizmoClient.js';

export class Branches {
    constructor(client) {
        this.client = client;
    }
    getBranches(params = {}) {
        return this.client.request('get', '/v3.0/branches', {}, params);
    }
    getBranchById(id, params = {}) {
        return this.client.request('get', `/v3.0/branches/${id}`, {}, params);
    }
    getBranchTimezone(branchId, params = {}) {
        return this.client.request('get', `/v3.0/branches/${branchId}/timezone`, {}, params);
    }
}
