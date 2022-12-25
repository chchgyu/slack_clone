import { ChannelResponenseDto } from '@slack_clone/common';
import { atom } from 'recoil';

const CHANNEL_ATOMS = {
  CURRENT_CHANNEL: 'currentChannel',
} as const;

export const currentChannelAtom = atom<ChannelResponenseDto | null>({
  key: CHANNEL_ATOMS.CURRENT_CHANNEL,
  default: null,
});
