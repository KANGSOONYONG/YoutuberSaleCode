import styled from "styled-components";
import { useHistory } from "react-router";
import { useRef } from "react";

const Title = styled.h1`
text-align: center;
`
const BigDiv = styled.div`
margin: 0 auto;
width: 400px;
`
const SmallDiv = styled.div`
// margin: 10px 0;
// display: grid;
// grid-template-lows: 200px 200px;
`
const Button = styled.button`
position:relative;
left: 50%;
margin-top: 5px;
`
const BackButton = styled(Button)`
left: 47%;
margin-top: 5px;
`
const Input = styled.input`
font-size: 1em;
padding: 16px;
width: 364px;
`
export default function LoginPage() {

    const history = useHistory();

    const goBack = () => {
        history.goBack();        
    }
    const handleSubmitSignUp = (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:3001/users/`, {
            method: "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name: idRef.current.value,
                password: passwordRef.current.value
            }),
        })
        .then((res) => {
            if(res.ok){
                alert("로그인 성공");
                history.push("/");
            }
        })
    }
    // const handleSubmitLogin = (e) => {
    //     e.preventDefault();
        
    //     fetch(`http://localhost:3001/users/`, {
    //         method: "POST",
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: idRef.current.value,
    //             password: passwordRef.current.value
    //         }),
    //     })
    //     .then((res) => {
    //         if(res.ok){
    //             alert("회원가입이 완료됐습니다.");
    //             window.location.reload();
    //         }
    //     })
    // }
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <BigDiv>
            <Title>로그인</Title>
            <form onSubmit={handleSubmitSignUp}>
                <SmallDiv>
                    <Input type="text" placeholder="아이디" ref={idRef} />
                    <Input type="text" placeholder="패스워드" ref={passwordRef} />
                </SmallDiv>
                <Button>로그인하기</Button>
            </form>
            <Button>회원가입</Button>
            <BackButton onClick={goBack}>뒤로가기</BackButton>
        </BigDiv>
    )
}