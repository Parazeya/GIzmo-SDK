import { GizmoClient } from '../GizmoClient.js';

export class Hostcomputers {
    constructor(client) {
        this.client = client;
    }
    getHostComputerScreen(hostId, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/screen`, {}, params);
    }
    getHostComputerScreenLast(hostId, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/screen/last`, {}, params);
    }
    rebootHostComputer(hostId, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/reboot`, {}, params);
    }
    shutdownHostComputer(hostId, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/shutdown`, {}, params);
    }
    setHostComputerInputLock(hostId, value, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/input/lock/${value}`, {}, params);
    }
    getHostComputerInputLock(hostId, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/input/lock`, {}, params);
    }
    setHostComputerMaintenance(hostId, value, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/maintenance/${value}`, {}, params);
    }
    getHostComputerMaintenance(hostId, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/maintenance`, {}, params);
    }
    setHostComputerSecurity(hostId, value, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/security/${value}`, {}, params);
    }
    getHostComputerSecurity(hostId, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/security`, {}, params);
    }
    setHostComputerOutOfOrder(hostId, value, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/outoforder/${value}`, {}, params);
    }
    getHostComputerOutOfOrder(hostId, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/outoforder`, {}, params);
    }
    restartHostComputerClient(hostId, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/client/restart`, {}, params);
    }
    getHostComputersClientConnections(params = {}) {
        return this.client.request('get', '/v3.0/hostcomputers/client/connections', {}, params);
    }
    getHostComputerClientConnection(hostId, params = {}) {
        return this.client.request('get', `/v3.0/hostcomputers/${hostId}/client/connection`, {}, params);
    }
}
