import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for managing reports on products.
 */
export class ReportsProducts {
    /**
     * Creates an instance of ReportsProducts.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get products report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Products report
     */
    getReportsProducts(params = {}) {
        return this.client.request('get', '/v3.0/reports/products', {}, params);
    }
}
