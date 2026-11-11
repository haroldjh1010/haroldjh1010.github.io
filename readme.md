# 내 홈페이지 관리 가이드

이 폴더(`personal-homepage`)에 들어 있는 파일들이 내 개인 홈페이지입니다.
주소: **https://haroldjh1010.github.io**

GitHub 계정: `haroldjh1010` / 저장소: https://github.com/haroldjh1010/haroldjh1010.github.io

---

## 0. 시작하기 전에: 어떤 파일을 고치나요

| 내가 바꾸고 싶은 것 | 고쳐야 할 파일 |
|---|---|
| 글자, 이력, 링크 등 모든 내용 | `data.js` |
| 프로필 사진 | `profile.jpg` 파일을 넣기 (아래 6번) |
| CV PDF | `cv.pdf` 파일을 넣고 `data.js` 수정 (7번) |
| 학교 로고 | `logos` 폴더와 `data.js` (9번) |
| 브라우저 탭 제목·공유 미리보기 글 | `index.html` (10번) |

> 주의: 이 폴더 바깥(상위 폴더)에 있는 다른 `index.html`, `style.css`, `script.js` 는 다른 프로젝트 파일입니다. 건드리지 마세요.
>
> 주의: `personal-homepage` 안에 넣는 모든 파일은 인터넷에 공개됩니다. 비밀번호나 개인정보 파일을 넣지 마세요.

## 1. 내 컴퓨터에서 미리 보기

`personal-homepage` 폴더의 `index.html` 파일을 더블클릭하면 브라우저에서 바로 보입니다. 고친 뒤에는 브라우저에서 새로고침(F5)하세요.

## 2. 바뀜 내용이 인터넷에 보이기까지

게시 후 최대 10분 정도 걸릴 수 있습니다. 그래도 예전 화면이면 `Ctrl+F5`로 새로고침하세요.

## 3. 방법 A: GitHub 웹사이트에서 고치기 (가장 쉽습니다)

1. https://github.com/haroldjh1010/haroldjh1010.github.io 에 접속해 `data.js` 파일을 클릭합니다.
2. 오른쪽 위의 연필 모양 아이콘(Edit this file)을 누릅니다.
3. 내용을 고칩니다.
4. 오른쪽 위 **Commit changes...** 버튼 → 간단한 설명 입력 → **Commit changes**를 누릅니다.
5. 최대 10분 뒤 https://haroldjh1010.github.io 에서 확인합니다.

`data.js` 수정 규칙:

- 글자는 큰따옴표 `"..."` 안에 씁니다.
- 항목과 항목 사이, 목록의 값 사이에는 쉼표(,)가 필요합니다.
- 기간은 `Mar 2021 – Feb 2027` 처럼 긴 줄표(en dash, –)를 씁니다. 진행 중이면 `Present`.
- 저장 뒤 화면에 "Could not read data.js" 가 보이면 방금 고친 줄의 쉼표와 따옴표를 확인하세요.

## 4. 방법 B: 내 컴퓨터에서 고치고 게시하기

1. 먼저 동기화합니다(5번 참고).
2. `personal-homepage` 폴더의 파일을 고칩니다(주로 `data.js`).
3. `index.html`을 더블클릭해 미리 봅니다.
4. 한 단계 위 폴더(`Kiro-timetable`)에 있는 **`publish-homepage.cmd`** 를 더블클릭합니다.
5. 검은 창이 뜨면서 진행 상황이 한글로 표시됩니다. 끝나면 아무 키나 눌러 창을 닫습니다.

`publish-homepage.cmd`는 자동으로 (1) GitHub 최신 내용을 먼저 내려받고 (2) 내 변경을 올립니다.

## 5. 두 방법을 섮어 쓸 때: 동기화 먼저

GitHub 웹사이트에서 한 번이라도 고쳤다면, 내 컴퓨터에서 고치기 전에 반드시 동기화하세요. 순서가 엉키면 충돌이 날 수 있습니다.

동기화 방법: 로컬 변경이 없는 상태에서 `publish-homepage.cmd` 를 더블클릭하면 웹의 수정을 내려받습니다.

## 6. 프로필 사진 넣기/바꾸기

`personal-homepage` 폴더에 파일 이름을 정확히 `profile.jpg` (전부 소문자)로 해서 넣으면 자동으로 동그라미 사진이 나타납니다. 정사각형, 최소 400×400픽셀 권장. 사진이 없거나 이름이 다르면 지금처럼 "JK" 글자 동그라미가 브임니다. 방법 B로 게시하거나, 웹에서 Add file > Upload files 로 올리세요.

## 7. CV PDF 넣기

`cv.pdf` 파일을 `personal-homepage`에 넣고, `data.js`의 `cvPdf: ""` 를 `cvPdf: "cv.pdf"` 로 바꾸면 상단에 Download CV 버튼이 생깁니다. 다시 `""` 로 두면 버튼이 사라집니다.

## 8. 프로젝트별 링크 바꾸기

`data.js`의 projects 각 항목에는 `url` 값이 있습니다. 지금은 모두 Notion 페이지로 연결되어 있습니다. 프로젝트마다 원하는 주소로 바꾸세요. `url: ""` 로 두면 링크 없이 제목만 보입니다.

## 9. 학교 로고 빼기/바꾸기

현재 학교 로고는 학교 브랜드 색으로 만든 **글자 배지(동그라미) 이미지**입니다. 실제 학교 로고는 상표라 임의 배포가 조심스러워 기본 제공하지 않았습니다. 원하면 아래처럼 바꿀 수 있습니다.

- **빼기**: `data.js`에서 해당 항목의 `logo` 줄을 지우거나 `logo: ""` 로 두세요. 다른 파일은 고칠 필요 없습니다.
- **바꾸기**: `logos` 폴더에 소문자 이름의 SVG 또는 PNG 파일을 넣고, `data.js`의 `logo` 값을 그 경로(예: `logos/yonsei.png`)로 바꿉니다.

| 파일 | 학교 | 출처 |
|---|---|---|
| `logos/yonsei.svg` | Yonsei University | 직접 제작(동그라미 배지) |
| `logos/ntu.svg` | Nanyang Technological University | 직접 제작(동그라미 배지) |
| `logos/sjtu.svg` | Shanghai Jiao Tong University | 직접 제작(동그라미 배지) |
| `logos/kaust.svg` | King Abdullah University of Science and Technology | 직접 제작(동그라미 배지) |

실제 로고를 쓸 때는 각 학교 공식 브랜드 페이지에서 받으세요(예: https://www.yonsei.ac.kr , https://www.ntu.edu.sg , https://www.sjtu.edu.cn , https://www.kaust.edu.sa ). 학교 로고는 각 기관의 상표이며, 개인 CV 사이트에 소속을 나타내려고 쓰는 것은 일반적입니다.

## 10. index.html에서 고치는 항목

`index.html` 파일 안에서 다음을 고칠 수 있습니다: `<title>` (브라우저 탭 제목), `meta description` (160자 이하), `og:title`, `og:description`, `og:url`, 그리고 JavaScript가 꺼진 경우에 보이는 `noscript` 연락처 부분.

## 11. GitHub 로그인 다시 하기

게시가 로그인 만료로 실패하면, PowerShell 창을 열고 다음을 실행하세요:

```
gh auth login --web
```

인식되지 않으면: `& "C:\Program Files\GitHub CLI\gh.exe" auth login --web` . GitHub.com 과 HTTPS를 고르고, "Authenticate Git with your GitHub credentials?" 가 나오면 `n` 을 누르세요. 화면의 코드를 복사해 브라우저에 입력하고 승인합니다.

## 12. 비밀번호와 코드 안전

비밀번호는 오직 `https://github.com` 에서만 입력하세요. 비밀번호·토큰·일회용 코드를 채팅창이나 문서, `personal-homepage` 폴더에 적지 마세요.

## 13. 비상용: 손으로 올리기

자동 게시가 안 될 때만 씁니다. 저장소 https://github.com/haroldjh1010/haroldjh1010.github.io 에서 Add file > Upload files 를 누르고, `personal-homepage` 안의 파일들과 `logos` 폴더를 끌어다 놓습니다. 상위 폴더의 `index.html`/`style.css`/`script.js` 나 `publish-homepage` 파일은 올리지 마세요. 그런 다음 Settings > Pages 에서 "Deploy from a branch" → `main` → `/ (root)` → Save.

## 14. 문제 해결

- **404 페이지**: 저장소 이름이 `haroldjh1010.github.io`, Settings > Pages 가 `main`/`root`, `index.html` 이 저장소 맨 위에 있는지 확인. 게시 후 10분 기다리기.
- **예전 화면이 계속 보임**: `Ctrl+F5`, 또는 시크릿 창.
- **사진이나 로고가 안 보임**: 파일 이름의 대소문자(예: `Profile.JPG`가 아닌 `profile.jpg`), `logos/` 경로 확인. GitHub는 대소문자를 구별합니다.
- **빈 화면 또는 'Could not read data.js'**: `data.js` 의 마지막 수정 부분(쉼표, 따옴표)를 확인. GitHub의 변경 이력(History)에서 비교.
- **게시 스크립트가 충돌로 멈춘 때**: 아래 '충돌이 났을 때' 순서를 따르세요.
- **로그인 만료**: 11번 참고.
- **실행 정책 오류**: `publish-homepage.cmd`를 쓰거나 파일 우클릭 > 'Run with PowerShell'. 시스템 정책은 바꾸지 마세요.
- **Git 또는 gh 를 찾을 수 없음**: 설치 후 컴퓨터를 다시 시작해 보세요.
- **OneDrive 동기화 중**: 동기화가 끝난 뒤에 게시 스크립트를 실행하세요.

### 충돌이 났을 때

게시 스크립트는 충돌이 나면 내 파일을 건드리지 않고 멈춥니다. 그럴 때는:

1. 스크립트가 알려준 파일(예: `data.js`)를 바탕 화면에 복사해 둡니다.
2. GitHub에서 같은 파일을 열어 "Download raw file"로 받아 `personal-homepage`의 파일을 그 버전으로 덮어씁니다.
3. `publish-homepage.cmd`를 다시 더블클릭하면 충돌 없이 동기화됩니다.
4. 바탕 복사본을 보면서 내 수정을 다시 반영하고, 다시 `publish-homepage.cmd`를 실행합니다.

