import { GizmoClient } from '../GizmoClient.js';

export class Stats {
    constructor(client) {
        this.client = client;
    }
    getSessionStats() {
        return this.client.request('get', '/stats/session');
    }
    getUniqueUserLogins() {
        return this.client.request('get', '/stats/user/logins/unique');
    }
    getUserLogins() {
        return this.client.request('get', '/stats/user/logins');
    }
    getHostUseStats() {
        return this.client.request('get', '/stats/host/use');
    }
    getHostGroupUseStats(hostGroupName) {
        return this.client.request('get', `/stats/host/${hostGroupName}/use`);
    }
    getHostGroupUserGroupUseStats(hostGroupName, userGroupName) {
        return this.client.request('get', `/stats/host/${hostGroupName}/${userGroupName}/use`);
    }
    getHostGroupIdUserGroupIdUseStats(hostGroupId, userGroupId) {
        return this.client.request('get', `/stats/host/${hostGroupId}/${userGroupId}/use`);
    }
}
