import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing asset-related operations.
 */
export class Assets {
    /**
     * Create an instance of Assets.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of assets.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of assets
     */
    getAssets(params = {}) {
        return this.client.request('get', '/v3.0/assets', {}, params);
    }

    /**
     * Get asset by ID.
     * @param {number|string} id - Asset ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Asset details
     */
    getAssetById(id, params = {}) {
        return this.client.request('get', `/v3.0/assets/${id}`, {}, params);
    }

    /**
     * Check if asset exists by RFID.
     * @param {string} rfid - RFID value
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Existence result
     */
    getAssetByRfid(rfid, params = {}) {
        return this.client.request('get', `/v3.0/assets/rfid/${rfid}/exist`, {}, params);
    }
}
