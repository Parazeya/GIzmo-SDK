import { GizmoClient } from '../GizmoClient.js';

export class Apps {
    constructor(client) {
        this.client = client;
    }
    // Методы для /api/apps
    getApps(params = {}) {
        return this.client.request('get', '/apps', {}, params);
    }
    getAppById(appId) {
        return this.client.request('get', `/apps/${appId}`);
    }
    getAppTitles() {
        return this.client.request('get', '/apps/titles');
    }
    getAppImage(appId) {
        return this.client.request('get', `/apps/${appId}/image`);
    }
    getAppRating(appId) {
        return this.client.request('get', `/apps/${appId}/rating`);
    }
    getAppAverageRating(appId) {
        return this.client.request('get', `/apps/${appId}/rating/average`);
    }
    getAppRatingCount(appId) {
        return this.client.request('get', `/apps/${appId}/rating/count`);
    }
    getAppsInfo() {
        return this.client.request('get', '/apps/infos');
    }
    getAppsInfoTopRating() {
        return this.client.request('get', '/apps/infos/top/rating');
    }
    getAppsInfoTopUse() {
        return this.client.request('get', '/apps/infos/top/use');
    }
}
