import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing reservations.
 */
export class Reservations {
    /**
     * Create a reservation instance.
     * @param {GizmoClient} client - The Gizmo client instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of reservations.
     * @param {Object} params - Query parameters
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>} List of reservations
     */
    getReservations(params = {}) {
        return this.client.request('get', '/v3.0/reservations', {}, params);
    }

    /**
     * Get reservation by ID.
     * @param {number|string} id - Reservation ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Reservation details
     */
    getReservationById(id, params = {}) {
        return this.client.request('get', `/v3.0/reservations/${id}`, {}, params);
    }

    /**
     * Cancel reservation.
     * @param {number|string} id - Reservation ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Cancel result
     */
    cancelReservation(id, params = {}) {
        return this.client.request('get', `/v3.0/reservations/${id}/cancel`, {}, params);
    }

    /**
     * Complete reservation.
     * @param {number|string} id - Reservation ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Complete result
     */
    completeReservation(id, params = {}) {
        return this.client.request('get', `/v3.0/reservations/${id}/complete`, {}, params);
    }
}
