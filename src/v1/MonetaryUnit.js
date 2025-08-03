import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for monetary unit operations.
 */
export class MonetaryUnit {
    /**
     * Create a MonetaryUnit instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all monetary units.
     * @returns {Promise<any>} List of monetary units
     */
    getMonetaryUnits() {
        return this.client.request('get', '/monetaryunit');
    }
    /**
     * Add a new monetary unit.
     * @param {Object} data - Monetary unit data
     * @returns {Promise<any>} Added monetary unit
     */
    addMonetaryUnit(data) {
        return this.client.request('put', '/monetaryunit', data);
    }
    /**
     * Update a monetary unit.
     * @param {Object} data - Monetary unit data
     * @returns {Promise<any>} Updated monetary unit
     */
    updateMonetaryUnit(data) {
        return this.client.request('post', '/monetaryunit', data);
    }
    /**
     * Delete a monetary unit by ID.
     * @param {number|string} monetaryUnitId - Monetary unit ID
     * @returns {Promise<any>} Delete result
     */
    deleteMonetaryUnit(monetaryUnitId) {
        return this.client.request('delete', `/monetaryunit/${monetaryUnitId}`);
    }
}
