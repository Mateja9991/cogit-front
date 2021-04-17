export type Role = 'admin' | 'standard';

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: Role[];
};
