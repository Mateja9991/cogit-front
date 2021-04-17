import { AuthBody } from '../models/AuthBody';
import storageService, { STORAGE_KEYS } from './storageService';

export default {
  get authBody() {
    return storageService.getItem<AuthBody>(STORAGE_KEYS.AUTH);
  },

  get user() {
    return storageService.getItem<AuthBody>(STORAGE_KEYS.AUTH)?.user;
  },

  get token(): string {
    return storageService.getItem<AuthBody>(STORAGE_KEYS.AUTH)?.token;
  },

  saveAuthBody(authBody: AuthBody) {
    storageService.setItem(STORAGE_KEYS.AUTH, authBody);
  },

  removeAuthBody() {
    storageService.removeItem(STORAGE_KEYS.AUTH);
  },
};
