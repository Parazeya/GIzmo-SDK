import { GizmoClient } from '../GizmoClient.js';

export class Schedules {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of schedules.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getSchedules(params = {}) {
        return this.client.request('get', '/v3.0/schedules', {}, params);
    }
    /**
     * Get schedule by ID.
     * @param {number|string} id - Schedule ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getScheduleById(id, params = {}) {
        return this.client.request('get', `/v3.0/schedules/${id}`, {}, params);
    }
    /**
     * Enable schedule.
     * @param {number|string} id - Schedule ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    enableSchedule(id, params = {}) {
        return this.client.request('get', `/v3.0/schedules/${id}/enable`, {}, params);
    }
    /**
     * Disable schedule.
     * @param {number|string} id - Schedule ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    disableSchedule(id, params = {}) {
        return this.client.request('get', `/v3.0/schedules/${id}/disable`, {}, params);
    }
    /**
     * Get schedule name.
     * @param {number|string} id - Schedule ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getScheduleName(id, params = {}) {
        return this.client.request('get', `/v3.0/schedules/${id}/name`, {}, params);
    }
    /**
     * Check if schedule name exists.
     * @param {string} name - Schedule name
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getScheduleNameExists(name, params = {}) {
        return this.client.request('get', `/v3.0/schedules/name/${name}/exist`, {}, params);
    }
    /**
     * Get schedule description.
     * @param {number|string} id - Schedule ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getScheduleDescription(id, params = {}) {
        return this.client.request('get', `/v3.0/schedules/${id}/description`, {}, params);
    }
    /**
     * Get schedules report.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getSchedulesReport(params = {}) {
        return this.client.request('get', '/v3.0/schedules/report', {}, params);
    }
    /**
     * Get schedules report by ID.
     * @param {number|string} id - Report ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getSchedulesReportById(id, params = {}) {
        return this.client.request('get', `/v3.0/schedules/report/${id}`, {}, params);
    }
}
