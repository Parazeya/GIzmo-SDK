import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for host operations.
 */
export class Hosts {
    /**
     * Create a Hosts instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all hosts.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of hosts
     */
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/hosts', {}, params);
    }
    /**
     * Get host by ID.
     * @param {number|string} id - Host ID
     * @returns {Promise<any>} Host details
     */
    getById(id) {
        return this.client.request('get', `/v2.0/hosts/${id}`);
    }
    /**
     * Create a new host.
     * @param {Object} data - Host data
     * @returns {Promise<any>} Created host
     */
    create(data) {
        return this.client.request('post', '/v2.0/hosts', data);
    }
    /**
     * Update a host.
     * @param {Object} data - Host data
     * @returns {Promise<any>} Updated host
     */
    update(data) {
        return this.client.request('put', '/v2.0/hosts', data);
    }
    /**
     * Delete a host by ID.
     * @param {number|string} id - Host ID
     * @returns {Promise<any>} Delete result
     */
    delete(id) {
        return this.client.request('delete', `/v2.0/hosts/${id}`);
    }
}
