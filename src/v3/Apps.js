import { GizmoClient } from '../GizmoClient.js';

export class Apps {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of applications.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @param {string} [params.name] - Filter by name
     * @returns {Promise<any>}
     */
    getApplications(params = {}) {
        return this.client.request('get', '/v3.0/applications', {}, params);
    }
    /**
     * Get application by ID.
     * @param {number|string} id - Application ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getApplicationById(id, params = {}) {
        return this.client.request('get', `/v3.0/applications/${id}`, {}, params);
    }
    /**
     * Get application image.
     * @param {number|string} id - Application ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getApplicationImage(id, params = {}) {
        return this.client.request('get', `/v3.0/applications/${id}/image`, {}, params);
    }
    /**
     * Duplicate application.
     * @param {number|string} id - Application ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    duplicateApplication(id, params = {}) {
        return this.client.request('get', `/v3.0/applications/${id}/duplicate`, {}, params);
    }
}
