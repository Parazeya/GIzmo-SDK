import { GizmoClient } from '../GizmoClient.js';

export class Hosts {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of hosts.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @param {string} [params.name] - Filter by name
     * @returns {Promise<any>}
     */
    getHosts(params = {}) {
        return this.client.request('get', '/v3.0/hosts', {}, params);
    }
    /**
     * Get host by ID.
     * @param {number|string} id - Host ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getHostById(id, params = {}) {
        return this.client.request('get', `/v3.0/hosts/${id}`, {}, params);
    }
    /**
     * Get device assignments for host.
     * @param {number|string} id - Host ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getHostDevicesAssignments(id, params = {}) {
        return this.client.request('get', `/v3.0/hosts/${id}/devices/assignments`, {}, params);
    }
}
