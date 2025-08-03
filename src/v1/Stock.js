import { GizmoClient } from '../GizmoClient.js';

export class Stock {
    constructor(client) {
        this.client = client;
    }
    getStock() {
        return this.client.request('get', '/stock');
    }
    getStockByProductId(productId) {
        return this.client.request('get', `/stock/${productId}`);
    }
    setStockAmount(productId, amount, data) {
        return this.client.request('put', `/stock/${productId}/${amount}`, data);
    }
    deleteStockAmount(productId, amount) {
        return this.client.request('delete', `/stock/${productId}/${amount}`);
    }
    postStockAmount(productId, amount, data) {
        return this.client.request('post', `/stock/${productId}/${amount}`, data);
    }
}
