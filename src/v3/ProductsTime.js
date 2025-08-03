import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing time-related product operations.
 */
export class ProductsTime {
    /**
     * Create a ProductsTime instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get usage availability for a time product.
     * @param {number|string} id - Time product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Usage availability
     */
    getProductsTimeUsageAvailability(id, params = {}) {
        return this.client.request('get', `/v3.0/products/time/${id}/usageavailability`, {}, params);
    }

    /**
     * Get disallowed host groups for a time product.
     * @param {number|string} id - Time product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Disallowed host groups
     */
    getProductsTimeDisallowedHostGroups(id, params = {}) {
        return this.client.request('get', `/v3.0/products/time/${id}/disallowedhostgroups`, {}, params);
    }
}
