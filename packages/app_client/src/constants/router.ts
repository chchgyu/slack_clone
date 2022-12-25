export const ROUTER_NAME = {
  HOME: '/',
  SIGNUP: '/signup',
  MAIN: '/main',
  LOGIN: '/login',
} as const;

export type RouterName = typeof ROUTER_NAME[keyof typeof ROUTER_NAME];
