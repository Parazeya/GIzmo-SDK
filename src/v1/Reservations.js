import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for reservation operations.
 */
export class Reservations {
    /**
     * Create a Reservations instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all reservations.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of reservations
     */
    getReservations(params = {}) {
        return this.client.request('get', '/reservations', {}, params);
    }
    /**
     * Get reservation by ID.
     * @param {number|string} reservationId - Reservation ID
     * @returns {Promise<any>} Reservation details
     */
    getReservationById(reservationId) {
        return this.client.request('get', `/reservations/${reservationId}`);
    }
    /**
     * Add a new reservation.
     * @param {Object} data - Reservation data
     * @returns {Promise<any>} Added reservation
     */
    addReservation(data) {
        return this.client.request('put', '/reservations', data);
    }
    /**
     * Update a reservation.
     * @param {Object} data - Reservation data
     * @returns {Promise<any>} Updated reservation
     */
    updateReservation(data) {
        return this.client.request('post', '/reservations', data);
    }
    /**
     * Set reservation status.
     * @param {number|string} reservationId - Reservation ID
     * @param {string} status - Status value
     * @returns {Promise<any>} Status result
     */
    setReservationStatus(reservationId, status) {
        return this.client.request('post', `/reservations/${reservationId}/status/${status}`);
    }
    /**
     * Add user to reservation.
     * @param {number|string} reservationId - Reservation ID
     * @param {number|string} userId - User ID
     * @returns {Promise<any>} Add result
     */
    addUserToReservation(reservationId, userId) {
        return this.client.request('put', `/reservations/${reservationId}/users/${userId}`);
    }
    /**
     * Remove user from reservation.
     * @param {number|string} reservationId - Reservation ID
     * @param {number|string} userId - User ID
     * @returns {Promise<any>} Remove result
     */
    removeUserFromReservation(reservationId, userId) {
        return this.client.request('delete', `/reservations/${reservationId}/users/${userId}`);
    }
    /**
     * Add host to reservation.
     * @param {number|string} reservationId - Reservation ID
     * @param {number|string} hostId - Host ID
     * @returns {Promise<any>} Add result
     */
    addHostToReservation(reservationId, hostId) {
        return this.client.request('put', `/reservations/${reservationId}/hosts/${hostId}`);
    }
    /**
     * Remove host from reservation.
     * @param {number|string} reservationId - Reservation ID
     * @param {number|string} hostId - Host ID
     * @returns {Promise<any>} Remove result
     */
    removeHostFromReservation(reservationId, hostId) {
        return this.client.request('delete', `/reservations/${reservationId}/hosts/${hostId}`);
    }
}
