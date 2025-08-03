import { GizmoClient } from '../GizmoClient.js';

export class Productgroups {
    constructor(client) {
        this.client = client;
    }
    getProductgroups(params = {}) {
        return this.client.request('get', '/v3.0/productgroups', {}, params);
    }
    getProductgroupById(id, params = {}) {
        return this.client.request('get', `/v3.0/productgroups/${id}`, {}, params);
    }
    getProductgroupNameExists(name, params = {}) {
        return this.client.request('get', `/v3.0/productgroups/name/${name}/exist`, {}, params);
    }
}
