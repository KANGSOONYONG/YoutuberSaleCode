import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Header() {

    // style 관리

    const Header = styled.header`

    // 그리드 설정
    display: grid;
    grid-template-columns: 1.5fr 200px auto;

    // leftNav 설정
    width: 100%;
    height: 70px;
    // position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    background-color: #A9D0F5;
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
    const LoginButton = styled.button`

    margin: 20px 50px;

    // a 밑줄 없애기
    text-decoration: none;

    // 마우스 올리면 마우스 포인트 나옴
    cursor: pointer;

    color: black;

    border: 0 none;
    border-radius: 30px;

    font-size: 15px;
    `
    const SideNav = styled.div`
    float: left;
    `

    const AddList = styled.li`
    float: left;

    cursor: pointer;

    margin: 25px 10px 25px; 10px;;

    list-style-type: none;
    font-size: 15px;
    `
    return (
        <Header>
            <Namelogo as={Link} to="/">할인코드<br/>보고가</Namelogo>
            <LoginButton>로그인</LoginButton>
            <SideNav>
                <AddList>목록 추가</AddList>
                <AddList>목록 삭제</AddList>
            </SideNav>
        </Header>

    )
}