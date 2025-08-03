import { GizmoClient } from '../GizmoClient.js';

export class ApplicationEnterprises {
    constructor(client) {
        this.client = client;
    }
    getApplicationenterprises(params = {}) {
        return this.client.request('get', '/v3.0/applicationenterprises', {}, params);
    }
    getApplicationenterpriseById(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationenterprises/${id}`, {}, params);
    }
}
