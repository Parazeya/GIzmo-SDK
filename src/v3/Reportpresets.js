import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing report presets operations.
 */
export class Reportpresets {
    /**
     * Create a Reportpresets instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of report presets.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of report presets
     */
    getReportpresets(params = {}) {
        return this.client.request('get', '/v3.0/reportpresets', {}, params);
    }

    /**
     * Get report preset by ID.
     * @param {number|string} id - Report preset ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Report preset details
     */
    getReportpresetById(id, params = {}) {
        return this.client.request('get', `/v3.0/reportpresets/${id}`, {}, params);
    }

    /**
     * Set display order for report preset.
     * @param {number|string} id - Report preset ID
     * @param {number} displayOrder - Display order value
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Set result
     */
    setReportpresetDisplayOrder(id, displayOrder, params = {}) {
        return this.client.request('get', `/v3.0/reportpresets/${id}/displayorder/${displayOrder}`, {}, params);
    }

    /**
     * Set name for report preset.
     * @param {number|string} id - Report preset ID
     * @param {string} name - Name value
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Set result
     */
    setReportpresetName(id, name, params = {}) {
        return this.client.request('get', `/v3.0/reportpresets/${id}/name/${name}`, {}, params);
    }

    /**
     * Check if report preset name exists.
     * @param {string} name - Name value
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Existence result
     */
    getReportpresetNameExists(name, params = {}) {
        return this.client.request('get', `/v3.0/reportpresets/name/${name}/exist`, {}, params);
    }
}
