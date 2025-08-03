import { GizmoClient } from '../GizmoClient.js';

export class ProductsGroups {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of product groups.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @param {string} [params.name] - Filter by name
     * @returns {Promise<any>}
     */
    getProductGroups(params = {}) {
        return this.client.request('get', '/v3.0/productgroups', {}, params);
    }
    /**
     * Get product group by ID.
     * @param {number|string} id - Product group ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getProductGroupById(id, params = {}) {
        return this.client.request('get', `/v3.0/productgroups/${id}`, {}, params);
    }
}
