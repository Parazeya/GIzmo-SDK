import { GizmoClient } from '../GizmoClient.js';

export class Reservations {
    constructor(client) {
        this.client = client;
    }
    getReservations(params = {}) {
        return this.client.request('get', '/reservations', {}, params);
    }
    getReservationById(reservationId) {
        return this.client.request('get', `/reservations/${reservationId}`);
    }
    addReservation(data) {
        return this.client.request('put', '/reservations', data);
    }
    updateReservation(data) {
        return this.client.request('post', '/reservations', data);
    }
    setReservationStatus(reservationId, status) {
        return this.client.request('post', `/reservations/${reservationId}/status/${status}`);
    }
    addUserToReservation(reservationId, userId) {
        return this.client.request('put', `/reservations/${reservationId}/users/${userId}`);
    }
    removeUserFromReservation(reservationId, userId) {
        return this.client.request('delete', `/reservations/${reservationId}/users/${userId}`);
    }
    addHostToReservation(reservationId, hostId) {
        return this.client.request('put', `/reservations/${reservationId}/hosts/${hostId}`);
    }
    removeHostFromReservation(reservationId, hostId) {
        return this.client.request('delete', `/reservations/${reservationId}/hosts/${hostId}`);
    }
}
