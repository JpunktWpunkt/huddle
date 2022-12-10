import styled from "styled-components";

export const StyledSocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
  }
  a {
    border: 1px solid  ${({ theme }) => theme.colors.body};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.body};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }

  & a:hover {
    opacity: 0.5;
    transform: scale(0.98);
    color: ${({ theme }) => theme.colors.button};
    border: 1px solid ${({ theme }) => theme.colors.button};
  }
`