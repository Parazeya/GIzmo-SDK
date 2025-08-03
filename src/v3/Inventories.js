import { GizmoClient } from '../GizmoClient.js';

export class Inventories {
    constructor(client) {
        this.client = client;
    }
    getInventories(params = {}) {
        return this.client.request('get', '/v3.0/inventories', {}, params);
    }
    getInventoryEntries(id, params = {}) {
        return this.client.request('get', `/v3.0/inventories/${id}/entries`, {}, params);
    }
    getInventoriesInbound(params = {}) {
        return this.client.request('get', '/v3.0/inventories/inbound', {}, params);
    }
    getInventoriesAdjustment(params = {}) {
        return this.client.request('get', '/v3.0/inventories/adjustment', {}, params);
    }
    getInventoriesTransfer(params = {}) {
        return this.client.request('get', '/v3.0/inventories/transfer', {}, params);
    }
    getInventoriesTransferInbound(id, params = {}) {
        return this.client.request('get', `/v3.0/inventories/transfer/${id}/inbound`, {}, params);
    }
}
