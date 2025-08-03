import { GizmoClient } from '../GizmoClient.js';

export class Licenses {
    constructor(client) {
        this.client = client;
    }
    getReservedKeysInfo() {
        return this.client.request('get', '/licenses/keys/reserved/info');
    }
}
