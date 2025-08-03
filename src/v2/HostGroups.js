import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for host group operations.
 */
export class HostGroups {
    /**
     * Create a HostGroups instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all host groups.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of host groups
     */
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/hostgroups', {}, params);
    }
    /**
     * Get host group by ID.
     * @param {number|string} id - Host group ID
     * @returns {Promise<any>} Host group details
     */
    getById(id) {
        return this.client.request('get', `/v2.0/hostgroups/${id}`);
    }
    /**
     * Create a new host group.
     * @param {Object} data - Host group data
     * @returns {Promise<any>} Created host group
     */
    create(data) {
        return this.client.request('post', '/v2.0/hostgroups', data);
    }
    /**
     * Update a host group.
     * @param {Object} data - Host group data
     * @returns {Promise<any>} Updated host group
     */
    update(data) {
        return this.client.request('put', '/v2.0/hostgroups', data);
    }
    /**
     * Delete a host group by ID.
     * @param {number|string} id - Host group ID
     * @returns {Promise<any>} Delete result
     */
    delete(id) {
        return this.client.request('delete', `/v2.0/hostgroups/${id}`);
    }
}
