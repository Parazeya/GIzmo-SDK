import { GizmoClient } from '../GizmoClient.js';

export class Inventoryadjustmentreasons {
    constructor(client) {
        this.client = client;
    }
    getInventoryadjustmentreasons(params = {}) {
        return this.client.request('get', '/v3.0/inventoryadjustmentreasons', {}, params);
    }
    getInventoryadjustmentreasonById(id, params = {}) {
        return this.client.request('get', `/v3.0/inventoryadjustmentreasons/${id}`, {}, params);
    }
    undeleteInventoryadjustmentreason(id, params = {}) {
        return this.client.request('get', `/v3.0/inventoryadjustmentreasons/${id}/undelete`, {}, params);
    }
    getInventoryadjustmentreasonNameExists(name, params = {}) {
        return this.client.request('get', `/v3.0/inventoryadjustmentreasons/name/${name}/exists`, {}, params);
    }
}
