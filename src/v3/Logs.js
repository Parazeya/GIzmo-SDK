import { GizmoClient } from '../GizmoClient.js';

export class Logs {
    constructor(client) {
        this.client = client;
    }
    getLogs(params = {}) {
        return this.client.request('get', '/v3.0/logs', {}, params);
    }
    getLogById(id, params = {}) {
        return this.client.request('get', `/v3.0/logs/${id}`, {}, params);
    }
    getLogException(id, params = {}) {
        return this.client.request('get', `/v3.0/logs/${id}/exception`, {}, params);
    }
    clearLogs(params = {}) {
        return this.client.request('get', '/v3.0/logs/clear', {}, params);
    }
}
