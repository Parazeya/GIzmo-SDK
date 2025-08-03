import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing age restrictions.
 */
export class Agerestrictions {
    /**
     * Create an instance of Agerestrictions.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of age restrictions.
     * @param {Object} params - Query parameters
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>} List of age restrictions
     */
    getAgerestrictions(params = {}) {
        return this.client.request('get', '/v3.0/agerestrictions', {}, params);
    }

    /**
     * Get age restriction by ID.
     * @param {number|string} id - Age restriction ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Age restriction details
     */
    getAgerestrictionById(id, params = {}) {
        return this.client.request('get', `/v3.0/agerestrictions/${id}`, {}, params);
    }

    /**
     * Login with age restrictions.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Login result
     */
    loginAgerestrictions(params = {}) {
        return this.client.request('get', '/v3.0/agerestrictions/login', {}, params);
    }

    /**
     * Get product age restrictions.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Product age restrictions
     */
    productAgerestrictions(params = {}) {
        return this.client.request('get', '/v3.0/agerestrictions/product', {}, params);
    }
}
