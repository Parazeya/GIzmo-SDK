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
     * @returns {Promise<any>} List of host groups
     */
    getHostGroups() {
        return this.client.request('get', '/hostgroups');
    }
    /**
     * Get host group by ID.
     * @param {number|string} hostGroupId - Host group ID
     * @returns {Promise<any>} Host group details
     */
    getHostGroupById(hostGroupId) {
        return this.client.request('get', `/hostgroups/${hostGroupId}`);
    }
    /**
     * Get disallowed user groups for host group.
     * @param {number|string} hostGroupId - Host group ID
     * @returns {Promise<any>} Disallowed user groups
     */
    getDisallowedUserGroups(hostGroupId) {
        return this.client.request('get', `/hostgroups/${hostGroupId}/disallowedusergroups`);
    }
}
