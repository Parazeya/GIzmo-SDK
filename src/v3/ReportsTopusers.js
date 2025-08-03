import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for fetching top users reports.
 */
export class ReportsTopusers {
    /**
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get top users report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Top users report
     */
    getReportsTopusers(params = {}) {
        return this.client.request('get', '/v3.0/reports/topusers', {}, params);
    }
}
