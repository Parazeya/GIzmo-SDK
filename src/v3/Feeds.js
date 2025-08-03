import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing the feeds.
 */
export class Feeds {
    /**
     * Create a feeds instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of feeds.
     * @param {Object} params - Query parameters
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>} List of feeds
     */
    getFeeds(params = {}) {
        return this.client.request('get', '/v3.0/feeds', {}, params);
    }

    /**
     * Get feed by ID.
     * @param {number|string} id - Feed ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Feed details
     */
    getFeedById(id, params = {}) {
        return this.client.request('get', `/v3.0/feeds/${id}`, {}, params);
    }
}
