import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for license operations.
 */
export class Licenses {
    /**
     * Create a Licenses instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get reserved keys info.
     * @returns {Promise<any>} Reserved keys info
     */
    getReservedKeysInfo() {
        return this.client.request('get', '/licenses/keys/reserved/info');
    }
}
