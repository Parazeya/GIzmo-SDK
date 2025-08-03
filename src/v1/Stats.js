import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for statistics operations.
 */
export class Stats {
    /**
     * Create a Stats instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get session statistics.
     * @returns {Promise<any>} Session statistics
     */
    getSessionStats() {
        return this.client.request('get', '/stats/session');
    }
    /**
     * Get unique user logins.
     * @returns {Promise<any>} Unique user logins
     */
    getUniqueUserLogins() {
        return this.client.request('get', '/stats/user/logins/unique');
    }
    /**
     * Get user logins.
     * @returns {Promise<any>} User logins
     */
    getUserLogins() {
        return this.client.request('get', '/stats/user/logins');
    }
    /**
     * Get host usage statistics.
     * @returns {Promise<any>} Host usage statistics
     */
    getHostUseStats() {
        return this.client.request('get', '/stats/host/use');
    }
    /**
     * Get host group usage statistics by name.
     * @param {string} hostGroupName - Host group name
     * @returns {Promise<any>} Usage statistics
     */
    getHostGroupUseStats(hostGroupName) {
        return this.client.request('get', `/stats/host/${hostGroupName}/use`);
    }
    /**
     * Get host group and user group usage statistics by name.
     * @param {string} hostGroupName - Host group name
     * @param {string} userGroupName - User group name
     * @returns {Promise<any>} Usage statistics
     */
    getHostGroupUserGroupUseStats(hostGroupName, userGroupName) {
        return this.client.request('get', `/stats/host/${hostGroupName}/${userGroupName}/use`);
    }
    /**
     * Get host group and user group usage statistics by ID.
     * @param {number|string} hostGroupId - Host group ID
     * @param {number|string} userGroupId - User group ID
     * @returns {Promise<any>} Usage statistics
     */
    getHostGroupIdUserGroupIdUseStats(hostGroupId, userGroupId) {
        return this.client.request('get', `/stats/host/${hostGroupId}/${userGroupId}/use`);
    }
}
