import httpClient from '../httpClient';
import { AuthBody } from '../../models/AuthBody';

const authPath = (routePath: TemplateStringsArray) => `auth/${routePath}`;

function register(userData: FormData) {
  return httpClient.post<AuthBody>(authPath`register`, userData);
}

function login(userData: { email: string; password: string }) {
  return httpClient.post<AuthBody>(authPath`login`, userData);
}

export default {
  register,
  login,
};
