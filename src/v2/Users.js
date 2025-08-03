import { GizmoClient } from '../GizmoClient.js';

export class Users {
    constructor(client) {
        this.client = client;
    }
    getAll(params = {}) {
        return this.client.request('get', '/v2.0/users', {}, params);
    }
    getById(id) {
        return this.client.request('get', `/v2.0/users/${id}`);
    }
    create(data) {
        return this.client.request('post', '/v2.0/users', data);
    }
    update(data) {
        return this.client.request('put', '/v2.0/users', data);
    }
    delete(id) {
        return this.client.request('delete', `/v2.0/users/${id}`);
    }

    // Атрибуты пользователя
    getAttributes(id, params = {}) {
        return this.client.request('get', `/v2.0/users/${id}/attributes`, {}, params);
    }
    addAttribute(id, data) {
        return this.client.request('post', `/v2.0/users/${id}/attributes`, data);
    }
    updateAttributes(data) {
        return this.client.request('put', '/v2.0/users/attributes', data);
    }
    deleteAttribute(id, userAttributeId) {
        return this.client.request('delete', `/v2.0/users/${id}/attributes/${userAttributeId}`);
    }

    // Заметки пользователя
    getNotes(id, params = {}) {
        return this.client.request('get', `/v2.0/users/${id}/notes`, {}, params);
    }
    addNote(id, data) {
        return this.client.request('post', `/v2.0/users/${id}/notes`, data);
    }
    updateNotes(data) {
        return this.client.request('put', '/v2.0/users/notes', data);
    }
    getNoteById(id, userNoteId) {
        return this.client.request('get', `/v2.0/users/${id}/notes/${userNoteId}`);
    }
    deleteNote(id, userNoteId) {
        return this.client.request('delete', `/v2.0/users/${id}/notes/${userNoteId}`);
    }

    // Картинка пользователя
    getPicture(id) {
        return this.client.request('get', `/v2.0/users/${id}/picture`);
    }
    updatePicture(id, data) {
        return this.client.request('put', `/v2.0/users/${id}/picture`, data);
    }

    // Соглашения пользователя
    getUserAgreements(id) {
        return this.client.request('get', `/v2.0/users/${id}/useragreements`);
    }
    acceptUserAgreement(id, userAgreementId) {
        return this.client.request('put', `/v2.0/users/${id}/useragreements/${userAgreementId}/accept`);
    }
    rejectUserAgreement(id, userAgreementId) {
        return this.client.request('put', `/v2.0/users/${id}/useragreements/${userAgreementId}/reject`);
    }
    getPendingUserAgreements(id) {
        return this.client.request('get', `/v2.0/users/${id}/useragreements/pending`);
    }

    // Время использования
    getUserUsageTime(id) {
        return this.client.request('get', `/v2.0/users/${id}/userusagetime`);
    }
}
