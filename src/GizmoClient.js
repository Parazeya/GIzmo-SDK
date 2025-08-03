import axios from 'axios';

export class GizmoClient {
    constructor({ ip, port, ssl = false, username, password }) {
        this.baseURL = `${ssl ? 'https' : 'http'}://${ip}:${port}/api`;
        this.auth = { username, password };
        this.axios = axios.create({
            baseURL: this.baseURL,
            auth: this.auth,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async request(method, url, data = {}, params = {}) {
        const finalUrl = url.startsWith('/') ? url : `/${url}`;
        try {
            const res = await this.axios({
                method,
                url: finalUrl,
                data,
                params,
            });
            return res.data;
        } catch (error) {
            throw error;
        }
    }
}
