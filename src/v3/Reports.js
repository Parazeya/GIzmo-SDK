import { GizmoClient } from '../GizmoClient.js';

export class Reports {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get overview report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getOverview(params = {}) {
        return this.client.request('get', '/v3.0/reports/overview', {}, params);
    }
    /**
     * Get financial report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getFinancial(params = {}) {
        return this.client.request('get', '/v3.0/reports/financial', {}, params);
    }
    /**
     * Get host usage report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getHostUsage(params = {}) {
        return this.client.request('get', '/v3.0/reports/hostusage', {}, params);
    }
    /**
     * Get top users report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getTopUsers(params = {}) {
        return this.client.request('get', '/v3.0/reports/topusers', {}, params);
    }
    /**
     * Get user report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getUser(params = {}) {
        return this.client.request('get', '/v3.0/reports/user', {}, params);
    }
    /**
     * Get product report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getProduct(params = {}) {
        return this.client.request('get', '/v3.0/reports/product', {}, params);
    }
    /**
     * Get products report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getProducts(params = {}) {
        return this.client.request('get', '/v3.0/reports/products', {}, params);
    }
    /**
     * Get products log report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getProductsLog(params = {}) {
        return this.client.request('get', '/v3.0/reports/productslog', {}, params);
    }
    /**
     * Get stock report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getStock(params = {}) {
        return this.client.request('get', '/v3.0/reports/stock', {}, params);
    }
    /**
     * Get transactions log report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getTransactionsLog(params = {}) {
        return this.client.request('get', '/v3.0/reports/transactionslog', {}, params);
    }
    /**
     * Get shifts log report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getShiftsLog(params = {}) {
        return this.client.request('get', '/v3.0/reports/shiftslog', {}, params);
    }
    /**
     * Get assets log report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getAssetsLog(params = {}) {
        return this.client.request('get', '/v3.0/reports/assetslog', {}, params);
    }
    /**
     * Get invoice report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getInvoice(params = {}) {
        return this.client.request('get', '/v3.0/reports/invoice', {}, params);
    }
    /**
     * Get invoices log report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getInvoicesLog(params = {}) {
        return this.client.request('get', '/v3.0/reports/invoiceslog', {}, params);
    }
    /**
     * Get Z report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getZ(params = {}) {
        return this.client.request('get', '/v3.0/reports/z', {}, params);
    }
    /**
     * Get Z log report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getZLog(params = {}) {
        return this.client.request('get', '/v3.0/reports/zlog', {}, params);
    }
    /**
     * Get application report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getApplication(params = {}) {
        return this.client.request('get', '/v3.0/reports/application', {}, params);
    }
    /**
     * Get applications report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getApplications(params = {}) {
        return this.client.request('get', '/v3.0/reports/applications', {}, params);
    }
    /**
     * Get sessions log report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getSessionsLog(params = {}) {
        return this.client.request('get', '/v3.0/reports/sessionslog', {}, params);
    }
    /**
     * Get license report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getLicense(params = {}) {
        return this.client.request('get', '/v3.0/reports/license', {}, params);
    }
    /**
     * Get licenses report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getLicenses(params = {}) {
        return this.client.request('get', '/v3.0/reports/licenses', {}, params);
    }
    /**
     * Get orders log report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getOrdersLog(params = {}) {
        return this.client.request('get', '/v3.0/reports/orderslog', {}, params);
    }
    /**
     * Get orders statistics report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getOrdersStatistics(params = {}) {
        return this.client.request('get', '/v3.0/reports/ordersstatistics', {}, params);
    }
}
