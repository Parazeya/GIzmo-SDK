import { GizmoClient } from '../GizmoClient.js';

export class Skins {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of skins.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getSkins(params = {}) {
        return this.client.request('get', '/v3.0/skins', {}, params);
    }
}
