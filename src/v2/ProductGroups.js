import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for product group operations.
 */
export class ProductGroups {
    /**
     * Create a ProductGroups instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all product groups.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of product groups
     */
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/productgroups', {}, params);
    }
    /**
     * Get product group by ID.
     * @param {number|string} id - Product group ID
     * @returns {Promise<any>} Product group details
     */
    getById(id) {
        return this.client.request('get', `/v2.0/productgroups/${id}`);
    }
    /**
     * Create a new product group.
     * @param {Object} data - Product group data
     * @returns {Promise<any>} Created product group
     */
    create(data) {
        return this.client.request('post', '/v2.0/productgroups', data);
    }
    /**
     * Update a product group.
     * @param {Object} data - Product group data
     * @returns {Promise<any>} Updated product group
     */
    update(data) {
        return this.client.request('put', '/v2.0/productgroups', data);
    }
    /**
     * Delete a product group by ID.
     * @param {number|string} id - Product group ID
     * @returns {Promise<any>} Delete result
     */
    delete(id) {
        return this.client.request('delete', `/v2.0/productgroups/${id}`);
    }
    /**
     * Get applications in product group.
     * @param {number|string} id - Product group ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of applications
     */
    getApplications(id, params = {}) {
        return this.client.request('get', `/v2.0/productgroups/${id}/applications`, {}, params);
    }
    /**
     * Add application to product group.
     * @param {number|string} id - Product group ID
     * @param {Object} data - Application data
     * @returns {Promise<any>} Add result
     */
    addApplication(id, data) {
        return this.client.request('post', `/v2.0/productgroups/${id}/applications`, data);
    }
    /**
     * Delete application from product group.
     * @param {number|string} id - Product group ID
     * @param {number|string} applicationId - Application ID
     * @returns {Promise<any>} Delete result
     */
    deleteApplication(id, applicationId) {
        return this.client.request('delete', `/v2.0/productgroups/${id}/applications/${applicationId}`);
    }
}
