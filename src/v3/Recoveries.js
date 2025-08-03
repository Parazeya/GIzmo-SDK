import { GizmoClient } from '../GizmoClient.js';

export class Recoveries {
    constructor(client) {
        this.client = client;
    }
    getRecoveriesPasswordUsernamePhone(username, params = {}) {
        return this.client.request('get', `/v3.0/recoveries/password/${username}/phone`, {}, params);
    }
    getRecoveriesPasswordUsernameEmail(username, params = {}) {
        return this.client.request('get', `/v3.0/recoveries/password/${username}/email`, {}, params);
    }
    getRecoveriesPasswordTokenConfirmationCodeComplete(token, confirmationCode, params = {}) {
        return this.client.request('get', `/v3.0/recoveries/password/${token}/${confirmationCode}/complete`, {}, params);
    }
}
