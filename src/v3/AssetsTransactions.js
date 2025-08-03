import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing asset transactions.
 */
export class AssetsTransactions {
    /**
     * Create an instance of AssetsTransactions.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of asset transactions.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of asset transactions
     */
    getAssetTransactions(params = {}) {
        return this.client.request('get', '/v3.0/assettransactions', {}, params);
    }

    /**
     * Get asset transaction by ID.
     * @param {number|string} id - Asset transaction ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Asset transaction details
     */
    getAssetTransactionById(id, params = {}) {
        return this.client.request('get', `/v3.0/assettransactions/${id}`, {}, params);
    }
}
