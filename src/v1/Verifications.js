import { GizmoClient } from '../GizmoClient.js';

export class Verifications {
    constructor(client) {
        this.client = client;
    }
    verifyEmail(userId, emailAddress) {
        return this.client.request('post', `/verifications/email/${userId}/${emailAddress}`);
    }
    verifyEmailSimple(emailAddress) {
        return this.client.request('post', `/verifications/email/${emailAddress}`);
    }
    completeEmailVerification(token, confirmationCode) {
        return this.client.request('post', `/verifications/email/${token}/${confirmationCode}/complete`);
    }
    verifyMobilePhone(userId, mobilePhoneNumber) {
        return this.client.request('post', `/verifications/mobilephone/${userId}/${mobilePhoneNumber}`);
    }
    verifyMobilePhoneSimple(mobilePhoneNumber) {
        return this.client.request('post', `/verifications/mobilephone/${mobilePhoneNumber}`);
    }
    completeMobilePhoneVerification(token, confirmationCode) {
        return this.client.request('post', `/verifications/mobilephone/${token}/${confirmationCode}/complete`);
    }
}
