import { useParams } from "react-router";
import { Link } from "react-router-dom"
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const Header1 = styled.h1`
margin-left: 10px;
display: inline-block;
`
const Contents = styled.div`
display: inline-block;
padding : 0 0 10px 0;
margin: 0px 0px 30px 10px;
`
const Button = styled.button`
// float: left;

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

// width: 200px;
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
    console.log(isOpen)
    // 수정 기능 (PUT)
    function put(index) {
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
                    <Contents> {item.siteName} 할인 코드 : {item.code}

                    <button onClick={showInput}> {isOpen !== true ? "수정" : "숨기기" } </button>
                    <button onClick={(e) => del(index, e)}>삭제</button>

                    {isOpen === true && <div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={value || ""} onChange={valueChange}/>
                            <button onClick={(e) => put(index, e)}>코드 수정</button>
                        </form>
                    </div>}
                    </Contents>}
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