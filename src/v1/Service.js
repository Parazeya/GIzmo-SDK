import { GizmoClient } from '../GizmoClient.js';

export class Service {
    constructor(client) {
        this.client = client;
    }
    getServiceTime() {
        return this.client.request('get', '/service');
    }
    stopService() {
        return this.client.request('post', '/service/stop');
    }
    restartService() {
        return this.client.request('post', '/service/restart');
    }
    getServiceStatus() {
        return this.client.request('get', '/service/status');
    }
    getServiceVersion() {
        return this.client.request('get', '/service/version');
    }
    getServiceModuleInfo() {
        return this.client.request('get', '/service/module');
    }
    getServiceHardwareId() {
        return this.client.request('get', '/service/hardwareid');
    }
    getServiceSettings() {
        return this.client.request('get', '/service/settings');
    }
    getServiceNetworkStats() {
        return this.client.request('get', '/service/network/stats');
    }
}
