import type { User } from 'firebase/auth';
import { atom } from 'recoil';

const USER_ATOMS = {
  CURRENT_USER: 'currentUser',
  USER_LOADING: 'userLoading',
} as const;

export const currentUserAtom = atom<User | null>({
  key: USER_ATOMS.CURRENT_USER,
  default: null,
});

export const userLoadingAtom = atom<boolean>({
  key: USER_ATOMS.USER_LOADING,
  default: true,
});
