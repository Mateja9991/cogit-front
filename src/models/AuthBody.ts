import { User } from './User';

export type AuthBody = {
  user: User;
  token: string;
};
