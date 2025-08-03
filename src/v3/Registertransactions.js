import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing register transactions operations.
 */
export class Registertransactions {
    /**
     * Create a Registertransactions instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of register transactions.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of register transactions
     */
    getRegistertransactions(params = {}) {
        return this.client.request('get', '/v3.0/registertransactions', {}, params);
    }

    /**
     * Get register transaction by ID.
     * @param {number|string} id - Transaction ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Register transaction details
     */
    getRegistertransactionById(id, params = {}) {
        return this.client.request('get', `/v3.0/registertransactions/${id}`, {}, params);
    }
}
