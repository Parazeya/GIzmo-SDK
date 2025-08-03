import { GizmoClient } from '../GizmoClient.js';

export class Export {
    constructor(client) {
        this.client = client;
    }
    exportAppImage(params = {}) {
        return this.client.request('get', '/export/app/image', {}, params);
    }
}
