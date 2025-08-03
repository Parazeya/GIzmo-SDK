import { GizmoClient } from '../GizmoClient.js';

export class Products {
    constructor(client) {
        this.client = client;
    }
    getProducts() {
        return this.client.request('get', '/products');
    }
    getProductById(productId) {
        return this.client.request('get', `/products/${productId}`);
    }
    getTimeProducts() {
        return this.client.request('get', '/products/time');
    }
    getTimeProductById(timeProductId) {
        return this.client.request('get', `/products/time/${timeProductId}`);
    }
    getDisallowedHostGroups(timeProductId) {
        return this.client.request('get', `/products/time/${timeProductId}/disallowedhostgroups`);
    }
}
