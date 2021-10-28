import { useRef } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Title = styled.h1`
text-align: center;
`
const BigDiv = styled.div`
margin: 0 auto;
width: 280px;
`
const SmallDiv = styled.div`
margin: 40px 0 30px 0;
display: grid;
grid-template-columns: 100px auto;
`
const Button = styled.button`
position:relative;
left:50%;
`
const BackButton = styled(Button)`
left: 47%;
margin-top: 5px;
`
export default function CreateYoutuber() {

    // (항목 추가가 완료되면) Link to처럼 .push 해주면 그 페이지로 바로 이동하게 만들어주는 기능
    const history = useHistory();

     // form으로 감싸져 있는 버튼을 눌렀을 경우 새로고침 되는 "기본"기능을 막아줌 -> e.preventDefalult
     // current 속성을 이용하면 해당 요소에 접근할 수 있고, value는 input에 입력된 값을 얻을 수 있음

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/youtubers/` , {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                youtuber : channelRef.current.value,
            })
        })
        .then(res => {
            if(res.ok){
                alert("생성 완료");
                history.push(`youtuber/${channelRef.current.value}`)
            }
        })   
    }
    // 저장 버튼을 눌렀을 때 입력한 정보들을 얻어오기 useRef 이용해야함
    const channelRef = useRef(null);

    const goBack = () => {
        history.goBack();        
    }
    return (
        <BigDiv>
            <Title>유튜버 추가하기</Title>
            <form onSubmit={handleSubmit}>
                <SmallDiv>
                    <label>채널명</label>
                    <input type="text" placeholder="채널명" ref={channelRef}/>
                </SmallDiv>
                <Button>저장</Button>
            </form>
            <BackButton onClick={goBack}>뒤로가기</BackButton>
        </BigDiv>
    )
}