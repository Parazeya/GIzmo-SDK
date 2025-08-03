import { GizmoClient } from '../GizmoClient.js';

/**
 * ReportsUser class for fetching user reports.
 */
export class ReportsUser {
    /**
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get user report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} User report
     */
    getReportsUser(params = {}) {
        return this.client.request('get', '/v3.0/reports/user', {}, params);
    }
}
