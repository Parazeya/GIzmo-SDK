import { GizmoClient } from '../GizmoClient.js';

export class Registration {
    constructor(client) {
        this.client = client;
    }
    startMobilePhoneRegistration(mobilePhone) {
        return this.client.request('post', `/registration/mobilephone/${mobilePhone}`);
    }
    startEmailRegistration(emailAddress) {
        return this.client.request('post', `/registration/email/${emailAddress}`);
    }
    completeRegistration(data) {
        return this.client.request('post', '/registration/complete', data);
    }
}
