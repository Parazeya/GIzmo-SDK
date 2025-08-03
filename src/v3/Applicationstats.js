import { GizmoClient } from '../GizmoClient.js';

export class Applicationstats {
    constructor(client) {
        this.client = client;
    }
    getApplicationstats(params = {}) {
        return this.client.request('get', '/v3.0/applicationstats', {}, params);
    }
    getApplicationstatsAppExe(appExeId, params = {}) {
        return this.client.request('get', `/v3.0/applicationstats/appexe/${appExeId}`, {}, params);
    }
}
