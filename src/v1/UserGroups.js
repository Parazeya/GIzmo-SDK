import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for user group operations.
 */
export class UserGroups {
    /**
     * Create a UserGroups instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all user groups.
     * @returns {Promise<any>} List of user groups
     */
    getUserGroups() {
        return this.client.request('get', '/usergroups');
    }
    /**
     * Add a new user group.
     * @param {Object} data - User group data
     * @returns {Promise<any>} Added user group
     */
    addUserGroup(data) {
        return this.client.request('put', '/usergroups', data);
    }
    /**
     * Update a user group.
     * @param {Object} data - User group data
     * @returns {Promise<any>} Updated user group
     */
    updateUserGroup(data) {
        return this.client.request('post', '/usergroups', data);
    }
    /**
     * Delete a user group by ID.
     * @param {number|string} userGroupId - User group ID
     * @returns {Promise<any>} Delete result
     */
    deleteUserGroup(userGroupId) {
        return this.client.request('delete', `/usergroups/${userGroupId}`);
    }
    /**
     * Get disallowed host for user group.
     * @param {number|string} userGroupId - User group ID
     * @returns {Promise<any>} Disallowed host
     */
    getDisallowedHost(userGroupId) {
        return this.client.request('get', `/usergroups/${userGroupId}/disallowedhost`);
    }
    /**
     * Get disallowed host group for user group.
     * @param {number|string} userGroupId - User group ID
     * @param {number|string} hostGroupId - Host group ID
     * @returns {Promise<any>} Disallowed host group
     */
    getDisallowedHostGroup(userGroupId, hostGroupId) {
        return this.client.request('get', `/usergroups/${userGroupId}/disallowedhost/${hostGroupId}`);
    }
    /**
     * Set disallowed host group for user group.
     * @param {number|string} userGroupId - User group ID
     * @param {number|string} hostGroupId - Host group ID
     * @param {boolean} disallow - Disallow flag
     * @returns {Promise<any>} Set result
     */
    setDisallowedHostGroup(userGroupId, hostGroupId, disallow) {
        return this.client.request('put', `/usergroups/${userGroupId}/disallowedhost/${hostGroupId}/${disallow}`);
    }
}
