import { GizmoClient } from '../GizmoClient.js';

export class Paymentproviders {
    constructor(client) {
        this.client = client;
    }
    getPaymentproviders(params = {}) {
        return this.client.request('get', '/v3.0/paymentproviders', {}, params);
    }
    getPaymentproviderByGuid(providerGuid, params = {}) {
        return this.client.request('get', `/v3.0/paymentproviders/${providerGuid}`, {}, params);
    }
    getPaymentproviderOptions(providerGuid, params = {}) {
        return this.client.request('get', `/v3.0/paymentproviders/${providerGuid}/options`, {}, params);
    }
}
