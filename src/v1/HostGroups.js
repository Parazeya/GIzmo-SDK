import { GizmoClient } from '../GizmoClient.js';

export class HostGroups {
    constructor(client) {
        this.client = client;
    }
    getHostGroups() {
        return this.client.request('get', '/hostgroups');
    }
    getHostGroupById(hostGroupId) {
        return this.client.request('get', `/hostgroups/${hostGroupId}`);
    }
    getDisallowedUserGroups(hostGroupId) {
        return this.client.request('get', `/hostgroups/${hostGroupId}/disallowedusergroups`);
    }
}
