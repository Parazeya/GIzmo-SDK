import { GizmoClient } from '../GizmoClient.js';

export class Notifications {
    constructor(client) {
        this.client = client;
    }
    getNotifications(params = {}) {
        return this.client.request('get', '/v3.0/notifications', {}, params);
    }
    getNotificationById(id, params = {}) {
        return this.client.request('get', `/v3.0/notifications/${id}`, {}, params);
    }
    getNotificationsTimedRemaining(params = {}) {
        return this.client.request('get', '/v3.0/notifications/timed/remaining', {}, params);
    }
    getNotificationsTimedReservation(params = {}) {
        return this.client.request('get', '/v3.0/notifications/timed/reservation', {}, params);
    }
    enableNotification(id, params = {}) {
        return this.client.request('get', `/v3.0/notifications/${id}/enable`, {}, params);
    }
    disableNotification(id, params = {}) {
        return this.client.request('get', `/v3.0/notifications/${id}/disable`, {}, params);
    }
}
