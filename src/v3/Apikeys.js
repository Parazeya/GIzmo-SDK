import { GizmoClient } from '../GizmoClient.js';

export class Apikeys {
    constructor(client) {
        this.client = client;
    }
    getApikeys(params = {}) {
        return this.client.request('get', '/v3.0/apikeys', {}, params);
    }
    getApikeyById(id, params = {}) {
        return this.client.request('get', `/v3.0/apikeys/${id}`, {}, params);
    }
    undeleteApikey(id, params = {}) {
        return this.client.request('get', `/v3.0/apikeys/${id}/undelete`, {}, params);
    }
    enableApikey(id, params = {}) {
        return this.client.request('get', `/v3.0/apikeys/${id}/enable`, {}, params);
    }
    disableApikey(id, params = {}) {
        return this.client.request('get', `/v3.0/apikeys/${id}/disable`, {}, params);
    }
}
