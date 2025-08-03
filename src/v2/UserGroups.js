import { GizmoClient } from '../GizmoClient.js';

export class UserGroups {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/usergroups', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/usergroups/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/usergroups', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/usergroups', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/usergroups/${id}`);
    }

    // Disallowed Host Groups
    getDisallowedHostGroups(id, params = {}) {
        return this.client.request('get', `/v2.0/usergroups/${id}/disallowedhostgroups`, {}, params);
    }
    addDisallowedHostGroup(id, data) {
        return this.client.request('post', `/v2.0/usergroups/${id}/disallowedhostgroups`, data);
    }
    updateDisallowedHostGroups(data) {
        return this.client.request('put', '/v2.0/usergroups/disallowedhostgroups', data);
    }
    deleteDisallowedHostGroup(id, userGroupDisallowedHostGroupId) {
        return this.client.request('delete', `/v2.0/usergroups/${id}/disallowedhostgroups/${userGroupDisallowedHostGroupId}`);
    }
}
