import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing a stock service.
 */
export class Stock {
    /**
     * Create a stock service instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of stock items.
     * @param {Object} params - Query parameters
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>} List of stock items
     */
    getStock(params = {}) {
        return this.client.request('get', '/v3.0/stock', {}, params);
    }

    /**
     * Get stock item by ID.
     * @param {number|string} id - Stock ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Stock item details
     */
    getStockById(id, params = {}) {
        return this.client.request('get', `/v3.0/stock/${id}`, {}, params);
    }
}
