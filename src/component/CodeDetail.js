import { useParams } from "react-router";
import { Link } from "react-router-dom"
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const Header1 = styled.h1`
margin-left: 10px;
display: grid;
grid-template-columns: 1fr auto;
`
const Contents = styled.div`
display: inline-block;
display: grid;
grid-template-columns: auto 60px 60px;
`
const Button = styled.button`
padding: 5px 5px;
margin: 10px;

text-decoration: none;

background-color: dodgerblue;
color: #fff;

border: 0 none;
border-radius: 30px;

font-size: 20px;
font-weight: bold;

cursor: pointer;

align-items: center;
justify-content: center;
`
const BigGrid = styled.div`
padding: 15px;
margin: 5px;
background-color: papayawhip;
border: 1px solid black;
`
const CodeTitle = styled.b`
font-size: 20px;
`
const Input = styled.input`
height: 18px;
width: 500px;
`
export default function CodeDetail() {
    const [value, setValue] = useState();

    const valueChange = (e) => {
        setValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    const youParams = useParams().youtuber;
    const item = useFetch(`http://localhost:3001/items?youtuber=${youParams}`);

    const [isOpen, setIsOpen] = useState(false);

    // 수정 기능 (PUT)
    function put(index) {
        if(window.confirm("수정 하시겠습니까?")) {
            fetch(`http://localhost:3001/items/${item[index].id}` , {
                method : "PUT",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    ...item[index],
                    code : value
                })
            })
            .then(res => {
                if(res.ok){
                    console.log("수정 완료");
                    window.location.reload()
                }
            })
        }

    }

    // 삭제 기능 (DELETE)
    function del(index) {
        if(window.confirm("삭제 하시겠습니까?")) {
            fetch(`http://localhost:3001/items/${item[index].id}`, {
                method : 'DELETE'
            }).then(res =>{
                if(res.ok) {
                    console.log("삭제 완료");
                    window.location.reload()
                }
            })
        }
    }

    // 숨겨놓은 input 창 보이게 하기
    function showInput() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Header1>
                {youParams}
                <Button as={Link} to={`/createList/${youParams}`}>항목 추가</Button>
            </Header1>

            {item.map((item, index) => (
                <div key={item.id}>
                    {item.code !== null && 
                    <BigGrid>
                        <CodeTitle>{item.siteName} 할인 코드</CodeTitle> 
                        <Contents> {item.code} 

                        <button onClick={showInput}> {isOpen !== true ? "수정" : "숨기기" } </button>
                        <button onClick={(e) => del(index, e)}>삭제</button>

                        {isOpen === true && <div>
                            <form onSubmit={handleSubmit}>
                                <Input type="text" value={value || item.code} onChange={valueChange}/>
                                <button onClick={(e) => put(index, e)}>코드 수정</button>
                            </form>
                        </div>}
                        </Contents>
                    </BigGrid>}
                </div>
            ))}
        </>
    )
}

    // .nav_name a span {
    //     text-transform: uppercase;
    //     transition-property: all;
    //     transition: 0.25s ease;
    //     font-weight: bold;
    //     font-size: large;
    //     margin: 40px
    // }
    // .nav_name a span::after {
    //     content: '';
    //     border-top: 4px solid rgb(252, 42, 42);
    //     border-radius: 10px;
    //     width: 100%;
    //     position: absolute;
    //     display: block;
    //     transform: rotateY(90deg);
    //     transition: 0.25s linear;
    
    //   }
    // .nav_name a span:hover {
    //     transform: scale(1);
    // }
    // .nav_name a span:hover::after {
    //     transform: rotate(0deg);
    //   }