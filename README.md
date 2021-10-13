20211005 시작

운동 유튜버들이 여러 상품들의 할인 코드를 배포

유튜버들마다 할인 가격도 다르고, 취급하는 상품들도 달랐기 때문에 한 곳에 모아놓고 보면 좋겠다고 생각함

사용자가 페이지를 이동할 때마다 로딩이 없는 느낌을 주기 위해, 리액트를 이용해서 제작함


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
