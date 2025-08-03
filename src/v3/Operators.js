import { GizmoClient } from '../GizmoClient.js';

/**
 * Operators class to interact with operator-related API endpoints.
 */
export class Operators {
    /**
     * @param {GizmoClient} client - The GizmoClient instance to use for API requests.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of operators.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of operators
     */
    getOperators(params = {}) {
        return this.client.request('get', '/v3.0/operators', {}, params);
    }

    /**
     * Get operator by ID.
     * @param {number|string} id - Operator ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Operator details
     */
    getOperatorById(id, params = {}) {
        return this.client.request('get', `/v3.0/operators/${id}`, {}, params);
    }

    /**
     * Get current operator info.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Current operator info
     */
    getCurrentOperator(params = {}) {
        return this.client.request('get', '/v3.0/operators/current', {}, params);
    }
}
