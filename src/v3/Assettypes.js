import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing asset type operations.
 */
export class Assettypes {
    /**
     * Create an Assettypes instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of asset types.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of asset types
     */
    getAssettypes(params = {}) {
        return this.client.request('get', '/v3.0/assettypes', {}, params);
    }

    /**
     * Get asset type by ID.
     * @param {number|string} id - Asset type ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Asset type details
     */
    getAssettypeById(id, params = {}) {
        return this.client.request('get', `/v3.0/assettypes/${id}`, {}, params);
    }
}
