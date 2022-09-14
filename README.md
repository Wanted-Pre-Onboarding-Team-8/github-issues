# - Assginment #4

## 📕 프로젝트 목표

#### Angular CLI의 Github Issue 모음 페이지 제작

<br/>

## 👨‍👩‍👧‍👧 팀원

<table>
<thead>
<tr>
<th>팀장 이지우</th>
<th>김재민</th>
<th>장현성</th>
<th>최재혁</th>
<th>김기범</th>
<th>배범수</th>
<th>신승준</th>
</tr>
</thead>
</table>

</br>

## ✋ 프로젝트 링크

<h3><a href='http://pre-onboarding-wanted-deploy-test-metamong.s3-website.ap-northeast-2.amazonaws.com/'>데모 사이트 보러가기</a></h3>

</br>

## ✋ 프로젝트 실행 방법

```
> npm i
> npm run start
```

</br>

## ✨ 프로젝트 설명

</br>

### 📖 Best Practice

- ### context api 활용하여 이슈 리스트 데이터 관리
- ### intersection을 활용한 인피니티 스크롤 구현
- ### 로딩 중 일땐 Spinner를 화면에 노출시킴으로써 로딩 상태 표현
- ### 지정된 조건에 맞는 데이터 표시
- ### 데스크탑/모바일 둘 다 고려하여 UI/UX 적용

</br>

1. ### 이슈 목록 화면

</br>

<img src="https://user-images.githubusercontent.com/93233930/190206454-f72a5cef-8b3b-41e7-9ebe-094edbec3785.png" />

</br>

- 이슈 목록 가져오기 API 활용
- open 상태의 이슈 중 코멘트가 많은 순으로 정렬
- 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
- 다섯번째 셀에는 광고 이미지 출력
  - 광고 이미지 클릭 시 [https://thingsflow.com/ko/home](https://thingsflow.com/ko/home)로 이동
- 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

</br>

2. ### 이슈 상세 화면

</br>

<img src="https://user-images.githubusercontent.com/93233930/190206470-431d37be-3fe3-45f0-9fa8-47df422915b4.png" />

</br>

- 이슈의 상세 내용 표시
- ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

</br>
    
3. ### 공통 헤더
    - 두 페이지는 공통 헤더를 공유합니다.
    - 헤더에는 Organization Name / Repository Name이 표시됩니다.

</br>
</br>

## ✨ 사용 스택

- react
- react-router-dom (route)
- react-markdown (rendering markdown)
- react-icons (icon)
- styled-components (style)
- axios (api)

</br>

## ✨ 프로젝트 구조

```
src
 ┣ apis
 ┃ ┣ base.js
 ┃ ┣ github.js
 ┃ ┗ index.js
 ┣ assets
 ┃ ┗ img
 ┃ ┃ ┗ ThingsFlowLogo.png
 ┣ components
 ┃ ┣ Issue
 ┃ ┃ ┣ IssueDetailContent.jsx
 ┃ ┃ ┣ IssueList.jsx
 ┃ ┃ ┣ IssueListItem.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ common
 ┃ ┃ ┣ Advertisement.jsx
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┣ Layout.jsx
 ┃ ┃ ┣ Spinner.jsx
 ┃ ┃ ┗ index.js
 ┃ ┗ index.js
 ┣ consts
 ┃ ┣ api.js
 ┃ ┣ index.js
 ┃ ┣ title.js
 ┃ ┗ url.js
 ┣ hooks
 ┃ ┣ index.js
 ┃ ┗ useIntersection.js
 ┣ pages
 ┃ ┣ Issue.jsx
 ┃ ┗ IssueDetail.jsx
 ┣ store
 ┃ ┣ github.jsx
 ┃ ┗ index.js
 ┣ styles
 ┃ ┣ themes
 ┃ ┃ ┗ colors.js
 ┃ ┣ GlobalStyle.jsx
 ┃ ┣ animation.js
 ┃ ┣ media.js
 ┃ ┗ reset.js
 ┣ utils
 ┃ ┗ util.js
 ┣ App.jsx
 ┗ main.jsx
```

</br>

## 📖 8팀 컨벤션

- [Convention](https://www.notion.so/6a7522b6be6348d3b9e8e522c0c76053)
