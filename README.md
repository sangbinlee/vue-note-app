# vue-note-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### now status

# 로컬 추가 영역 1111

git merge test 용 1111

```sh
npm run build
```

[동영상]https://youtu.be/IieCni_eOSc

### 따라하기

> Build a taking note app with Vue 3 and composition API

> https://www.youtube.com/watch?v=L5Jito_c0yU&t=658s"

# vue-note-app 시작

### 컴포넌트 조립

> [컴포넌트 사용 예시 1] template에 import 한 컴포넌트(HelloWorld.vue)를 template에 추가한다.
> [컴포넌트 사용 예시 1] 추가할때 추가할 컴포넌트(HelloWorld.vue)에 props > msg 를 선언하고 값을 세팅하여 컴포넌트에서 defineProps로 msg를 정의하고 사용한다
> ![컴포넌트 사용 예시 1](image.png)

- [컴포넌트 사용 예시 2] template에 import 한 컴포넌트(TheWelcome)를 template에 추가한다.
- [컴포넌트 사용 예시 2] import 한 컴포넌트(TheWelcome) 안에서 컴포넌트(WelcomeItem)를 import 하여 를 template에 추가한다.
- [컴포넌트 사용 예시 2] 추가할때 추가할 컴포넌트(WelcomeItem.vue) 영역에 3가지 영역으로 처리한다

```html
<template #icon><DocumentationIcon /></template>

<template #heading>Documentation</template>

text 영역
```

> 위 3가지 영역 값은 3가지 slot에 매핑된다.

- ![소스](image-1.png)
- ![html](image-2.png)
- ![WelcomeItem](image-3.png)

# auto format set

![저장시 자동 포맷팅](image-4.png)

# 따라하기 완료 한 개발 화면 동영상

https://www.youtube.com/watch?v=YLFQFqD7o7k

# 저장시 자동 포맷팅

![저장시 자동 포맷팅](image-4.png)

# 로컬 추가 영역 2222

git merge test 용 2222

# dev9 브랜치에서 추가함

# 앞으로 이 프로젝트에서 할일

# 배포 자동화

ubuntu24.04

> docker or microk8s
> ci/cd - jenkins
> db server - postgres
> web server - nginx
