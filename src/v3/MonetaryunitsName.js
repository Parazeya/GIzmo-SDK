import { GizmoClient } from '../GizmoClient.js';

export class MonetaryunitsName {
    constructor(client) {
        this.client = client;
    }
    getMonetaryunitNameExists(name, params = {}) {
        return this.client.request('get', `/v3.0/monetaryunits/name/${name}/exist`, {}, params);
    }
}
