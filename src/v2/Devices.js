import { GizmoClient } from '../GizmoClient.js';

export class Devices {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/devices', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/devices/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/devices', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/devices', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/devices/${id}`);
    }
}
