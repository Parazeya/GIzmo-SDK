import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing the current operators.
 */
export class OperatorsCurrent {
    /**
     * Create an OperatorsCurrent instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get current operator info.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Current operator info
     */
    getOperatorsCurrent(params = {}) {
        return this.client.request('get', '/v3.0/operators/current', {}, params);
    }

    /**
     * Get current operator shift options.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Shift options
     */
    getOperatorsCurrentShiftOptions(params = {}) {
        return this.client.request('get', '/v3.0/operators/current/shift/options', {}, params);
    }

    /**
     * Get current operator branches.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Branches
     */
    getOperatorsCurrentBranches(params = {}) {
        return this.client.request('get', '/v3.0/operators/current/branches', {}, params);
    }

    /**
     * Get current operator registers.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Registers
     */
    getOperatorsCurrentRegisters(params = {}) {
        return this.client.request('get', '/v3.0/operators/current/registers', {}, params);
    }
}
