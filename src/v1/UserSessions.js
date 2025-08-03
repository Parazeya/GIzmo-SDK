import { GizmoClient } from '../GizmoClient.js';

export class UserSessions {
    constructor(client) {
        this.client = client;
    }
    getUserSessions() {
        return this.client.request('get', '/usersessions');
    }
    getActiveUserSessions() {
        return this.client.request('get', '/usersessions/active');
    }
    getActiveUserSessionsInfo() {
        return this.client.request('get', '/usersessions/activeinfo');
    }
}
