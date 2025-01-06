import { accounts } from './accounts';
import { sessions } from './sessions';
import { teamMembers } from './team-members';
import { teams } from './teams';
import { users } from './users';
import { verificationTokens } from './verification-tokens';

export { accounts, sessions, teamMembers, teams, users, verificationTokens };

export type User = typeof users.$inferSelect;

export const schema = { accounts, sessions, teamMembers, teams, users, verificationTokens };

export default schema;