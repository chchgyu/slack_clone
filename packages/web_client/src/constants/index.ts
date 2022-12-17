export const ROUTER_NAME = {
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
} as const;

export type RouterName = typeof ROUTER_NAME[keyof typeof ROUTER_NAME];
