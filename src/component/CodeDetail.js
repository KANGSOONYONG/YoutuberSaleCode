import { useParams } from "react-router";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const Header1 = styled.h1`
margin-left: 10px;
border-bottom : 1px solid gray;
display: inline-block;
`

const Contents = styled.p`
padding: 5px 10px;
`

export default function CodeDetail() {

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
    


    const youParams = useParams().youtuber;
    const item = useFetch(`http://localhost:3001/items?youtuber=${youParams}`);

    function del() {
        if(window.confirm("삭제 하시겠습니까?")) {
            fetch(`http://localhost:3001/items?youtuber=${youParams}`, {
                method : 'DELETE'
            })
        }
    }
    return (
        <>
            <Header1>{youParams}</Header1>

            {item.map(item => (
                <div key={item.id}>
                    {item.metree !== null && <Contents>미트리 할인 코드 : {item.metree}<button onClick={del}>삭제</button></Contents>}
                    {item.ranking !== null && <Contents>랭킹닭컴 할인 코드 : {item.ranking}<button onClick={del}>삭제</button></Contents>}
                    {item.myprotein !== null && <Contents>마이프로틴 할인 코드 : {item.myprotein}<button onClick={del}>삭제</button></Contents>}
                    {item.proteinworks !== null && <Contents>더프로틴웍스 할인 코드 : {item.proteinworks}<button onClick={del}>삭제</button></Contents>}
                </div>
            ))}
        </>
    )
}