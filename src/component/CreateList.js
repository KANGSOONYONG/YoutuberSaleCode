import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";
import { useRef } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Title = styled.h1`
text-align: center;
`
const BigDiv = styled.div`
margin: 0 auto;
width: 400px;
`
const SmallDiv = styled.div`
margin: 10px 0;
display: grid;
grid-template-columns: 150px auto;
`
const Button = styled.button`
position:relative;
left:50%;
`
export default function CreateYoutuber() {

    const siteNames = useFetch(`http://localhost:3001/siteNames`);
    const youParams = useParams().youtuber;
    // (항목 추가가 완료되면) Link to처럼 .push 해주면 그 페이지로 바로 이동하게 만들어주는 기능
    const history = useHistory();

     // form으로 감싸져 있는 버튼을 눌렀을 경우 새로고침 되는 "기본"기능을 막아줌 -> e.preventDefalult
     // current 속성을 이용하면 해당 요소에 접근할 수 있고, value는 input에 입력된 값을 얻을 수 있음

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/items/` , {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                youtuber : youParams,
                siteName : siteRef.current.value,
                code : codeRef.current.value
            })
        })
        .then(res => {
            if(res.ok){
                alert("생성 완료");
                history.push(`youtuber/${youParams}`)
            }
        })      
    }

    // 저장 버튼을 눌렀을 때 입력한 정보들을 얻어오기 useRef 이용해야함
    const siteRef = useRef(null);
    const codeRef = useRef(null);


    return (
        <BigDiv>
            <Title>{youParams}<br />코드 추가하기</Title>
            <form onSubmit={handleSubmit}>
                <SmallDiv>
                    <label>채널명</label>
                    <span>{youParams}</span>
                </SmallDiv>
                <SmallDiv>
                    <label>사이트</label>
                    <select ref={siteRef}>
                        {siteNames.map((siteName) => (
                            <option key={siteName.SiteId} value={siteName.name}>
                                {siteName.name}
                            </option>
                        ))}
                    </select>
                </SmallDiv>
                <SmallDiv>
                    <label>할인 코드</label>
                    <input type="text" placeholder="할인 코드" ref={codeRef}/>
                </SmallDiv>
                <Button>저장</Button>
            </form>
        </BigDiv>
    )
}