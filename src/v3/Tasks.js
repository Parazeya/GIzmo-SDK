import { GizmoClient } from '../GizmoClient.js';

export class Tasks {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of tasks.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getTasks(params = {}) {
        return this.client.request('get', '/v3.0/tasks', {}, params);
    }
    /**
     * Get task by ID.
     * @param {number|string} id - Task ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getTaskById(id, params = {}) {
        return this.client.request('get', `/v3.0/tasks/${id}`, {}, params);
    }
}
