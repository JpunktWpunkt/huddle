import styled from "styled-components";

export const CtaStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 800px;
  height: 280px;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  
  @media(max-width: ${({theme }) => theme.mobile}) {
    flex-direction: column;
    width: auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 1em 1em 1em 3em;
    height: 11em;
  }
`