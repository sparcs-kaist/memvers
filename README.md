# Memvers

## Getting Started

0. API 서버 실행

   로컬 환경에서 API를 테스트해 보고 싶다면 [`nugu` 프로젝트](https://github.com/sparcs-kaist/nugu)를 먼저 실행하세요. 자세한 가이드라인은 `nugu`의 `README.md`를 참고하세요.

1. 환경 변수 설정

   예시 파일을 복제하고, 필요한 경우 값을 수정해 주세요.

   ```shell
   cp .env.example .env
   ```

2. 패키지 설치

   pnpm으로 필요한 패키지를 설치해 주세요.

   ```shell
   pnpm install
   ```

3. 프로젝트 실행

   dev 모드로 프로젝트를 실행합니다.

   ```shell
   pnpm dev
   ```

## Recommendations

### Good to Install (for VSCode Users)

- [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules): `memvers` 프로젝트에서는 CSS module (i.e., `module.scss`)를 사용합니다. 다른 파일에서 module을 import할 때 기본적으로 자동 완성 기능이 지원되지 않지만, 이 확장 프로그램을 통해 자동 완성을 활성화할 수 있습니다. (단, 여전히 타입 추론은 지원되지 않습니다.)
