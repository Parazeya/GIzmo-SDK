import { GizmoClient } from '../GizmoClient.js';

export class ApplicationLicenses {
    constructor(client) {
        this.client = client;
    }
    getApplicationlicenses(params = {}) {
        return this.client.request('get', '/v3.0/applicationlicenses', {}, params);
    }
    getApplicationlicenseById(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationlicenses/${id}`, {}, params);
    }
}
