import { GizmoClient } from '../GizmoClient.js';

/**
 * Class representing a Products Bundle.
 */
export class ProductsBundle {
    /**
     * Create a Products Bundle instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get bundled products for a bundle.
     * @param {number|string} id - Bundle ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} List of bundled products
     */
    getProductsBundleBundledProducts(id, params = {}) {
        return this.client.request('get', `/v3.0/products/bundle/${id}/bundledproducts`, {}, params);
    }

    /**
     * Get bundled product by ID for a bundle.
     * @param {number|string} id - Bundle ID
     * @param {number|string} bundledProductId - Bundled product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} Bundled product details
     */
    getProductsBundleBundledProductById(id, bundledProductId, params = {}) {
        return this.client.request('get', `/v3.0/products/bundle/${id}/bundledproducts/${bundledProductId}`, {}, params);
    }

    /**
     * Get user prices for a bundled product in a bundle.
     * @param {number|string} id - Bundle ID
     * @param {number|string} bundledProductId - Bundled product ID
     * @param {Object} params - Query parameters
     * @returns {Promise<any>} User prices for bundled product
     */
    getProductsBundleBundledProductUserPrices(id, bundledProductId, params = {}) {
        return this.client.request('get', `/v3.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`, {}, params);
    }
}
