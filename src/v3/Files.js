import { GizmoClient } from '../GizmoClient.js';

export class Files {
    constructor(client) {
        this.client = client;
    }
    getFiles(params = {}) {
        return this.client.request('get', '/v3.0/files', {}, params);
    }
    getFileById(id, params = {}) {
        return this.client.request('get', `/v3.0/files/${id}`, {}, params);
    }
    getFileHard(id, params = {}) {
        return this.client.request('get', `/v3.0/files/${id}/hard`, {}, params);
    }
    getFilesDeletedSize(params = {}) {
        return this.client.request('get', '/v3.0/files/deleted/size', {}, params);
    }
    getFilesDeletedCount(params = {}) {
        return this.client.request('get', '/v3.0/files/deleted/count', {}, params);
    }
}
