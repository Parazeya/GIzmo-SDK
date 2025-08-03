import { GizmoClient } from '../GizmoClient.js';

export class Attributes {
    constructor(client) {
        this.client = client;
    }
    getAttributes() {
        return this.client.request('get', '/attributes');
    }
    addAttribute(data) {
        return this.client.request('put', '/attributes', data);
    }
    updateAttribute(data) {
        return this.client.request('post', '/attributes', data);
    }
    deleteAttribute(attributeId) {
        return this.client.request('delete', `/attributes/${attributeId}`);
    }
}
