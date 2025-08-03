import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for operator operations.
 */
export class Operators {
    /**
     * Create an Operators instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all operators.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of operators
     */
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/operators', {}, params);
    }
    /**
     * Get operator by ID.
     * @param {number|string} id - Operator ID
     * @returns {Promise<any>} Operator details
     */
    getById(id) {
        return this.client.request('get', `/v2.0/operators/${id}`);
    }
    /**
     * Create a new operator.
     * @param {Object} data - Operator data
     * @returns {Promise<any>} Created operator
     */
    create(data) {
        return this.client.request('post', '/v2.0/operators', data);
    }
    /**
     * Update an operator.
     * @param {Object} data - Operator data
     * @returns {Promise<any>} Updated operator
     */
    update(data) {
        return this.client.request('put', '/v2.0/operators', data);
    }
    /**
     * Delete an operator by ID.
     * @param {number|string} id - Operator ID
     * @returns {Promise<any>} Delete result
     */
    delete(id) {
        return this.client.request('delete', `/v2.0/operators/${id}`);
    }
}
