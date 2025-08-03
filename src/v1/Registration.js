import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for registration operations.
 */
export class Registration {
    /**
     * Create a Registration instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Start mobile phone registration.
     * @param {string} mobilePhone - Mobile phone number
     * @returns {Promise<any>} Registration result
     */
    startMobilePhoneRegistration(mobilePhone) {
        return this.client.request('post', `/registration/mobilephone/${mobilePhone}`);
    }
    /**
     * Start email registration.
     * @param {string} emailAddress - Email address
     * @returns {Promise<any>} Registration result
     */
    startEmailRegistration(emailAddress) {
        return this.client.request('post', `/registration/email/${emailAddress}`);
    }
    /**
     * Complete registration.
     * @param {Object} data - Registration data
     * @returns {Promise<any>} Completion result
     */
    completeRegistration(data) {
        return this.client.request('post', '/registration/complete', data);
    }
}
