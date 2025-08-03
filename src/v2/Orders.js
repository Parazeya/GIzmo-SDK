import { GizmoClient } from '../GizmoClient.js';

export class Orders {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/orders', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/orders/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/orders', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/orders', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/orders/${id}`);
    }

    // Invoice
    createInvoice(id, data) {
        return this.client.request('post', `/v2.0/orders/${id}/invoice`, data);
    }

    // Complete
    complete(id, data) {
        return this.client.request('put', `/v2.0/orders/${id}/complete`, data);
    }

    // Cancel
    cancel(id, data) {
        return this.client.request('put', `/v2.0/orders/${id}/cancel`, data);
    }

    // Delivered
    getDelivered(id) {
        return this.client.request('get', `/v2.0/orders/${id}/delivered`);
    }
    setDelivered(id, data) {
        return this.client.request('put', `/v2.0/orders/${id}/delivered`, data);
    }

    // OrderLines Delivered
    getOrderLineDelivered(id, orderLineId) {
        return this.client.request('get', `/v2.0/orders/${id}/orderlines/${orderLineId}/delivered`);
    }
    setOrderLineDelivered(id, orderLineId, data) {
        return this.client.request('put', `/v2.0/orders/${id}/orderlines/${orderLineId}/delivered`, data);
    }
}
