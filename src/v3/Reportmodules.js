import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing report modules.
 */
export class Reportmodules {
    /**
     * Create a Reportmodules instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Export report module by report ID.
     * @param {number|string} reportId - Report ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Exported report module
     */
    getReportmoduleExport(reportId, params = {}) {
        return this.client.request('get', `/v3.0/reportmodules/${reportId}/export`, {}, params);
    }

    /**
     * Get report module by report ID.
     * @param {number|string} reportId - Report ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Report module details
     */
    getReportmoduleById(reportId, params = {}) {
        return this.client.request('get', `/v3.0/reportmodules/${reportId}`, {}, params);
    }
}
