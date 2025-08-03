import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing branch name operations.
 */
export class BranchesName {
    /**
     * Create a BranchesName instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Check if branch name exists.
     * @param {string} name - Branch name
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Existence result
     */
    getBranchNameExists(name, params = {}) {
        return this.client.request('get', `/v3.0/branches/name/${name}/exist`, {}, params);
    }

    /**
     * Check if branch name exists in a specific branch.
     * @param {string} name - Branch name
     * @param {number|string} branchId - Branch ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Existence result
     */
    getBranchNameBranchExists(name, branchId, params = {}) {
        return this.client.request('get', `/v3.0/branches/name/${name}/branch/${branchId}/exist`, {}, params);
    }
}
