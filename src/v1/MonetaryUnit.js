import { GizmoClient } from '../GizmoClient.js';

export class MonetaryUnit {
    constructor(client) {
        this.client = client;
    }
    getMonetaryUnits() {
        return this.client.request('get', '/monetaryunit');
    }
    addMonetaryUnit(data) {
        return this.client.request('put', '/monetaryunit', data);
    }
    updateMonetaryUnit(data) {
        return this.client.request('post', '/monetaryunit', data);
    }
    deleteMonetaryUnit(monetaryUnitId) {
        return this.client.request('delete', `/monetaryunit/${monetaryUnitId}`);
    }
}
