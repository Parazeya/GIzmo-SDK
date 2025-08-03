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
     * @returns {Promise<any>} List of hosts
     */
    getHosts() {
        return this.client.request('get', '/hosts');
    }
    /**
     * Get host by ID.
     * @param {number|string} hostId - Host ID
     * @returns {Promise<any>} Host details
     */
    getHostById(hostId) {
        return this.client.request('get', `/hosts/${hostId}`);
    }
    /**
     * Delete host by ID.
     * @param {number|string} hostId - Host ID
     * @returns {Promise<any>} Delete result
     */
    deleteHost(hostId) {
        return this.client.request('delete', `/hosts/${hostId}`);
    }
    /**
     * Get hosts by number.
     * @param {number|string} hostNumber - Host number
     * @returns {Promise<any>} Hosts list
     */
    getHostsByNumber(hostNumber) {
        return this.client.request('get', `/hosts/number/${hostNumber}`);
    }
    /**
     * Add a new host.
     * @param {Object} data - Host data
     * @returns {Promise<any>} Added host
     */
    addHost(data) {
        return this.client.request('put', '/hosts/host', data);
    }
    /**
     * Update a host.
     * @param {Object} data - Host data
     * @returns {Promise<any>} Updated host
     */
    updateHost(data) {
        return this.client.request('post', '/hosts/host', data);
    }
    /**
     * Add a host computer.
     * @param {Object} data - Host computer data
     * @returns {Promise<any>} Added host computer
     */
    addHostComputer(data) {
        return this.client.request('put', '/hosts/hostcomputer', data);
    }
    /**
     * Update a host computer.
     * @param {Object} data - Host computer data
     * @returns {Promise<any>} Updated host computer
     */
    updateHostComputer(data) {
        return this.client.request('post', '/hosts/hostcomputer', data);
    }
    /**
     * Add a host endpoint.
     * @param {Object} data - Host endpoint data
     * @returns {Promise<any>} Added host endpoint
     */
    addHostEndpoint(data) {
        return this.client.request('put', '/hosts/hostendpoint', data);
    }
    /**
     * Update a host endpoint.
     * @param {Object} data - Host endpoint data
     * @returns {Promise<any>} Updated host endpoint
     */
    updateHostEndpoint(data) {
        return this.client.request('post', '/hosts/hostendpoint', data);
    }
    /**
     * Get last user login for host.
     * @param {number|string} hostId - Host ID
     * @returns {Promise<any>} Last user login
     */
    getLastUserLogin(hostId) {
        return this.client.request('get', `/hosts/${hostId}/lastuserlogin`);
    }
    /**
     * Get last user logout for host.
     * @param {number|string} hostId - Host ID
     * @returns {Promise<any>} Last user logout
     */
    getLastUserLogout(hostId) {
        return this.client.request('get', `/hosts/${hostId}/lastuserlogout`);
    }
    /**
     * Set host lock state.
     * @param {number|string} hostId - Host ID
     * @param {boolean} locked - Lock state
     * @returns {Promise<any>} Lock state result
     */
    setHostLockState(hostId, locked) {
        return this.client.request('post', `/hosts/${hostId}/lock/${locked}`);
    }
    /**
     * Set host order state.
     * @param {number|string} hostId - Host ID
     * @param {boolean} inOrder - Order state
     * @returns {Promise<any>} Order state result
     */
    setHostOrderState(hostId, inOrder) {
        return this.client.request('post', `/hosts/${hostId}/orderstate/${inOrder}`);
    }
}
