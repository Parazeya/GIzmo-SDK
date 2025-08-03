import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing discounts.
 */
export class Discounts {
    /**
     * Create a Discounts instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of discounts.
     * @param {Object} params - Query parameters
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>} List of discounts
     */
    getDiscounts(params = {}) {
        return this.client.request('get', '/v3.0/discounts', {}, params);
    }

    /**
     * Get discount by ID.
     * @param {number|string} id - Discount ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Discount details
     */
    getDiscountById(id, params = {}) {
        return this.client.request('get', `/v3.0/discounts/${id}`, {}, params);
    }

    /**
     * Get discount name.
     * @param {number|string} id - Discount ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Discount name
     */
    getDiscountName(id, params = {}) {
        return this.client.request('get', `/v3.0/discounts/${id}/name`, {}, params);
    }

    /**
     * Get discount description.
     * @param {number|string} id - Discount ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Discount description
     */
    getDiscountDescription(id, params = {}) {
        return this.client.request('get', `/v3.0/discounts/${id}/description`, {}, params);
    }
}
