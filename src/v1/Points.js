import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for points operations.
 */
export class Points {
    /**
     * Create a Points instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all points transactions.
     * @returns {Promise<any>} List of points transactions
     */
    getPointsTransactions() {
        return this.client.request('get', '/points');
    }
    /**
     * Reset all points.
     * @returns {Promise<any>} Reset result
     */
    resetAllPoints() {
        return this.client.request('post', '/points/reset');
    }
    /**
     * Reset points for a user.
     * @param {number|string} userId - User ID
     * @returns {Promise<any>} Reset result
     */
    resetUserPoints(userId) {
        return this.client.request('post', `/points/${userId}/reset`);
    }
    /**
     * Set points for all users.
     * @param {number} amount - Points amount
     * @returns {Promise<any>} Set result
     */
    setAllUsersPoints(amount) {
        return this.client.request('post', `/points/${amount}`);
    }
    /**
     * Set points for a user.
     * @param {number|string} userId - User ID
     * @param {number} amount - Points amount
     * @returns {Promise<any>} Set result
     */
    setUserPoints(userId, amount) {
        return this.client.request('post', `/points/${userId}/${amount}`);
    }
}
