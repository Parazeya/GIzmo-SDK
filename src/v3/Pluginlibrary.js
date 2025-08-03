import { GizmoClient } from '../GizmoClient.js';

export class Pluginlibrary {
    constructor(client) {
        this.client = client;
    }
    getPluginlibrary(params = {}) {
        return this.client.request('get', '/v3.0/pluginlibrary', {}, params);
    }
}
