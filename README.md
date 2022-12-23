## slack clone repo

- nx-workspace
- typescript
- react with vite
- nestjs
- emotion
- mysql

<br />

## apps folder structure

- [web-client](https://github.com/chchgyu/slack_clone/tree/master/apps/web-client) with react
- [api-server](https://github.com/chchgyu/slack_clone/tree/master/apps/api-server) with nestjs

<br />

### nx monorepo 앱 추가하기

```
# react
## 1.
yarn add -D @nrwl/react

## 2.
npx nx g @nrwl/react:app ${naming}

# nestjs
## 1.
yarn add -D @nrwl/nest

## 2.
npx nx g @nrwl/nest:app ${naming} --frontendProject ${frontendAppName}
```

<br />

### nx monorepo 공통 라이브러리 추가하기

```
# react 공통 컴포넌트 라이브러리 추가 예시
npx nx g @nrwl/react:lib ${naming}

# 공통 라이브러리 추가
npx nx g @nrwl/workspace:lib ${naming}
```
