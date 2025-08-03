import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for host computer operations.
 */
export class HostComputers {
    /**
     * Create a HostComputers instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all host computers.
     * @returns {Promise<any>} List of host computers
     */
    getHostComputers() {
        return this.client.request('get', '/hostcomputers');
    }
    /**
     * Get host computer by hostname.
     * @param {string} hostname - Hostname
     * @returns {Promise<any>} Host computer details
     */
    getHostComputerByHostname(hostname) {
        return this.client.request('get', `/hostcomputers/${hostname}`);
    }
    /**
     * Get processes for a host.
     * @param {number|string} hostId - Host ID
     * @returns {Promise<any>} List of processes
     */
    getHostProcesses(hostId) {
        return this.client.request('get', `/hostcomputers/${hostId}/process`);
    }
    /**
     * Create a process for a host.
     * @param {number|string} hostId - Host ID
     * @param {Object} data - Process data
     * @returns {Promise<any>} Created process
     */
    createHostProcess(hostId, data) {
        return this.client.request('put', `/hostcomputers/${hostId}/process`, data);
    }
    /**
     * Terminate all processes for a host.
     * @param {number|string} hostId - Host ID
     * @returns {Promise<any>} Termination result
     */
    terminateHostProcess(hostId) {
        return this.client.request('delete', `/hostcomputers/${hostId}/process`);
    }
    /**
     * Get process by ID for a host.
     * @param {number|string} hostId - Host ID
     * @param {number|string} processId - Process ID
     * @returns {Promise<any>} Process details
     */
    getHostProcessById(hostId, processId) {
        return this.client.request('get', `/hostcomputers/${hostId}/process/${processId}`);
    }
    /**
     * Terminate process by ID for a host.
     * @param {number|string} hostId - Host ID
     * @param {number|string} processId - Process ID
     * @returns {Promise<any>} Termination result
     */
    terminateHostProcessById(hostId, processId) {
        return this.client.request('delete', `/hostcomputers/${hostId}/process/${processId}`);
    }
    /**
     * Get process by name for a host.
     * @param {number|string} hostId - Host ID
     * @param {string} processName - Process name
     * @returns {Promise<any>} Process details
     */
    getHostProcessByName(hostId, processName) {
        return this.client.request('get', `/hostcomputers/${hostId}/process/${processName}`);
    }
    /**
     * Set host security state.
     * @param {number|string} hostId - Host ID
     * @param {boolean} enabled - Security enabled
     * @returns {Promise<any>} Security state result
     */
    setHostSecurityState(hostId, enabled) {
        return this.client.request('post', `/hostcomputers/${hostId}/security/${enabled}`);
    }
    /**
     * Get host maintenance state.
     * @param {number|string} hostId - Host ID
     * @returns {Promise<any>} Maintenance state
     */
    getHostMaintenanceState(hostId) {
        return this.client.request('get', `/hostcomputers/${hostId}/maintenance`);
    }
    /**
     * Set host maintenance state.
     * @param {number|string} hostId - Host ID
     * @param {boolean} enabled - Maintenance enabled
     * @returns {Promise<any>} Maintenance state result
     */
    setHostMaintenanceState(hostId, enabled) {
        return this.client.request('post', `/hostcomputers/${hostId}/maintenance/${enabled}`);
    }
}
