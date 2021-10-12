import styled from "styled-components"




export default function Footer() {
    const Homepage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    width: 100%;
    height: 100px;
    float: left;
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid black;

    background-color: #E3DFDF;
    `
    const ItemLink = styled.div`
    // 중앙에 배치
    display: flex;
    align-items: center;
    justify-content: center;
    `


    return (
        <Homepage>
            <ItemLink>마이프로틴 바로가기</ItemLink>
            <ItemLink>미트리 바로가기</ItemLink>
            <ItemLink>랭킹닷컴 바로가기</ItemLink>
            <ItemLink>더프로틴웍스 바로가기</ItemLink>
        </Homepage>        


    )
}