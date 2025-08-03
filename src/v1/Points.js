import { GizmoClient } from '../GizmoClient.js';

export class Points {
    constructor(client) {
        this.client = client;
    }
    getPointsTransactions() {
        return this.client.request('get', '/points');
    }
    resetAllPoints() {
        return this.client.request('post', '/points/reset');
    }
    resetUserPoints(userId) {
        return this.client.request('post', `/points/${userId}/reset`);
    }
    setAllUsersPoints(amount) {
        return this.client.request('post', `/points/${amount}`);
    }
    setUserPoints(userId, amount) {
        return this.client.request('post', `/points/${userId}/${amount}`);
    }
}
