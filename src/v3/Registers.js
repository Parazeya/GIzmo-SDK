import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing register operations.
 */
export class Registers {
    /**
     * Create a Registers instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get a list of registers.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of registers
     */
    getRegisters(params = {}) {
        return this.client.request('get', '/v3.0/registers', {}, params);
    }

    /**
     * Get register by ID.
     * @param {number|string} id - Register ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Register details
     */
    getRegisterById(id, params = {}) {
        return this.client.request('get', `/v3.0/registers/${id}`, {}, params);
    }

    /**
     * Undelete a register by ID.
     * @param {number|string} id - Register ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Undelete result
     */
    undeleteRegister(id, params = {}) {
        return this.client.request('get', `/v3.0/registers/${id}/undelete`, {}, params);
    }

    /**
     * Get register name by ID.
     * @param {number|string} id - Register ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Register name
     */
    getRegisterName(id, params = {}) {
        return this.client.request('get', `/v3.0/registers/${id}/name`, {}, params);
    }

    /**
     * Check if register name exists.
     * @param {string} name - Register name
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Existence result
     */
    getRegisterNameExists(name, params = {}) {
        return this.client.request('get', `/v3.0/registers/name/${name}/exist`, {}, params);
    }

    /**
     * Check if register name exists in a branch.
     * @param {string} name - Register name
     * @param {number|string} branchId - Branch ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Existence result
     */
    getRegisterNameBranchExists(name, branchId, params = {}) {
        return this.client.request('get', `/v3.0/registers/name/${name}/branch/${branchId}/exist`, {}, params);
    }
}
