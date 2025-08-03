import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing the public options.
 */
export class Publicoptions {
    /**
     * Create a Publicoptions instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get general public options.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} General public options
     */
    getPublicoptionsGeneral(params = {}) {
        return this.client.request('get', '/v3.0/publicoptions/general', {}, params);
    }

    /**
     * Get general public options pack.
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} General public options pack
     */
    getPublicoptionsGeneralPack(params = {}) {
        return this.client.request('get', '/v3.0/publicoptions/general/pack', {}, params);
    }
}
