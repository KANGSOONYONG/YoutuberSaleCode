import { useParams } from "react-router";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const Header1 = styled.h1`
margin-left: 10px;
border-bottom : 1px solid gray;
display: inline-block;
`

const Contents = styled.div`
display: inline-block;
padding : 0 0 10px 0;
margin: 0px 0px 30px 10px;
`

export default function CodeDetail() {

    const youParams = useParams().youtuber;
    const item = useFetch(`http://localhost:3001/items?youtuber=${youParams}`);
    
    // // 수정 기능 (PUT)
    // function put() {
    //     fetch(`http://localhost:3001/items/${item[index].id}` , {
    //         method : "PUT",
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         },
    //         body : JSON.stringify({
    //             code : "직접 입력 받은 데이터"
    //         })
    //     })
    //     .then(res => {
    //         if(res.ok){
    //             console.log("setCode(직접 입력 받은 데이터)");
    //         }
    //     })
    // }



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

    return (
        <>
            <Header1>{youParams}</Header1>
            {item.map((item, index) => (
                <div key={item.id}>
                    {item.code !== null && 
                    <Contents> {item.siteName} 할인 코드{item.percent !== null && <span>(할인률:{item.percent}%)</span>} : {item.code} 
                    <button> 수정 </button>
                    <button  onClick={(e) => del(index, e)}>삭제</button>
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