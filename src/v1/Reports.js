import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for report operations.
 */
export class Reports {
    /**
     * Create a Reports instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get sale summary report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Sale summary report
     */
    getSaleSummaryReport(params = {}) {
        return this.client.request('get', '/reports/salesummary', {}, params);
    }
    /**
     * Get sale reports.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Sale reports
     */
    getSaleReports(params = {}) {
        return this.client.request('get', '/reports/sale', {}, params);
    }
    /**
     * Get user spending report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} User spending report
     */
    getUserSpendingReport(params = {}) {
        return this.client.request('get', '/reports/users/spending', {}, params);
    }
    /**
     * Get points earning report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Points earning report
     */
    getPointsEarningReport(params = {}) {
        return this.client.request('get', '/reports/users/points/earning', {}, params);
    }
    /**
     * Get general user report.
     * @param {number|string} userId - User ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} General user report
     */
    getGeneralUserReport(userId, params = {}) {
        return this.client.request('get', `/reports/users/${userId}/general`, {}, params);
    }
    /**
     * Get overview report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Overview report
     */
    getOverviewReport(params = {}) {
        return this.client.request('get', '/reports/overview', {}, params);
    }
    /**
     * Get financial report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Financial report
     */
    getFinancialReport(params = {}) {
        return this.client.request('get', '/reports/financial', {}, params);
    }
    /**
     * Get financial operator report.
     * @param {number|string} operatorId - Operator ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Financial operator report
     */
    getFinancialOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/financial/operator/${operatorId}`, {}, params);
    }
    /**
     * Get financial operator register report.
     * @param {number|string} operatorId - Operator ID
     * @param {number|string} registerId - Register ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Financial operator register report
     */
    getFinancialOperatorRegisterReport(operatorId, registerId, params = {}) {
        return this.client.request('get', `/reports/financial/operator/${operatorId}/register/${registerId}`, {}, params);
    }
    /**
     * Get financial register report.
     * @param {number|string} registerId - Register ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Financial register report
     */
    getFinancialRegisterReport(registerId, params = {}) {
        return this.client.request('get', `/reports/financial/register/${registerId}`, {}, params);
    }
    /**
     * Get host usage report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Host usage report
     */
    getHostUsageReport(params = {}) {
        return this.client.request('get', '/reports/hostusage', {}, params);
    }
    /**
     * Get host usage report by host group.
     * @param {number|string} hostGroupId - Host group ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Host usage report
     */
    getHostUsageHostGroupReport(hostGroupId, params = {}) {
        return this.client.request('get', `/reports/hostusage/hostgroup/${hostGroupId}`, {}, params);
    }
    /**
     * Get product report.
     * @param {number|string} productId - Product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Product report
     */
    getProductReport(productId, params = {}) {
        return this.client.request('get', `/reports/product/${productId}`, {}, params);
    }
    /**
     * Get products report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Products report
     */
    getProductsReport(params = {}) {
        return this.client.request('get', '/reports/products', {}, params);
    }
    /**
     * Get products user report.
     * @param {number|string} userId - User ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Products user report
     */
    getProductsUserReport(userId, params = {}) {
        return this.client.request('get', `/reports/products/user/${userId}`, {}, params);
    }
    /**
     * Get products log report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Products log report
     */
    getProductsLogReport(params = {}) {
        return this.client.request('get', '/reports/productslog', {}, params);
    }
    /**
     * Get products log product report.
     * @param {number|string} productId - Product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Products log product report
     */
    getProductsLogProductReport(productId, params = {}) {
        return this.client.request('get', `/reports/productslog/product/${productId}`, {}, params);
    }
    /**
     * Get products log product operator report.
     * @param {number|string} productId - Product ID
     * @param {number|string} operatorId - Operator ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Products log product operator report
     */
    getProductsLogProductOperatorReport(productId, operatorId, params = {}) {
        return this.client.request('get', `/reports/productslog/product/${productId}/operator/${operatorId}`, {}, params);
    }
    /**
     * Get products log operator report.
     * @param {number|string} operatorId - Operator ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Products log operator report
     */
    getProductsLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/productslog/operator/${operatorId}`, {}, params);
    }
    /**
     * Get stock report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Stock report
     */
    getStockReport(params = {}) {
        return this.client.request('get', '/reports/stock', {}, params);
    }
    /**
     * Get transactions log report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Transactions log report
     */
    getTransactionsLogReport(params = {}) {
        return this.client.request('get', '/reports/transactionslog', {}, params);
    }
    /**
     * Get transactions log operator report.
     * @param {number|string} operatorId - Operator ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Transactions log operator report
     */
    getTransactionsLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/transactionslog/operator/${operatorId}`, {}, params);
    }
    /**
     * Get transactions log operator register report.
     * @param {number|string} operatorId - Operator ID
     * @param {number|string} registerId - Register ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Transactions log operator register report
     */
    getTransactionsLogOperatorRegisterReport(operatorId, registerId, params = {}) {
        return this.client.request('get', `/reports/transactionslog/operator/${operatorId}/register/${registerId}`, {}, params);
    }
    /**
     * Get transactions log operator register user report.
     * @param {number|string} operatorId - Operator ID
     * @param {number|string} registerId - Register ID
     * @param {number|string} userId - User ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Transactions log operator register user report
     */
    getTransactionsLogOperatorRegisterUserReport(operatorId, registerId, userId, params = {}) {
        return this.client.request('get', `/reports/transactionslog/operator/${operatorId}/register/${registerId}/user/${userId}`, {}, params);
    }
    /**
     * Get shifts log report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Shifts log report
     */
    getShiftsLogReport(params = {}) {
        return this.client.request('get', '/reports/shiftslog', {}, params);
    }
    /**
     * Get shifts log operator report.
     * @param {number|string} operatorId - Operator ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Shifts log operator report
     */
    getShiftsLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/shiftslog/operator/${operatorId}`, {}, params);
    }
    /**
     * Get shifts log operator register report.
     * @param {number|string} operatorId - Operator ID
     * @param {number|string} registerId - Register ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Shifts log operator register report
     */
    getShiftsLogOperatorRegisterReport(operatorId, registerId, params = {}) {
        return this.client.request('get', `/reports/shiftslog/operator/${operatorId}/register/${registerId}`, {}, params);
    }
    /**
     * Get shifts log register report.
     * @param {number|string} registerId - Register ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Shifts log register report
     */
    getShiftsLogRegisterReport(registerId, params = {}) {
        return this.client.request('get', `/reports/shiftslog/register/${registerId}`, {}, params);
    }
    /**
     * Get invoices log report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Invoices log report
     */
    getInvoicesLogReport(params = {}) {
        return this.client.request('get', '/reports/invoiceslog', {}, params);
    }
    /**
     * Get invoices log operator report.
     * @param {number|string} operatorId - Operator ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Invoices log operator report
     */
    getInvoicesLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/invoiceslog/operator/${operatorId}`, {}, params);
    }
    /**
     * Get invoices log operator register report.
     * @param {number|string} operatorId - Operator ID
     * @param {number|string} registerId - Register ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Invoices log operator register report
     */
    getInvoicesLogOperatorRegisterReport(operatorId, registerId, params = {}) {
        return this.client.request('get', `/reports/invoiceslog/operator/${operatorId}/register/${registerId}`, {}, params);
    }
    /**
     * Get invoices log register report.
     * @param {number|string} registerId - Register ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Invoices log register report
     */
    getInvoicesLogRegisterReport(registerId, params = {}) {
        return this.client.request('get', `/reports/invoiceslog/register/${registerId}`, {}, params);
    }
    /**
     * Get invoice report.
     * @param {number|string} invoiceId - Invoice ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Invoice report
     */
    getInvoiceReport(invoiceId, params = {}) {
        return this.client.request('get', `/reports/invoice/${invoiceId}`, {}, params);
    }
    /**
     * Get applications report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Applications report
     */
    getApplicationsReport(params = {}) {
        return this.client.request('get', '/reports/applications', {}, params);
    }
    /**
     * Get application report.
     * @param {number|string} applicationId - Application ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Application report
     */
    getApplicationReport(applicationId, params = {}) {
        return this.client.request('get', `/reports/application/${applicationId}`, {}, params);
    }
    /**
     * Get application user report.
     * @param {number|string} applicationId - Application ID
     * @param {number|string} userId - User ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Application user report
     */
    getApplicationUserReport(applicationId, userId, params = {}) {
        return this.client.request('get', `/reports/application/${applicationId}/user/${userId}`, {}, params);
    }
    /**
     * Get orders log report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Orders log report
     */
    getOrdersLogReport(params = {}) {
        return this.client.request('get', '/reports/orderslog', {}, params);
    }
    /**
     * Get orders log operator report.
     * @param {number|string} operatorId - Operator ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Orders log operator report
     */
    getOrdersLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/orderslog/operator/${operatorId}`, {}, params);
    }
    /**
     * Get orders log operator user report.
     * @param {number|string} operatorId - Operator ID
     * @param {number|string} userId - User ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Orders log operator user report
     */
    getOrdersLogOperatorUserReport(operatorId, userId, params = {}) {
        return this.client.request('get', `/reports/orderslog/operator/${operatorId}/user/${userId}`, {}, params);
    }
    /**
     * Get orders log user report.
     * @param {number|string} userId - User ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Orders log user report
     */
    getOrdersLogUserReport(userId, params = {}) {
        return this.client.request('get', `/reports/orderslog/user/${userId}`, {}, params);
    }
    /**
     * Get sessions log report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Sessions log report
     */
    getSessionsLogReport(params = {}) {
        return this.client.request('get', '/reports/sessionslog', {}, params);
    }
    /**
     * Get sessions log operator report.
     * @param {number|string} operatorId - Operator ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Sessions log operator report
     */
    getSessionsLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/sessionslog/operator/${operatorId}`, {}, params);
    }
    /**
     * Get sessions log operator user report.
     * @param {number|string} operatorId - Operator ID
     * @param {number|string} userId - User ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Sessions log operator user report
     */
    getSessionsLogOperatorUserReport(operatorId, userId, params = {}) {
        return this.client.request('get', `/reports/sessionslog/operator/${operatorId}/user/${userId}`, {}, params);
    }
    /**
     * Get sessions log operator user host report.
     * @param {number|string} operatorId - Operator ID
     * @param {number|string} userId - User ID
     * @param {number|string} hostId - Host ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Sessions log operator user host report
     */
    getSessionsLogOperatorUserHostReport(operatorId, userId, hostId, params = {}) {
        return this.client.request('get', `/reports/sessionslog/operator/${operatorId}/user/${userId}/host/${hostId}`, {}, params);
    }
    /**
     * Get user report.
     * @param {number|string} userId - User ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} User report
     */
    getUserReport(userId, params = {}) {
        return this.client.request('get', `/reports/user/${userId}`, {}, params);
    }
    /**
     * Get top users report.
     * @param {number} topUsersNumber - Number of top users
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Top users report
     */
    getTopUsersReport(topUsersNumber, params = {}) {
        return this.client.request('get', `/reports/topusers/${topUsersNumber}`, {}, params);
    }
    /**
     * Get licenses report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Licenses report
     */
    getLicensesReport(params = {}) {
        return this.client.request('get', '/reports/licenses', {}, params);
    }
    /**
     * Get licenses application report.
     * @param {number|string} applicationId - Application ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Licenses application report
     */
    getLicensesApplicationReport(applicationId, params = {}) {
        return this.client.request('get', `/reports/licenses/application/${applicationId}`, {}, params);
    }
    /**
     * Get license report.
     * @param {number|string} licenseId - License ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} License report
     */
    getLicenseReport(licenseId, params = {}) {
        return this.client.request('get', `/reports/license/${licenseId}`, {}, params);
    }
    /**
     * Get Z log report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Z log report
     */
    getZLogReport(params = {}) {
        return this.client.request('get', '/reports/zlog', {}, params);
    }
    /**
     * Get Z report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Z report
     */
    getZReport(params = {}) {
        return this.client.request('get', '/reports/z', {}, params);
    }
    /**
     * Get assets log report.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Assets log report
     */
    getAssetsLogReport(params = {}) {
        return this.client.request('get', '/reports/assetslog', {}, params);
    }
    /**
     * Get assets log asset type report.
     * @param {number|string} assetTypeId - Asset type ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Assets log asset type report
     */
    getAssetsLogAssetTypeReport(assetTypeId, params = {}) {
        return this.client.request('get', `/reports/assetslog/assettype/${assetTypeId}`, {}, params);
    }
    /**
     * Get assets log asset type asset report.
     * @param {number|string} assetTypeId - Asset type ID
     * @param {number|string} assetId - Asset ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Assets log asset type asset report
     */
    getAssetsLogAssetTypeAssetReport(assetTypeId, assetId, params = {}) {
        return this.client.request('get', `/reports/assetslog/assettype/${assetTypeId}/asset/${assetId}`, {}, params);
    }
    /**
     * Get assets log asset report.
     * @param {number|string} assetId - Asset ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Assets log asset report
     */
    getAssetsLogAssetReport(assetId, params = {}) {
        return this.client.request('get', `/reports/assetslog/asset/${assetId}`, {}, params);
    }
}
