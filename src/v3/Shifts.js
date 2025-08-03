import { GizmoClient } from '../GizmoClient.js';

export class Shifts {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of shifts.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getShifts(params = {}) {
        return this.client.request('get', '/v3.0/shifts', {}, params);
    }
    /**
     * Get shift by ID.
     * @param {number|string} id - Shift ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getShiftById(id, params = {}) {
        return this.client.request('get', `/v3.0/shifts/${id}`, {}, params);
    }
    /**
     * End shift.
     * @param {number|string} id - Shift ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    endShift(id, params = {}) {
        return this.client.request('get', `/v3.0/shifts/${id}/end`, {}, params);
    }
    /**
     * Lock shift.
     * @param {number|string} id - Shift ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    lockShift(id, params = {}) {
        return this.client.request('get', `/v3.0/shifts/${id}/lock`, {}, params);
    }
    /**
     * Unlock shift.
     * @param {number|string} id - Shift ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    unlockShift(id, params = {}) {
        return this.client.request('get', `/v3.0/shifts/${id}/unlock`, {}, params);
    }
    /**
     * Get expected shift.
     * @param {number|string} id - Shift ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    expectedShift(id, params = {}) {
        return this.client.request('get', `/v3.0/shifts/${id}/expected`, {}, params);
    }
}
