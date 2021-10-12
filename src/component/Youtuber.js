import styled from "styled-components";
import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function Youtuber(){

    // style 관리
    const Layout = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    `
    const Button = styled.button`
    float: left;

    padding: 10px 10px;
    margin: 10px;

    text-decoration: none;

    background-color: dodgerblue;
    color: #fff;

    border: 0 none;
    border-radius: 30px;

    font-size: 20px;
    font-weight: bold;

    cursor: pointer;
    `

    return (
        <Layout>
            {dummy.youtubers.map( youtuber =>(
                    <Button as={Link} to={`/youtuber/${youtuber.youtuber}`} key={youtuber.id}>
                        {youtuber.youtuber}
                    </Button>
            ))}
        </Layout>
    )
}