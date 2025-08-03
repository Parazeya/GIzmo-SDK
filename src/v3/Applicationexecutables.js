import { GizmoClient } from '../GizmoClient.js';

export class Applicationexecutables {
    constructor(client) {
        this.client = client;
    }
    getApplicationexecutables(params = {}) {
        return this.client.request('get', '/v3.0/applicationexecutables', {}, params);
    }
    getApplicationexecutableById(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationexecutables/${id}`, {}, params);
    }
    getApplicationexecutableAgerating(params = {}) {
        return this.client.request('get', '/v3.0/applicationexecutables/agerating', {}, params);
    }
    getApplicationexecutablePersonalfiles(params = {}) {
        return this.client.request('get', '/v3.0/applicationexecutables/personalfiles', {}, params);
    }
    getApplicationexecutableDeployments(params = {}) {
        return this.client.request('get', '/v3.0/applicationexecutables/deployments', {}, params);
    }
    getApplicationexecutableTasks(params = {}) {
        return this.client.request('get', '/v3.0/applicationexecutables/tasks', {}, params);
    }
    getApplicationexecutableLicenses(params = {}) {
        return this.client.request('get', '/v3.0/applicationexecutables/licenses', {}, params);
    }
    getApplicationexecutableCdimages(params = {}) {
        return this.client.request('get', '/v3.0/applicationexecutables/cdimages', {}, params);
    }
}
