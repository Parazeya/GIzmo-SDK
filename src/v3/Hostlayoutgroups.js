import { GizmoClient } from '../GizmoClient.js';

export class Hostlayoutgroups {
    constructor(client) {
        this.client = client;
    }
    getHostlayoutgroups(params = {}) {
        return this.client.request('get', '/v3.0/hostlayoutgroups', {}, params);
    }
    getHostlayoutgroupById(id, params = {}) {
        return this.client.request('get', `/v3.0/hostlayoutgroups/${id}`, {}, params);
    }
    getHostlayoutgroupLayouts(id, params = {}) {
        return this.client.request('get', `/v3.0/hostlayoutgroups/${id}/layouts`, {}, params);
    }
}
