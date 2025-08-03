import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing device operations.
 */
export class Devices {
    /**
     * Create a Devices instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of devices.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of devices
     */
    getDevices(params = {}) {
        return this.client.request('get', '/v3.0/devices', {}, params);
    }

    /**
     * Get device by ID.
     * @param {number|string} id - Device ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Device details
     */
    getDeviceById(id, params = {}) {
        return this.client.request('get', `/v3.0/devices/${id}`, {}, params);
    }

    /**
     * Enable device by ID.
     * @param {number|string} id - Device ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Enable result
     */
    enableDevice(id, params = {}) {
        return this.client.request('get', `/v3.0/devices/${id}/enable`, {}, params);
    }

    /**
     * Disable device by ID.
     * @param {number|string} id - Device ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Disable result
     */
    disableDevice(id, params = {}) {
        return this.client.request('get', `/v3.0/devices/${id}/disable`, {}, params);
    }
}
