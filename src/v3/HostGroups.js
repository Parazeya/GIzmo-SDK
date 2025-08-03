import { GizmoClient } from '../GizmoClient.js';

export class HostGroups {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of host groups.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @param {string} [params.name] - Filter by name
     * @returns {Promise<any>}
     */
    getHostGroups(params = {}) {
        return this.client.request('get', '/v3.0/hostgroups', {}, params);
    }
    /**
     * Get host group by ID.
     * @param {number|string} id - Host group ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getHostGroupById(id, params = {}) {
        return this.client.request('get', `/v3.0/hostgroups/${id}`, {}, params);
    }
    /**
     * Get billing profile for host group.
     * @param {number|string} id - Host group ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getBillingProfile(id, params = {}) {
        return this.client.request('get', `/v3.0/hostgroups/${id}/billingprofile`, {}, params);
    }
}
