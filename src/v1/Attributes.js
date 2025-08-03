import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for attribute operations.
 */
export class Attributes {
    /**
     * Create an Attributes instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all attributes.
     * @returns {Promise<any>} List of attributes
     */
    getAttributes() {
        return this.client.request('get', '/attributes');
    }
    /**
     * Add a new attribute.
     * @param {Object} data - Attribute data
     * @returns {Promise<any>} Added attribute
     */
    addAttribute(data) {
        return this.client.request('put', '/attributes', data);
    }
    /**
     * Update an attribute.
     * @param {Object} data - Attribute data
     * @returns {Promise<any>} Updated attribute
     */
    updateAttribute(data) {
        return this.client.request('post', '/attributes', data);
    }
    /**
     * Delete an attribute by ID.
     * @param {number|string} attributeId - Attribute ID
     * @returns {Promise<any>} Delete result
     */
    deleteAttribute(attributeId) {
        return this.client.request('delete', `/attributes/${attributeId}`);
    }
}
