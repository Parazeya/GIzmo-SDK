import { GizmoClient } from '../GizmoClient.js';

export class Verifications {
    constructor(client) {
        this.client = client;
    }
    // Email
    verifyEmail(userId, emailAddress, data) {
        return this.client.request('post', `/v2.0/verifications/email/${userId}/${emailAddress}`, data);
    }
    verifyEmailSimple(emailAddress, data) {
        return this.client.request('post', `/v2.0/verifications/email/${emailAddress}`, data);
    }
    completeEmailVerification(token, confirmationCode, data) {
        return this.client.request('post', `/v2.0/verifications/email/${token}/${confirmationCode}/complete`, data);
    }
    // Mobile
    verifyMobile(userId, mobilePhoneNumber, data) {
        return this.client.request('post', `/v2.0/verifications/mobilephone/${userId}/${mobilePhoneNumber}`, data);
    }
    verifyMobileSimple(mobilePhoneNumber, data) {
        return this.client.request('post', `/v2.0/verifications/mobilephone/${mobilePhoneNumber}`, data);
    }
    completeMobileVerification(token, confirmationCode, data) {
        return this.client.request('post', `/v2.0/verifications/mobilephone/${token}/${confirmationCode}/complete`, data);
    }
}
