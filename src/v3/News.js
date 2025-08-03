import { GizmoClient } from '../GizmoClient.js';

export class News {
    constructor(client) {
        this.client = client;
    }
    getNews(params = {}) {
        return this.client.request('get', '/v3.0/news', {}, params);
    }
    getNewsById(id, params = {}) {
        return this.client.request('get', `/v3.0/news/${id}`, {}, params);
    }
    getNewsBranches(id, params = {}) {
        return this.client.request('get', `/v3.0/news/${id}/branches`, {}, params);
    }
}
