# 프로젝트 구조

```
[모든 컴포넌트]
📂 components
 ┗📄 ImageCanvas.tsx
 ┗📄 Nav.txs
 ┗📄 Seo.txs
 ┗📄 UserTable.tsx

[커스텀훅]
📂 hooks
   ┗ 📄 useThrottle.ts

[상세 이미지 데이터 타입]
📂 models
  ┗ 📄PicsumImage.ts

[페이지]
📂 pages
┣ 📂 detail
   ┗📄 [...id].tsx
 ┗📄 _app.tsx
 ┗ 📄 index.tsx


```

# 어플리케이션 실행 방법

```
npm i
npm run dev // 어플리케이션 실행 명령어
```

# 어플리케이션 설명

```
- 리스트 페이지가 보입니다.
- 리스트 중 하나의 리스트를 클릭하면 캔버스 페이지로 넘어갑니다.
- 스크롤 위 아래 중 하나만 작동해도 다음 이미지로 하나씩 보여 집니다.
- 마우스의 왼쪽 클릭 + 드래그를 하면 zoom in 과 zoom out 이 됩니다.
- 마우스의 오른쪽 클릭 + 드래그를 하면 드래그 방향에 따라 이미지가 왼쪽과 오른쪽 방향으로 회전 합니다

```

# 사용된 라이브러리

## Material UI

### 사용한 이유

```

- 목록 화면에서 리스트들을 테이블 화면으로 작성 하기 위해 테이블 라이브러리를 사용하였습니다.

```

해결해야될것

- 데이터 에러
- 로딩 ui
- 전체적인 ui
