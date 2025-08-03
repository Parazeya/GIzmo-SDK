import { GizmoClient } from '../GizmoClient.js';

export class Applicationlinks {
    constructor(client) {
        this.client = client;
    }
    getApplicationlinks(params = {}) {
        return this.client.request('get', '/v3.0/applicationlinks', {}, params);
    }
    getApplicationlinkById(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationlinks/${id}`, {}, params);
    }
}
