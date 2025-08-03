import { GizmoClient } from '../GizmoClient.js';

export class Hosts {
    constructor(client) {
        this.client = client;
    }
    getHosts() {
        return this.client.request('get', '/hosts');
    }
    getHostById(hostId) {
        return this.client.request('get', `/hosts/${hostId}`);
    }
    deleteHost(hostId) {
        return this.client.request('delete', `/hosts/${hostId}`);
    }
    getHostsByNumber(hostNumber) {
        return this.client.request('get', `/hosts/number/${hostNumber}`);
    }
    addHost(data) {
        return this.client.request('put', '/hosts/host', data);
    }
    updateHost(data) {
        return this.client.request('post', '/hosts/host', data);
    }
    addHostComputer(data) {
        return this.client.request('put', '/hosts/hostcomputer', data);
    }
    updateHostComputer(data) {
        return this.client.request('post', '/hosts/hostcomputer', data);
    }
    addHostEndpoint(data) {
        return this.client.request('put', '/hosts/hostendpoint', data);
    }
    updateHostEndpoint(data) {
        return this.client.request('post', '/hosts/hostendpoint', data);
    }
    getLastUserLogin(hostId) {
        return this.client.request('get', `/hosts/${hostId}/lastuserlogin`);
    }
    getLastUserLogout(hostId) {
        return this.client.request('get', `/hosts/${hostId}/lastuserlogout`);
    }
    setHostLockState(hostId, locked) {
        return this.client.request('post', `/hosts/${hostId}/lock/${locked}`);
    }
    setHostOrderState(hostId, inOrder) {
        return this.client.request('post', `/hosts/${hostId}/orderstate/${inOrder}`);
    }
}
