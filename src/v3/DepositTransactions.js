import { GizmoClient } from '../GizmoClient.js';

export class DepositTransactions {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of deposit transactions.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getDepositTransactions(params = {}) {
        return this.client.request('get', '/v3.0/deposittransactions', {}, params);
    }
    /**
     * Get deposit transaction by ID.
     * @param {number|string} id - Deposit transaction ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getDepositTransactionById(id, params = {}) {
        return this.client.request('get', `/v3.0/deposittransactions/${id}`, {}, params);
    }
    /**
     * Void deposit transaction.
     * @param {number|string} id - Deposit transaction ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    voidDepositTransaction(id, params = {}) {
        return this.client.request('get', `/v3.0/deposittransactions/${id}/void`, {}, params);
    }
}
