import { GizmoClient } from '../GizmoClient.js';

export class Documents {
    constructor(client) {
        this.client = client;
    }
    getDocuments(params = {}) {
        return this.client.request('get', '/v3.0/documents', {}, params);
    }
    getDocumentById(id, params = {}) {
        return this.client.request('get', `/v3.0/documents/${id}`, {}, params);
    }
    undeleteDocument(id, params = {}) {
        return this.client.request('get', `/v3.0/documents/${id}/undelete`, {}, params);
    }
    getDocumentFileExists(fileName, params = {}) {
        return this.client.request('get', `/v3.0/documents/file/${fileName}/exists`, {}, params);
    }
    getDocumentDescription(id, params = {}) {
        return this.client.request('get', `/v3.0/documents/${id}/description`, {}, params);
    }
}
