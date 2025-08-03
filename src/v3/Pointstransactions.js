import { GizmoClient } from '../GizmoClient.js';

export class Pointstransactions {
    constructor(client) {
        this.client = client;
    }
    getPointstransactions(params = {}) {
        return this.client.request('get', '/v3.0/pointstransactions', {}, params);
    }
    getPointstransactionById(id, params = {}) {
        return this.client.request('get', `/v3.0/pointstransactions/${id}`, {}, params);
    }
}
