import styled from "styled-components";
import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function Youtuber(){

    // style 관리
    const Button = styled.button`
    float: left;

    padding: 10px 20px;
    margin: 10px;

    background-color: dodgerblue;
    color: #fff;

    border: 0 none;
    border-radius: 30px;

    font-size: 30px;
    font-weight: bold;

    cursor: pointer;
    `
    // state 관리


    return (
        <>
            {dummy.youtubers.map( youtuber =>(
                    <Button>
                        <Link to={`/youtuber/${youtuber.youtuber}`} key={youtuber.id}>{youtuber.youtuber}</Link>
                    </Button>
            ))}
        </>
    )
}