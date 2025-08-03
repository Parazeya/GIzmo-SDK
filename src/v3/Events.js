import { GizmoClient } from '../GizmoClient.js';

export class Events {
    constructor(client) {
        this.client = client;
    }
    getEventsChannel(uniqueChannelName, params = {}) {
        return this.client.request('get', `/v3.0/events/channel/${uniqueChannelName}`, {}, params);
    }
    getEventsEntity(params = {}) {
        return this.client.request('get', '/v3.0/events/entity', {}, params);
    }
    getEventsMetadata(params = {}) {
        return this.client.request('get', '/v3.0/events/metadata', {}, params);
    }
}
