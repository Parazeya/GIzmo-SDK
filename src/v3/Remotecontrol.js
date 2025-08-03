import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing remote control operations.
 */
export class Remotecontrol {
    /**
     * Create a Remotecontrol instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get remote control session for a host.
     * @param {number|string} hostId - Host ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Remote control session info
     */
    getRemotecontrolHostSession(hostId, params = {}) {
        return this.client.request('get', `/v3.0/remotecontrol/hosts/${hostId}/session`, {}, params);
    }
}
