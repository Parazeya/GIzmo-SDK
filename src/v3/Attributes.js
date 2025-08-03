import { GizmoClient } from '../GizmoClient.js';

export class Attributes {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of attributes.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getAttributes(params = {}) {
        return this.client.request('get', '/v3.0/attributes', {}, params);
    }
    /**
     * Get attribute by ID.
     * @param {number|string} id - Attribute ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getAttributeById(id, params = {}) {
        return this.client.request('get', `/v3.0/attributes/${id}`, {}, params);
    }
}
