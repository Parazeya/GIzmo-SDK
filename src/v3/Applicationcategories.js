import { GizmoClient } from '../GizmoClient.js';

export class Applicationcategories {
    constructor(client) {
        this.client = client;
    }
    getApplicationcategories(params = {}) {
        return this.client.request('get', '/v3.0/applicationcategories', {}, params);
    }
    getApplicationcategoryById(id, params = {}) {
        return this.client.request('get', `/v3.0/applicationcategories/${id}`, {}, params);
    }
}
