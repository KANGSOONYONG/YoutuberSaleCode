import { useParams } from "react-router";
import { Link } from "react-router-dom"
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Form from "./Form";

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

export default function CodeDetail() {

    const youParams = useParams().youtuber;
    const item = useFetch(`http://localhost:3001/items?youtuber=${youParams}`);

    return (
        <>
            <Header1>
                {youParams}
                <Button as={Link} to={`/createList/${youParams}`}>항목 추가</Button>
            </Header1>

            {item.map((item) => (
                <div key={item.id}>
                    {item.code !== null && 
                    <BigGrid>
                        <CodeTitle>{item.siteName} 할인 코드</CodeTitle> 
                        <Contents> {item.code} 

                        <Form item={item} />

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