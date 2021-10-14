import styled from "styled-components"
import useFetch from "../hooks/useFetch";

const Footer1 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

width: 100%;
height: 100px;
float: left;
position: fixed;
left: 0;
bottom: 0;
border-top: 1px solid black;

background-color: #E3DFDF;
`
const ItemLink = styled.a`
// 중앙에 배치
display: flex;
align-items: center;
justify-content: center;

text-decoration: none;
color: black;
`

export default function Footer() {

    const siteName = useFetch(`http://localhost:3001/siteNames`);

    return (
        <Footer1>
            {siteName.map(page => (
                <ItemLink target="blank" href={page.Link} key={page.SiteId}>
                    {page.name} 바로가기
                </ItemLink>
            ))}
        </Footer1>        
    )
}