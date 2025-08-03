import { GizmoClient } from '../GizmoClient.js';

export class UserGroups {
    constructor(client) {
        this.client = client;
    }
    getUserGroups() {
        return this.client.request('get', '/usergroups');
    }
    addUserGroup(data) {
        return this.client.request('put', '/usergroups', data);
    }
    updateUserGroup(data) {
        return this.client.request('post', '/usergroups', data);
    }
    deleteUserGroup(userGroupId) {
        return this.client.request('delete', `/usergroups/${userGroupId}`);
    }
    getDisallowedHost(userGroupId) {
        return this.client.request('get', `/usergroups/${userGroupId}/disallowedhost`);
    }
    getDisallowedHostGroup(userGroupId, hostGroupId) {
        return this.client.request('get', `/usergroups/${userGroupId}/disallowedhost/${hostGroupId}`);
    }
    setDisallowedHostGroup(userGroupId, hostGroupId, disallow) {
        return this.client.request('put', `/usergroups/${userGroupId}/disallowedhost/${hostGroupId}/${disallow}`);
    }
}
