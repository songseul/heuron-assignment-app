# 프로젝트 구조

```
[모든 컴포넌트]
📂 components
 ┗📄 ImageCanvas.tsx
 ┗📄 Loading.tsx
 ┗📄 Nav.txs
 ┗📄 Scroll.tsx
 ┗📄 Seo.txs
 ┗📄 UserTable.tsx

[커스텀훅]
📂 hooks
   ┗ 📄 useThrottle.ts

[데이터 타입]
📂 models
  ┗ 📄Navigation.ts
  ┗ 📄PicsumImage.ts
  ┗ 📄SeoComponents.ts
  ┗ 📄Table.ts

[페이지]
📂 pages
┣ 📂 detail
   ┗📄 [...id].tsx
 ┗📄 _app.tsx
 ┗ 📄 index.tsx


```

# 어플리케이션 실행 방법

```
.env 파일을 생성
   NEXT_PUBLIC_API = https://picsum.photos/v2/list  를 복사하여 붙여넣고 파일에 저장해 주세요
npm i
npm run dev

```

# 어플리케이션 설명

```
- 어플리케이션을 실행 하면 리스트 페이지가 보입니다
- 리스트 중 하나의 리스트를 클릭하면 상세 페이지로 넘어갑니다.
- 이미지 한개가 보여 집니다
- 스크롤 위 아래 중 하나만 작동해도 다음 이미지로 하나씩 보여 집니다.
- 마우스의 왼쪽 클릭 + 드래그를 하면 zoom in 과 zoom out 이 됩니다.
- 마우스의 오른쪽 클릭 + 드래그를 하면 드래그 방향에 따라 이미지가 왼쪽과 오른쪽 방향으로 회전 합니다

```

# 사용된 기술

```
NextJs와 타입스크립트로 작업하였습니다.

SSR으로 Api를 요청 하여 데이터를 받아와 사용 하였습니다.

next.config.js 파일에서 source와 destination을 통해 작성한 end point로 요청하면 destination 주소로 요청 합니다. 페이지에서 필요한 데이터 요청을 간결한 코드로 작성할수 있습니다.

커스텀훅 useThrottle를 만들어 많은 요청을 줄이고 한번의 요청을 할수 있도록 쓰로틀링을 이용하여 구현 하였습니다. 이를 통해 마우스 이벤트 스크롤, 클릭과 드래그를 한번의 작업으로 매끄럽게 요청 할수 있었습니다.

데이터를 받아오는 과정을 Spinner 컴포넌트를 통해 로딩UI를 구현 하였습니다.

SEO 컴포넌트를 생성하여 데이터의 author 값을 meta title에 동적으로 바뀌도록 적용 하였습니다.

env 파일에 API 요청 주소를 작성하여 사용자에게 보이지 않도록 암호화 하여 사용 하였습니다.
```

# 사용된 라이브러리

## Material UI

### 사용한 이유

```

- 목록 화면에서 리스트들을 테이블 화면으로 작성 하기 위해 테이블 라이브러리를 사용하였습니다.

```
