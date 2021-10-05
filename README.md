20211005 시작

운동 유튜버들이 여러 상품들의 할인 코드를 배포

유튜버들마다 할인 가격도 다르고, 취급하는 상품들도 달랐기 때문에 한 곳에 모아놓고 보면 좋겠다고 생각함

사용자가 페이지를 이동할 때마다 로딩이 없는 느낌을 주기 위해, 리액트를 이용해서 제작함

20211006 :



20211005 : 
1. commit "add : styled-components", "styled-components 첫 적용"
styled-components 설치 

2. commit "하드코딩"
styled-components 부분 적용, 만들고 싶은 부분 하드코딩

3. commit "라우터 설치 및 적용"
- 페이지를 나누고, 버튼 클릭했을 때 들어갈 페이지 만들어주기

- react-router-dom의 Link를 이용하였는데, Header.js에서 styled-components 때문에 text-decoration : none이 안됨 => 따라서 inline방식으로 style 지정했는데 해결방안이 없을까?