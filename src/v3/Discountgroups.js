import { GizmoClient } from '../GizmoClient.js';

export class Discountgroups {
    constructor(client) {
        this.client = client;
    }
    getDiscountgroups(params = {}) {
        return this.client.request('get', '/v3.0/discountgroups', {}, params);
    }
    getDiscountgroupById(id, params = {}) {
        return this.client.request('get', `/v3.0/discountgroups/${id}`, {}, params);
    }
}
