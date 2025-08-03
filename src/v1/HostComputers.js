import { GizmoClient } from '../GizmoClient.js';

export class HostComputers {
    constructor(client) {
        this.client = client;
    }
    getHostComputers() {
        return this.client.request('get', '/hostcomputers');
    }
    getHostComputerByHostname(hostname) {
        return this.client.request('get', `/hostcomputers/${hostname}`);
    }
    getHostProcesses(hostId) {
        return this.client.request('get', `/hostcomputers/${hostId}/process`);
    }
    createHostProcess(hostId, data) {
        return this.client.request('put', `/hostcomputers/${hostId}/process`, data);
    }
    terminateHostProcess(hostId) {
        return this.client.request('delete', `/hostcomputers/${hostId}/process`);
    }
    getHostProcessById(hostId, processId) {
        return this.client.request('get', `/hostcomputers/${hostId}/process/${processId}`);
    }
    terminateHostProcessById(hostId, processId) {
        return this.client.request('delete', `/hostcomputers/${hostId}/process/${processId}`);
    }
    getHostProcessByName(hostId, processName) {
        return this.client.request('get', `/hostcomputers/${hostId}/process/${processName}`);
    }
    setHostSecurityState(hostId, enabled) {
        return this.client.request('post', `/hostcomputers/${hostId}/security/${enabled}`);
    }
    getHostMaintenanceState(hostId) {
        return this.client.request('get', `/hostcomputers/${hostId}/maintenance`);
    }
    setHostMaintenanceState(hostId, enabled) {
        return this.client.request('post', `/hostcomputers/${hostId}/maintenance/${enabled}`);
    }
}
