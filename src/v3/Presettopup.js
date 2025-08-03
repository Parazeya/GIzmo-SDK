import { GizmoClient } from '../GizmoClient.js';

export class Presettopup {
    constructor(client) {
        this.client = client;
    }
    getPresettopup(params = {}) {
        return this.client.request('get', '/v3.0/presettopup', {}, params);
    }
    getPresettopupById(id, params = {}) {
        return this.client.request('get', `/v3.0/presettopup/${id}`, {}, params);
    }
}
