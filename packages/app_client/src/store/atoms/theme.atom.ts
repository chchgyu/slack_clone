import { atom } from 'recoil';

interface ThemeAtom {
  mainTheme: string;
  subTheme: string;
}

const initialState: ThemeAtom = {
  mainTheme: '#4c3c4c',
  subTheme: '#eee',
};

const THEME_ATOMS = {
  THEME_ROOT: 'themeRoot',
} as const;

export const themeAtom = atom<ThemeAtom>({
  key: THEME_ATOMS.THEME_ROOT,
  default: initialState,
});
