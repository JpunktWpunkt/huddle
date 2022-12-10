import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: space-between;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 0.5em 0;
  padding: 1em;
  flex-direction:  ${({ layout}) => layout || 'row'};

  @media(max-width: ${({theme }) => theme.mobile}) {
   display: flex;
    flex-direction: column-reverse;
    margin:20px 0;
    padding: 0 15px 40px 15px;
    flex-flow: row wrap;
    align-items: center;
  }
`

export const Content = styled.div`
  width: auto;
  height: auto;
  @media(max-width: ${({theme }) => theme.mobile}) {
    order: 2;
  }
    `

export const ImgWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  @media(max-width: ${({theme}) => theme.mobile}) {
    order: 1;
  }
  @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    display: flex;
    align-items: center;
    img {
      width: 440px;
    }
  }

`