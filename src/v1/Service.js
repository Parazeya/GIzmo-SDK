import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for service operations.
 */
export class Service {
    /**
     * Create a Service instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get service time.
     * @returns {Promise<any>} Service time
     */
    getServiceTime() {
        return this.client.request('get', '/service');
    }
    /**
     * Stop the service.
     * @returns {Promise<any>} Stop result
     */
    stopService() {
        return this.client.request('post', '/service/stop');
    }
    /**
     * Restart the service.
     * @returns {Promise<any>} Restart result
     */
    restartService() {
        return this.client.request('post', '/service/restart');
    }
    /**
     * Get service status.
     * @returns {Promise<any>} Service status
     */
    getServiceStatus() {
        return this.client.request('get', '/service/status');
    }
    /**
     * Get service version.
     * @returns {Promise<any>} Service version
     */
    getServiceVersion() {
        return this.client.request('get', '/service/version');
    }
    /**
     * Get service module info.
     * @returns {Promise<any>} Module info
     */
    getServiceModuleInfo() {
        return this.client.request('get', '/service/module');
    }
    /**
     * Get service hardware ID.
     * @returns {Promise<any>} Hardware ID
     */
    getServiceHardwareId() {
        return this.client.request('get', '/service/hardwareid');
    }
    /**
     * Get service settings.
     * @returns {Promise<any>} Service settings
     */
    getServiceSettings() {
        return this.client.request('get', '/service/settings');
    }
    /**
     * Get service network statistics.
     * @returns {Promise<any>} Network statistics
     */
    getServiceNetworkStats() {
        return this.client.request('get', '/service/network/stats');
    }
}
