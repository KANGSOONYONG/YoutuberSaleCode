import styled from "styled-components"

export default function Youtuber(){

    const List = styled.ul`
    list-style-type: none;
    padding: 0;
    `

    const Li = styled.li`
    float: left;
    padding: 0 10px;
    `
    return (
        <List>
          <Li>유튜버사진1</Li>
          <Li>유튜버1</Li>
          <Li>더 프로틴 웍스</Li>
          <Li>미트리</Li>
        </List>
    )
}