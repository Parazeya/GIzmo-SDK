import { GizmoClient } from '../GizmoClient.js';

export class Hosticons {
    constructor(client) {
        this.client = client;
    }
    getHosticons(params = {}) {
        return this.client.request('get', '/v3.0/hosticons', {}, params);
    }
    getHosticonById(id, params = {}) {
        return this.client.request('get', `/v3.0/hosticons/${id}`, {}, params);
    }
}
