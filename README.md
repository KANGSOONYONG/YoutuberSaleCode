# YoutuberSaleCode 프로젝트 소개
운동 유튜버들이 여러 상품들의 할인 코드를 영상 하단 더보기란에 적어놓는 것을 볼 수 있습니다.

유튜버들마다 할인율도 다르고, 취급하는 상품들도 달랐기 때문에 한 곳에 모아놓고 보면 좋겠다고 생각했습니다.

사용자가 페이지를 이동할 때마다 로딩이 없는 느낌을 주기 위해 리액트를 이용해서 제작하였고, json server를 이용하여 REST API를 간단히 구현하였습니다.

### 개발 기간 & 블로그
* 개발기간 : 약 한 달
* 블로그 : [https://blog.naver.com/pliuhb/222527419988](https://blog.naver.com/pliuhb/222527419988)
### 프로젝트 제작 목적
* 리액트를 이용한 프로젝트 제작 경험 쌓기
* REST API를 간단히 구현해보며 관련 코드, 동작 등을 공부

### 적용 기술
* React
* React_json_server

---
### 수정 사항

## 20211005 시작

20211028 : 해야할 일 했음
1. "수정" 버튼을 눌러서 입력 창이 나오게 만들어야 함 (여기서 다른 항목의 수정하기를 누르면 기존꺼는 사라지고 다른 항목에 수정하는 입력 창이 떠야함) -> 하나만 뜨게 하는 방법 고민중
해결=> Form.js라는 컴포넌트를 만들고 props로 item값을 전달해주었음 => 결과: 항목마다 따로따로 input이 뜨고, value도 각각 다 다름
Q. props를 2개 전달하는 방법이 뭘까? 단순히 , 를 사용하면 되는건가?

2. 항목추가를 했을 때 원하는 곳으로 history.push 되질 않음.. => history.goBack()을 이용해서 다 만들어지면 뒤로가기 해주었음 (우회해서 해결함)

2. 
20211027 : CSS 수정
1. Grid 넣어서 /youtuber페이지, /CreateList페이지, /CreateYoutuber페이지 전체적인 부분 깔끔하게 정리하였음

2. 수정 버튼을 누르면 나타나는 input : value 속성에 item.code 넣어서 수정하기 쉽게 만듦

20211021 : Post Method 기능 구현
1. Post 메소드를 두 곳에 구현함
메인 페이지에 나타날 유튜버를 추가할 CreateYoutuber.js
유튜버의 항목 추가를 담당할 CreateList.js 

2. 코드 수정을 하기 위한 input의 데이터를 입력하는데 Warning: A component is changing an uncontrolled input to be controlled. 이런 오류 발생하므로 수정해야됨
->  value={ value || "수정할 코드 입력" }로 수정하였음

20211020 : Post Method 구상
1. Post 메소드를 구현할 Create.js 컴포넌트 생성

2. 기존 PUT Method 구현 방식을 참고해보려고 함

20211018 : PUT Method (2)
1. data.json의 code 항목을 수정하기 위해 값을 넣은 뒤 버튼을 누르는 기능 구현함
하지만 result값이 왜 undefined가 되는지 모르겠음 -> result가 아니라 value를 넣어야했음


20211016 : PUT Method 구상
1. PUT Method 구현하기 위해 구상 (CodeDetail.js) -> 직접 입력받은 값으로 수정하고 싶음

20211015 : 
1. styled-components 이용하여 전역 스타일링 시도함 (/style/GlobalStyle.js)

2. 체크 박스를 이용한 삭제 기능 도입 취소함(아직 구현할 실력이 안됨, 찾아봤는데 REST API가 한번에 여러 항목이 삭제 안되는 것 같아서 다른 방법으로 삭제 기능 구현)

3. 대신 map에 삭제 버튼을 넣고 인수를 전달하였음 (CodeDetail.js)
(item으로 전달받는 array의 갯수가 4개여서 이런 방법을 사용하였음)


4. 할인 코드를 삭제하면 삭제 완료라는 메세지를 보내고 페이지가 새로고침(window.location.reload()) 되게 만들었음
                    


20211014 : DELETE Method (fetch) 사용을 간편하게 하기 위해 db 수정
1. DELETE Method (fetch) 사용을 간편하게 하기 위해 db 수정

2. db수정으로 인해 Youtuber, CodeDetail.js를 수정하였음

3. 체크박스를 만들어서, 체크박스 선택한 것만 삭제하게 만드는 기능을 넣으려고 했음 (CodeDetail.js)
하지만 체크박스를 체크하면 오류 발생해서 해결해야할듯 (TypeError: checked is not iterable)

20211013 : DELETE Method (fetch)
1. DELETE 메소드 사용하려 했으나 오류 발생함 어떻게 해결할지 좀 더 고민해봐야할 듯 함

DELETE http://localhost:3001/items?youtuber=%EC%A7%80%EA%B8%B0TV 404 (Not Found)


20211012 : GET Method (useState, useEffect => useFetch)
1. footer 제작 (2nd commit : map으로 중복 없애줌)

2. Header.js, Youtuer.js, Footer.js에 grid 적용함

3. 2nd commit : 더미데이터는 고정된 채로 변경되지 않기 때문에 사용자 액션에 따라 데이터를 읽고,쓰고, 삭제하는 방법 적용함 (GET메소드) (db구축하고 API를 만들어야 함-> json server를 이용하여 restful API 만들 수 있음)

4. 2nd commit : styled-components 오류 해결 (함수 밖에서 선언해주기)
   useEffect 안에 state를 넣어서 오류 해결해줬음 (state는 item말고 useParams 넣어줌) -> 커스텀 훅인 useFetch 만들어서 중복 없앰

20211011 :
1. data.json에 가짜 할인 코드 지우고 실제 할인 코드 입력

2. 조건문을 이용해서 할인 코드가 없는 상품은 표시하지 않기

3. Link 태그를 사용하지 않고, as={Link} to="/" 로 코드 작성,
   이후에 text-decoration: none을 이용해서 인라인으로 적용해줬던 스타일을 없앨 수 있었음

4. grid 설정하려 했으나 (Header부분이 인식이 안됨) Youtuber.js의 Button들만 grid-template-columns가 됨
-> App.js에서 grid설정하지 않고, Header 부분의 position : fixed를 없앰

20211008 :

1. 특정 유튜버의 이름을 url 정보로 받아서(useParams) 보여주고 싶은 데이터만 보여주기

2. EmptyPage 컴포넌트와 라우터를 이용하여 잘못된 접근시 메인페이지로 이동하게 함

20211007 :
1. 더미데이터, data.json 생성

2. map()이용해서 중복 줄여주기 
(없는 항목은 어떻게 구분해서 표시를 하지? 현재 "없음"으로 표시하는 중)

3. item에서 map 쓰면 youtuber 4명의 코드가 다 나오는데 어떻게 해결? 
filter를 사용해서 특정 유튜버의 코드만 나타냈지만 다른 페이지도 동일한 결과 나옴

20211005 : 
1. commit "add : styled-components", "styled-components 첫 적용"
styled-components 설치 

2. commit "하드코딩"
styled-components 부분 적용, 만들고 싶은 부분 하드코딩

3. commit "라우터 설치 및 적용"
- 페이지를 나누고, 버튼 클릭했을 때 들어갈 페이지 만들어주기

- react-router-dom의 Link를 이용하였는데, styled-components 때문에 Header.js에서 text-decoration : none이 안됨 

=> 따라서 inline방식으로 style 지정했는데 해결방안이 없을까?
해결 방안: Link 태그를 사용하지 않고, as={Link} to="/" 로 코드 작성, 이후에 text-decoration: none을 이용해서 인라인으로 적용해줬던 스타일을 없앨 수 있었음
