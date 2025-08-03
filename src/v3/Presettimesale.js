import { GizmoClient } from '../GizmoClient.js';

export class Presettimesale {
    constructor(client) {
        this.client = client;
    }
    getPresettimesale(params = {}) {
        return this.client.request('get', '/v3.0/presettimesale', {}, params);
    }
    getPresettimesaleById(id, params = {}) {
        return this.client.request('get', `/v3.0/presettimesale/${id}`, {}, params);
    }
}
