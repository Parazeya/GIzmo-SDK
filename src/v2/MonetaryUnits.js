import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for monetary unit operations.
 */
export class MonetaryUnits {
    /**
     * Create a MonetaryUnits instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all monetary units.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of monetary units
     */
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/monetaryunits', {}, params);
    }
    /**
     * Get monetary unit by ID.
     * @param {number|string} id - Monetary unit ID
     * @returns {Promise<any>} Monetary unit details
     */
    getById(id) {
        return this.client.request('get', `/v2.0/monetaryunits/${id}`);
    }
    /**
     * Create a new monetary unit.
     * @param {Object} data - Monetary unit data
     * @returns {Promise<any>} Created monetary unit
     */
    create(data) {
        return this.client.request('post', '/v2.0/monetaryunits', data);
    }
    /**
     * Update a monetary unit.
     * @param {Object} data - Monetary unit data
     * @returns {Promise<any>} Updated monetary unit
     */
    update(data) {
        return this.client.request('put', '/v2.0/monetaryunits', data);
    }
    /**
     * Delete a monetary unit by ID.
     * @param {number|string} id - Monetary unit ID
     * @returns {Promise<any>} Delete result
     */
    delete(id) {
        return this.client.request('delete', `/v2.0/monetaryunits/${id}`);
    }
}
