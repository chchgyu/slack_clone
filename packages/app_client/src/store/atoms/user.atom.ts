import type { User } from 'firebase/auth';
import { atom } from 'recoil';

const USER_ATOMS = {
  CURRENT_USER: 'currentUser',
} as const;

export const currentUserAtom = atom<User | null>({
  key: USER_ATOMS.CURRENT_USER,
  default: null,
});
