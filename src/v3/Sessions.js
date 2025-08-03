import { GizmoClient } from '../GizmoClient.js';

export class Sessions {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of sessions.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getSessions(params = {}) {
        return this.client.request('get', '/v3.0/sessions', {}, params);
    }
}
