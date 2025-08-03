import { GizmoClient } from '../GizmoClient.js';

export class MonetaryUnits {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of monetary units.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getMonetaryUnits(params = {}) {
        return this.client.request('get', '/v3.0/monetaryunits', {}, params);
    }
    /**
     * Get monetary unit by ID.
     * @param {number|string} id - Monetary unit ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getMonetaryUnitById(id, params = {}) {
        return this.client.request('get', `/v3.0/monetaryunits/${id}`, {}, params);
    }
}
