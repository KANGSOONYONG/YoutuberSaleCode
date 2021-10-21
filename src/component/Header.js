import styled from "styled-components"
import { Link } from "react-router-dom"

    // style 관리
    const Header1 = styled.header`

    // 그리드 설정
    display: grid;
    grid-template-columns: 1.5fr auto;

    // leftNav 설정
    width: 100%;
    height: 70px;
    // position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    border-bottom: 3px solid dodgerblue;
    `
    const Namelogo = styled.a`
    // 위치 설정
    margin: 10px 5px 10px 5px;

    // a 밑줄 없애기
    text-decoration: none;

    // 마우스 올리면 마우스 포인트 나옴
    cursor: pointer;

    font-size: 20px;
    font-weight: bold;
    color: black
    `
    const TopNav = styled.div`
    float: left;
    `
    const AddList = styled.li`
    float: left;

    cursor: pointer;

    margin: 25px 10px 25px; 10px;;

    list-style-type: none;
    font-size: 15px;
    `

export default function Header() {


    return (
        <Header1>
            <Namelogo as={Link} to="/">할인코드<br/>보고가</Namelogo>
            <TopNav>
                <AddList>로그인</AddList>
                <AddList as={Link} to="/createYoutuber">유튜버 추가</AddList>
                <AddList>삭제</AddList>
            </TopNav>
        </Header1>

    )
}