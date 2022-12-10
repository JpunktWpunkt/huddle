import React from 'react';
import {StyledCard, Content, ImgWrapper} from "./styles/Card.styled";

const Card = ({item:{id, title, body, image} }) => {
    return (
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
               <Content>
                <h2>{title}</h2>
                <p>{body}</p>
               </Content>
            <ImgWrapper>
                <img src={`./images/${image}`} alt="" />
            </ImgWrapper>
        </StyledCard>
    );
}

export default Card;

