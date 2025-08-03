import { GizmoClient } from '../GizmoClient.js';

export class AssetTypes {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/assettypes', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/assettypes/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/assettypes', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/assettypes', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/assettypes/${id}`);
    }
}
