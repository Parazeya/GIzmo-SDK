import { GizmoClient } from '../GizmoClient.js';

/**
 * ReportsProduct class for managing product reports.
 */
export class ReportsProduct {
    /**
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get product report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Product report
     */
    getReportsProduct(params = {}) {
        return this.client.request('get', '/v3.0/reports/product', {}, params);
    }
}
