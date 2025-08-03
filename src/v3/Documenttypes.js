import { GizmoClient } from '../GizmoClient.js';

export class Documenttypes {
    constructor(client) {
        this.client = client;
    }
    getDocumenttypes(params = {}) {
        return this.client.request('get', '/v3.0/documenttypes', {}, params);
    }
    getDocumenttypeById(id, params = {}) {
        return this.client.request('get', `/v3.0/documenttypes/${id}`, {}, params);
    }
    undeleteDocumenttype(id, params = {}) {
        return this.client.request('get', `/v3.0/documenttypes/${id}/undelete`, {}, params);
    }
}
