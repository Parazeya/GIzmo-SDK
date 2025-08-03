import { GizmoClient } from '../GizmoClient.js';

export class Presetreservationtime {
    constructor(client) {
        this.client = client;
    }
    getPresetreservationtime(params = {}) {
        return this.client.request('get', '/v3.0/presetreservationtime', {}, params);
    }
    getPresetreservationtimeById(id, params = {}) {
        return this.client.request('get', `/v3.0/presetreservationtime/${id}`, {}, params);
    }
}
