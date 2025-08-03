import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for export operations.
 */
export class Export {
    /**
     * Create an Export instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Export application image.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Exported image
     */
    exportAppImage(params = {}) {
        return this.client.request('get', '/export/app/image', {}, params);
    }
}
