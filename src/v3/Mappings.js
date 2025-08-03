import { GizmoClient } from '../GizmoClient.js';

export class Mappings {
    constructor(client) {
        this.client = client;
    }
    getMappings(params = {}) {
        return this.client.request('get', '/v3.0/mappings', {}, params);
    }
    getMappingById(id, params = {}) {
        return this.client.request('get', `/v3.0/mappings/${id}`, {}, params);
    }
    getMappingsVirtualDrive(params = {}) {
        return this.client.request('get', '/v3.0/mappings/virtualdrive', {}, params);
    }
    getMappingsVirtualFolder(params = {}) {
        return this.client.request('get', '/v3.0/mappings/virtualfolder', {}, params);
    }
    getMappingsNetworkDrive(params = {}) {
        return this.client.request('get', '/v3.0/mappings/networkdrive', {}, params);
    }
    getMappingsMountPointExist(mountPoint, params = {}) {
        return this.client.request('get', `/v3.0/mappings/mountpoint/${mountPoint}/exist`, {}, params);
    }
}
