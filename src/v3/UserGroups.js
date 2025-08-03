import { GizmoClient } from '../GizmoClient.js';

export class UserGroups {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of user groups.
     * @param {Object} params - Query parameters
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @param {string} [params.name] - Filter by name
     * @returns {Promise<any>} List of user groups
     */
    getUserGroups(params = {}) {
        return this.client.request('get', '/v3.0/usergroups', {}, params);
    }
    /**
     * Get user group by ID.
     * @param {number|string} id - User group ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} User group details
     */
    getUserGroupById(id, params = {}) {
        return this.client.request('get', `/v3.0/usergroups/${id}`, {}, params);
    }
    /**
     * Get disallowed host groups for user group.
     * @param {number|string} id - User group ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Disallowed host groups
     */
    getDisallowedHostGroups(id, params = {}) {
        return this.client.request('get', `/v3.0/usergroups/${id}/disallowedhostgroups`, {}, params);
    }
}
