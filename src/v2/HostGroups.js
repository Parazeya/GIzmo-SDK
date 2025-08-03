import { GizmoClient } from '../GizmoClient.js';

export class HostGroups {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/hostgroups', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/hostgroups/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/hostgroups', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/hostgroups', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/hostgroups/${id}`);
    }
}
