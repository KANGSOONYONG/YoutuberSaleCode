import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Header() {

    const Header = styled.header`
    padding: 10px;
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
    `
    return (
        <Link to="/" style= {{ textDecoration : "none" , color : "black"}}>
            <Header>유튜버 할인 코드 사이트</Header>
        </Link>
    )
}