import {Container} from "../src/components/styles/Container.styled";
import Header from "../src/components/Header";
import content from "../src/content";
import Card from "../src/components/Card";
import Footer from "../src/components/Footer";
import Cta from "../src/components/Cta";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  position: relative;
  top: 6rem;
`

export default function Home() {


    console.log(content);
    return (
        <>
            <Header/>
            <Container>
                {content.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </Container>
            <Wrapper>
            <Cta />
            </Wrapper>
            <Footer />
        </>
    )
}
