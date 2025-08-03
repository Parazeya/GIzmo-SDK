import { GizmoClient } from '../GizmoClient.js';

/**
 * Class for product operations.
 */
export class Products {
    /**
     * Create a Products instance.
     * @param {GizmoClient} client - The GizmoClient instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all products.
     * @returns {Promise<any>} List of products
     */
    getProducts() {
        return this.client.request('get', '/products');
    }
    /**
     * Get product by ID.
     * @param {number|string} productId - Product ID
     * @returns {Promise<any>} Product details
     */
    getProductById(productId) {
        return this.client.request('get', `/products/${productId}`);
    }
    /**
     * Get all time products.
     * @returns {Promise<any>} List of time products
     */
    getTimeProducts() {
        return this.client.request('get', '/products/time');
    }
    /**
     * Get time product by ID.
     * @param {number|string} timeProductId - Time product ID
     * @returns {Promise<any>} Time product details
     */
    getTimeProductById(timeProductId) {
        return this.client.request('get', `/products/time/${timeProductId}`);
    }
    /**
     * Get disallowed host groups for a time product.
     * @param {number|string} timeProductId - Time product ID
     * @returns {Promise<any>} Disallowed host groups
     */
    getDisallowedHostGroups(timeProductId) {
        return this.client.request('get', `/products/time/${timeProductId}/disallowedhostgroups`);
    }
}
