import { GizmoClient } from '../GizmoClient.js';

export class Service {
    constructor(client) {
        this.client = client;
    }
    getInfo() {
        return this.client.request('get', '/v2.0/service');
    }
    getVersion() {
        return this.client.request('get', '/v2.0/service/version');
    }
}
