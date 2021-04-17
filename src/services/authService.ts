import { Role, User } from 'models/User';

export default {
  checkRolesForUser(user: User, roles: Role[], atLeastOne = true) {
    return user.roles[atLeastOne ? 'some' : 'every']((role) =>
      roles.includes(role),
    );
  },
};
