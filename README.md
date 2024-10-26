# j-jandy.com-frontend

This project is a web application built using React. It provide my information and notes.

## 주요 기능

- login
- Create, edit, delete notes
- Responsive design

## 설치 및 실행 방법

1. Clone the repository:

```bash
   git clone https://github.com/JaeYeongJeong/j-jandy.com-frontend.git
```

2. Install dependencies:

```bash
  npm install
```

3. Start the development server:

```bash
  npm run dev
```

4. 환경 변수 설정.

```markdown
VITE_PROTOCAL: http 또는 https
VITE_KEY: ssl인증서 경로 (https 설정시 필수)
VITE_CERT: ssl인증서 경로 (https 설정시 필수)
VITE_API_URL: API 서버의 URL
VITE_S3_URL: AWS S3에서 이미지를 가져올 URL
```

## 기술 스택

```markdown
- Frontend: React (SPA를 위한 UI 라이브러리), Redux (상태 관리), CSS(스타일링)
- Cloud: AWS S3 (이미지 저장소, 정적 배포), CloudFront (컨텐츠 배포)
```
