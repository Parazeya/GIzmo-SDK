import { GizmoClient } from '../GizmoClient.js';

export class BillingProfiles {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/billingprofiles', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/billingprofiles/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/billingprofiles', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/billingprofiles', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/billingprofiles/${id}`);
    }
}
