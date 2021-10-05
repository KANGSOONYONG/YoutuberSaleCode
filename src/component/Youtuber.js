import styled from "styled-components"

export default function Youtuber(){

    const Li = styled.button`
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
    
    const 유튜버1 = ["유튜버1", "더프로틴웍스", "미트리"];
    const 유튜버2 = ["유튜버2", "마이프로틴", "랭킹닷컴"];

    return (
        <>
            <Li>{유튜버1[0]} {유튜버1[1]} {유튜버1[2]}</Li>
            <Li>{유튜버2[0]} {유튜버2[1]} {유튜버2[2]}</Li>
        </>
    )
}