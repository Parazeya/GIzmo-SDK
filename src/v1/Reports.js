import { GizmoClient } from '../GizmoClient.js';

export class Reports {
    constructor(client) {
        this.client = client;
    }
    getSaleSummaryReport(params = {}) {
        return this.client.request('get', '/reports/salesummary', {}, params);
    }
    getSaleReports(params = {}) {
        return this.client.request('get', '/reports/sale', {}, params);
    }
    getUserSpendingReport(params = {}) {
        return this.client.request('get', '/reports/users/spending', {}, params);
    }
    getPointsEarningReport(params = {}) {
        return this.client.request('get', '/reports/users/points/earning', {}, params);
    }
    getGeneralUserReport(userId, params = {}) {
        return this.client.request('get', `/reports/users/${userId}/general`, {}, params);
    }
    getOverviewReport(params = {}) {
        return this.client.request('get', '/reports/overview', {}, params);
    }
    getFinancialReport(params = {}) {
        return this.client.request('get', '/reports/financial', {}, params);
    }
    getFinancialOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/financial/operator/${operatorId}`, {}, params);
    }
    getFinancialOperatorRegisterReport(operatorId, registerId, params = {}) {
        return this.client.request('get', `/reports/financial/operator/${operatorId}/register/${registerId}`, {}, params);
    }
    getFinancialRegisterReport(registerId, params = {}) {
        return this.client.request('get', `/reports/financial/register/${registerId}`, {}, params);
    }
    getHostUsageReport(params = {}) {
        return this.client.request('get', '/reports/hostusage', {}, params);
    }
    getHostUsageHostGroupReport(hostGroupId, params = {}) {
        return this.client.request('get', `/reports/hostusage/hostgroup/${hostGroupId}`, {}, params);
    }
    getProductReport(productId, params = {}) {
        return this.client.request('get', `/reports/product/${productId}`, {}, params);
    }
    getProductsReport(params = {}) {
        return this.client.request('get', '/reports/products', {}, params);
    }
    getProductsUserReport(userId, params = {}) {
        return this.client.request('get', `/reports/products/user/${userId}`, {}, params);
    }
    getProductsLogReport(params = {}) {
        return this.client.request('get', '/reports/productslog', {}, params);
    }
    getProductsLogProductReport(productId, params = {}) {
        return this.client.request('get', `/reports/productslog/product/${productId}`, {}, params);
    }
    getProductsLogProductOperatorReport(productId, operatorId, params = {}) {
        return this.client.request('get', `/reports/productslog/product/${productId}/operator/${operatorId}`, {}, params);
    }
    getProductsLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/productslog/operator/${operatorId}`, {}, params);
    }
    getStockReport(params = {}) {
        return this.client.request('get', '/reports/stock', {}, params);
    }
    getTransactionsLogReport(params = {}) {
        return this.client.request('get', '/reports/transactionslog', {}, params);
    }
    getTransactionsLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/transactionslog/operator/${operatorId}`, {}, params);
    }
    getTransactionsLogOperatorRegisterReport(operatorId, registerId, params = {}) {
        return this.client.request('get', `/reports/transactionslog/operator/${operatorId}/register/${registerId}`, {}, params);
    }
    getTransactionsLogOperatorRegisterUserReport(operatorId, registerId, userId, params = {}) {
        return this.client.request('get', `/reports/transactionslog/operator/${operatorId}/register/${registerId}/user/${userId}`, {}, params);
    }
    getShiftsLogReport(params = {}) {
        return this.client.request('get', '/reports/shiftslog', {}, params);
    }
    getShiftsLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/shiftslog/operator/${operatorId}`, {}, params);
    }
    getShiftsLogOperatorRegisterReport(operatorId, registerId, params = {}) {
        return this.client.request('get', `/reports/shiftslog/operator/${operatorId}/register/${registerId}`, {}, params);
    }
    getShiftsLogRegisterReport(registerId, params = {}) {
        return this.client.request('get', `/reports/shiftslog/register/${registerId}`, {}, params);
    }
    getInvoicesLogReport(params = {}) {
        return this.client.request('get', '/reports/invoiceslog', {}, params);
    }
    getInvoicesLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/invoiceslog/operator/${operatorId}`, {}, params);
    }
    getInvoicesLogOperatorRegisterReport(operatorId, registerId, params = {}) {
        return this.client.request('get', `/reports/invoiceslog/operator/${operatorId}/register/${registerId}`, {}, params);
    }
    getInvoicesLogRegisterReport(registerId, params = {}) {
        return this.client.request('get', `/reports/invoiceslog/register/${registerId}`, {}, params);
    }
    getInvoiceReport(invoiceId, params = {}) {
        return this.client.request('get', `/reports/invoice/${invoiceId}`, {}, params);
    }
    getApplicationsReport(params = {}) {
        return this.client.request('get', '/reports/applications', {}, params);
    }
    getApplicationReport(applicationId, params = {}) {
        return this.client.request('get', `/reports/application/${applicationId}`, {}, params);
    }
    getApplicationUserReport(applicationId, userId, params = {}) {
        return this.client.request('get', `/reports/application/${applicationId}/user/${userId}`, {}, params);
    }
    getOrdersLogReport(params = {}) {
        return this.client.request('get', '/reports/orderslog', {}, params);
    }
    getOrdersLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/orderslog/operator/${operatorId}`, {}, params);
    }
    getOrdersLogOperatorUserReport(operatorId, userId, params = {}) {
        return this.client.request('get', `/reports/orderslog/operator/${operatorId}/user/${userId}`, {}, params);
    }
    getOrdersLogUserReport(userId, params = {}) {
        return this.client.request('get', `/reports/orderslog/user/${userId}`, {}, params);
    }
    getSessionsLogReport(params = {}) {
        return this.client.request('get', '/reports/sessionslog', {}, params);
    }
    getSessionsLogOperatorReport(operatorId, params = {}) {
        return this.client.request('get', `/reports/sessionslog/operator/${operatorId}`, {}, params);
    }
    getSessionsLogOperatorUserReport(operatorId, userId, params = {}) {
        return this.client.request('get', `/reports/sessionslog/operator/${operatorId}/user/${userId}`, {}, params);
    }
    getSessionsLogOperatorUserHostReport(operatorId, userId, hostId, params = {}) {
        return this.client.request('get', `/reports/sessionslog/operator/${operatorId}/user/${userId}/host/${hostId}`, {}, params);
    }
    getUserReport(userId, params = {}) {
        return this.client.request('get', `/reports/user/${userId}`, {}, params);
    }
    getTopUsersReport(topUsersNumber, params = {}) {
        return this.client.request('get', `/reports/topusers/${topUsersNumber}`, {}, params);
    }
    getLicensesReport(params = {}) {
        return this.client.request('get', '/reports/licenses', {}, params);
    }
    getLicensesApplicationReport(applicationId, params = {}) {
        return this.client.request('get', `/reports/licenses/application/${applicationId}`, {}, params);
    }
    getLicenseReport(licenseId, params = {}) {
        return this.client.request('get', `/reports/license/${licenseId}`, {}, params);
    }
    getZLogReport(params = {}) {
        return this.client.request('get', '/reports/zlog', {}, params);
    }
    getZReport(params = {}) {
        return this.client.request('get', '/reports/z', {}, params);
    }
    getAssetsLogReport(params = {}) {
        return this.client.request('get', '/reports/assetslog', {}, params);
    }
    getAssetsLogAssetTypeReport(assetTypeId, params = {}) {
        return this.client.request('get', `/reports/assetslog/assettype/${assetTypeId}`, {}, params);
    }
    getAssetsLogAssetTypeAssetReport(assetTypeId, assetId, params = {}) {
        return this.client.request('get', `/reports/assetslog/assettype/${assetTypeId}/asset/${assetId}`, {}, params);
    }
    getAssetsLogAssetReport(assetId, params = {}) {
        return this.client.request('get', `/reports/assetslog/asset/${assetId}`, {}, params);
    }
}
