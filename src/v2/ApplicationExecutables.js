import { GizmoClient } from '../GizmoClient.js';

export class ApplicationExecutables {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/applicationexecutables', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/applicationexecutables/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/applicationexecutables', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/applicationexecutables', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/applicationexecutables/${id}`);
    }

    // PersonalFiles
    getPersonalFiles(id, params = {}) {
        return this.client.request('get', `/v2.0/applicationexecutables/${id}/personalfiles`, {}, params);
    }
    addPersonalFile(id, data) {
        return this.client.request('post', `/v2.0/applicationexecutables/${id}/personalfiles`, data);
    }
    updatePersonalFiles(data) {
        return this.client.request('put', '/v2.0/applicationexecutables/personalfiles', data);
    }
    deletePersonalFile(id, personalFileId) {
        return this.client.request('delete', `/v2.0/applicationexecutables/${id}/personalfiles/${personalFileId}`);
    }

    // Deployments
    getDeployments(id, params = {}) {
        return this.client.request('get', `/v2.0/applicationexecutables/${id}/deployments`, {}, params);
    }
    addDeployment(id, data) {
        return this.client.request('post', `/v2.0/applicationexecutables/${id}/deployments`, data);
    }
    updateDeployments(data) {
        return this.client.request('put', '/v2.0/applicationexecutables/deployments', data);
    }
    deleteDeployment(id, deploymentId) {
        return this.client.request('delete', `/v2.0/applicationexecutables/${id}/deployments/${deploymentId}`);
    }

    // Tasks
    getTasks(id, params = {}) {
        return this.client.request('get', `/v2.0/applicationexecutables/${id}/tasks`, {}, params);
    }
    addTask(id, data) {
        return this.client.request('post', `/v2.0/applicationexecutables/${id}/tasks`, data);
    }
    updateTasks(data) {
        return this.client.request('put', '/v2.0/applicationexecutables/tasks', data);
    }
    deleteTask(id, taskId) {
        return this.client.request('delete', `/v2.0/applicationexecutables/${id}/tasks/${taskId}`);
    }

    // Licenses
    getLicenses(id, params = {}) {
        return this.client.request('get', `/v2.0/applicationexecutables/${id}/licenses`, {}, params);
    }
    addLicense(id, data) {
        return this.client.request('post', `/v2.0/applicationexecutables/${id}/licenses`, data);
    }
    updateLicenses(data) {
        return this.client.request('put', '/v2.0/applicationexecutables/licenses', data);
    }
    deleteLicense(id, licenseId) {
        return this.client.request('delete', `/v2.0/applicationexecutables/${id}/licenses/${licenseId}`);
    }

    // CdImages
    getCdImages(id, params = {}) {
        return this.client.request('get', `/v2.0/applicationexecutables/${id}/cdimages`, {}, params);
    }
    addCdImage(id, data) {
        return this.client.request('post', `/v2.0/applicationexecutables/${id}/cdimages`, data);
    }
    updateCdImages(data) {
        return this.client.request('put', '/v2.0/applicationexecutables/cdimages', data);
    }
    deleteCdImage(id, cdimageId) {
        return this.client.request('delete', `/v2.0/applicationexecutables/${id}/cdimages/${cdimageId}`);
    }

    // Image
    getImage(id) {
        return this.client.request('get', `/v2.0/applicationexecutables/${id}/image`);
    }
    updateImage(id, data) {
        return this.client.request('put', `/v2.0/applicationexecutables/${id}/image`, data);
    }
}
