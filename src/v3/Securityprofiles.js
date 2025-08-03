import { GizmoClient } from '../GizmoClient.js';

export class Securityprofiles {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a list of security profiles.
     * @param {Object} params
     * @param {number} [params.max] - Maximum number of records
     * @param {number} [params.skip] - Number of records to skip
     * @returns {Promise<any>}
     */
    getSecurityprofiles(params = {}) {
        return this.client.request('get', '/v3.0/securityprofiles', {}, params);
    }
    /**
     * Get security profile by ID.
     * @param {number|string} id - Security profile ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getSecurityprofileById(id, params = {}) {
        return this.client.request('get', `/v3.0/securityprofiles/${id}`, {}, params);
    }
    /**
     * Get restrictions for security profile.
     * @param {number|string} id - Security profile ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getSecurityprofileRestrictions(id, params = {}) {
        return this.client.request('get', `/v3.0/securityprofiles/${id}/restrictions`, {}, params);
    }
    /**
     * Get policies for security profile.
     * @param {number|string} id - Security profile ID
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getSecurityprofilePolicies(id, params = {}) {
        return this.client.request('get', `/v3.0/securityprofiles/${id}/policies`, {}, params);
    }
    /**
     * Get security profiles policies metadata.
     * @param {Object} params
     * @returns {Promise<any>}
     */
    getSecurityprofilesPoliciesMetadata(params = {}) {
        return this.client.request('get', '/v3.0/securityprofiles/policies/metadata', {}, params);
    }
}
