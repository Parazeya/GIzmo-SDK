import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for application operations.
 */
export class Apps {
    /**
     * Create an Apps instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all applications.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of applications
     */
    getApps(params = {}) {
        return this.client.request('get', '/apps', {}, params);
    }
    /**
     * Get application by ID.
     * @param {number|string} appId - Application ID
     * @returns {Promise<any>} Application details
     */
    getAppById(appId) {
        return this.client.request('get', `/apps/${appId}`);
    }
    /**
     * Get all application titles.
     * @returns {Promise<any>} List of titles
     */
    getAppTitles() {
        return this.client.request('get', '/apps/titles');
    }
    /**
     * Get application image by ID.
     * @param {number|string} appId - Application ID
     * @returns {Promise<any>} Image data
     */
    getAppImage(appId) {
        return this.client.request('get', `/apps/${appId}/image`);
    }
    /**
     * Get application rating by ID.
     * @param {number|string} appId - Application ID
     * @returns {Promise<any>} Rating data
     */
    getAppRating(appId) {
        return this.client.request('get', `/apps/${appId}/rating`);
    }
    /**
     * Get average rating for application.
     * @param {number|string} appId - Application ID
     * @returns {Promise<any>} Average rating
     */
    getAppAverageRating(appId) {
        return this.client.request('get', `/apps/${appId}/rating/average`);
    }
    /**
     * Get rating count for application.
     * @param {number|string} appId - Application ID
     * @returns {Promise<any>} Rating count
     */
    getAppRatingCount(appId) {
        return this.client.request('get', `/apps/${appId}/rating/count`);
    }
    /**
     * Get info for all applications.
     * @returns {Promise<any>} Applications info
     */
    getAppsInfo() {
        return this.client.request('get', '/apps/infos');
    }
    /**
     * Get top rated applications info.
     * @returns {Promise<any>} Top rated applications
     */
    getAppsInfoTopRating() {
        return this.client.request('get', '/apps/infos/top/rating');
    }
    /**
     * Get top used applications info.
     * @returns {Promise<any>} Top used applications
     */
    getAppsInfoTopUse() {
        return this.client.request('get', '/apps/infos/top/use');
    }
}
