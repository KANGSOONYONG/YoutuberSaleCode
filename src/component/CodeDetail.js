import dummy from "../db/data.json";
import { useParams } from "react-router";
import styled from "styled-components";

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
    
    const Header = styled.h1`
    margin-left: 10px;
    border-bottom : 1px solid gray;
    display: inline-block;
    `
    
    const Contents = styled.p`
    padding: 5px 10px;
    `

    const youParams = useParams().youtuber;

    const itemFilter = dummy.items.filter(item =>(
        item.youtuber === youParams
    ));
    
    return (
        <>
            <Header>{youParams}</Header>

            {itemFilter.map(item => (
                <div key={item.id}>
                    {item.metree !== null && <Contents>미트리 할인 코드 : {item.metree}</Contents>}
                    {item.ranking !== null && <Contents>랭킹닷컴 할인 코드 : {item.ranking}</Contents>}
                    {item.myprotein !== null && <Contents>마이프로틴 할인 코드 : {item.myprotein}</Contents>}
                    {item.proteinworks !== null && <Contents>더프로틴웍스 할인 코드 : {item.proteinworks}</Contents>}
                </div>
            ))}
        </>
    )
}