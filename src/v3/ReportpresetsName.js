import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for checking report preset names.
 */
export class ReportpresetsName {
    /**
     * @param {GizmoClient} client - The Gizmo client instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Check if report preset name exists.
     * @param {string} name - Name value
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Existence result
     */
    getReportpresetNameExists(name, params = {}) {
        return this.client.request('get', `/v3.0/reportpresets/name/${name}/exist`, {}, params);
    }
}
