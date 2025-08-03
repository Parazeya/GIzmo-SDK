import { GizmoClient } from '../GizmoClient.js';

export class Presettimesalemoney {
    constructor(client) {
        this.client = client;
    }
    getPresettimesalemoney(params = {}) {
        return this.client.request('get', '/v3.0/presettimesalemoney', {}, params);
    }
    getPresettimesalemoneyById(id, params = {}) {
        return this.client.request('get', `/v3.0/presettimesalemoney/${id}`, {}, params);
    }
}
