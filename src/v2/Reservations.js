import { GizmoClient } from '../GizmoClient.js';

export class Reservations {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/reservations', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/reservations/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/reservations', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/reservations', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/reservations/${id}`);
    }
}
