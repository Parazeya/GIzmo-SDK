import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing the branches of a feed.
 */
export class FeedsBranches {
    /**
     * Create a FeedsBranches instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get branches for a feed.
     * @param {number|string} id - Feed ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Branches for feed
     */
    getFeedBranches(id, params = {}) {
        return this.client.request('get', `/v3.0/feeds/${id}/branches`, {}, params);
    }
}
