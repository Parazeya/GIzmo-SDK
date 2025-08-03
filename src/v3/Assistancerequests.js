import { GizmoClient } from '../GizmoClient.js';

export class Assistancerequests {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of assistance requests.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getAssistanceRequests(params = {}) {
        return this.client.request('get', '/v3.0/assistancerequests', {}, params);
    }
    /**
     * Get assistance request by ID.
     * @param {number|string} id - Assistance request ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getAssistanceRequestById(id, params = {}) {
        return this.client.request('get', `/v3.0/assistancerequests/${id}`, {}, params);
    }
    /**
     * Reject assistance request.
     * @param {number|string} id - Assistance request ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    rejectAssistanceRequest(id, params = {}) {
        return this.client.request('get', `/v3.0/assistancerequests/${id}/reject`, {}, params);
    }
    /**
     * Accept assistance request.
     * @param {number|string} id - Assistance request ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    acceptAssistanceRequest(id, params = {}) {
        return this.client.request('get', `/v3.0/assistancerequests/${id}/accept`, {}, params);
    }
}
