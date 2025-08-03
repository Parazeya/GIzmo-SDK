import { GizmoClient } from '../GizmoClient.js';

export class Billingprofiles {
    constructor(client) {
        this.client = client;
    }
    getBillingprofiles(params = {}) {
        return this.client.request('get', '/v3.0/billingprofiles', {}, params);
    }
    getBillingprofileById(id, params = {}) {
        return this.client.request('get', `/v3.0/billingprofiles/${id}`, {}, params);
    }
    getBillingprofileRates(id, params = {}) {
        return this.client.request('get', `/v3.0/billingprofiles/${id}/rates`, {}, params);
    }
}
