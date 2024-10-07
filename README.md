# 프로젝트 설명

피드 형태로 셀럽들이 입은 옷과 악세서리 등의 코디 정보를 공유하는 서비스 입니다. [(서비스 링크)](https://celebpick.site/)

![image](https://github.com/user-attachments/assets/8bfbb38a-31a7-4120-a37c-03eb089adb86)

# 프로젝트 구조

![image](https://github.com/user-attachments/assets/214c1e54-4fb2-4650-ba98-5cb75cc9cc15)

# 기술 스택

| 기술 | 도입 이유 |
| --- | --- |
| React | - |
| TypeScript | - |
| TailwindCSS & twin.macro | 디자인 시스템 대체, 생산성 향상을 위해 Tailwind를 사용했고 Tailwind의 원활한 조건부 스타일링을 위해 twin.macro를 도입했습니다.  |
| Tanstack Query | 데이터 Fetching과 관련된 Boilerplate 코드를 줄여주고, Loading, Error 등의 상태를 관리, 캐싱을 통한 성능 개선, Suspense 지원 등의 이유로 기술을 사용했습니다. |
| React Hook Form | Form과 관련된 다양한 기능 제공, 제어/비제어 컴포넌트 지원 등의 이유로 기술을 사용했습니다.  |
| Zod | 반복되는 유효성 검사 코드를 개선하기 위해 Zod를 도입했습니다.  |
| Storybook | 페이지를 중심으로 개발할 때 겪었던 공통 UI 컴포넌트 분리의 어려움을 해결하기 위해 Storybook을 도입했고 컴포넌트 주도 개발을 진행했습니다. |

# 프로젝트 기획 동기

인스타그램, 유튜브, 블로그 등 다양한 SNS에 흩어져 있는 셀럽들의 코디 정보를 하나의 서비스에서 사용자들에게 편리하게 제공하기 위해 프로젝트를 기획하게 되었습니다.

# 프로젝트가 해결하는 문제

- 다양한 플랫폼에 흩어져 있는 코디 정보를 한 번에 찾아볼 수 있습니다.
- 아이돌, 배우 등 필터를 통해 원하는 카테고리의 코디를 찾을 수 있습니다.
- 마음에 드는 코디를 스크랩해둘 수 있습니다.
- 직접 셀럽의 코디 정보를 게시해 사용자들과 공유할 수 있습니다.

# 프로젝트를 통해 배운 점

- 컴포넌트 내부에서 React Query 에러를 명령형으로 처리하는 코드를 개선하기 위해 고민하던 중 [카카오 기술 블로그](https://fe-developers.kakaoent.com/2022/221110-error-boundary/)와 [컨퍼런스 발표 영상](https://youtu.be/012IPbMX_y4?si=mY0dtZ9QEYo_PuWj)을 참고하여 [에러 바운더리를 적용했고](https://github.com/celeb-pick/frontend/tree/master/src/components/errors), 이를 통해 코드의 복잡도를 줄일 수 있었습니다.
- 하나의 코디 생성 프로세스를 여러 페이지(Route)로 구성하는 것이 적절하지 않다고 생각해 알아보던 중 토스의 Funnel과 관련된 컨퍼런스 발표를 발표를 보았고, [토스 라이브러리의 useFunnel](https://github.com/toss/slash/blob/main/packages/react/use-funnel/src/useFunnel.tsx) 소스코드를 분석해 경량화된 [useFunnel 훅을 개발했습니다](https://github.com/celeb-pick/frontend/blob/master/src/hooks/useFunnel/useFunnel.tsx). 훅 사용자에게 자동 완성을 통한 좋은 DX를 제공하기 위해 타입 정의를 하면서 제네릭 타입에 대해 깊이 있게 학습할 수 있었습니다. 그리고 컴포넌트가 리렌더링되지 않고 재생성되는 문제를 해결하기 위해 DevTools의 Profiler와 Components 탭을 활용하기도 했습니다.
- UI 컴포넌트 라이브러리 없이 약 15개의 [UI 컴포넌트를 직접 구현](https://github.com/celeb-pick/frontend/blob/master/src/components/atoms/Button/Button.tsx)하며 컴포넌트의 확장성에 대해 고민하며 개발했습니다. Input과 같은 컴포넌트들을 페이지에 사용하면서 제어/비제어 컴포넌트 개념에 대해 학습하는 계기가 되기도 했습니다.
- 개인 프로젝트로 기획, 디자인, 설계, 백엔드, 프론트엔드, 배포까지 전체 개발 사이클을 경험하면서 서비스 개발 프로세스에 대한 전반적인 이해도를 높일 수 있었습니다.
