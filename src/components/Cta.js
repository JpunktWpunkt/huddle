import React from 'react';
import {CtaStyled} from "./styles/Cta.styled";
import {Button} from "./styles/Button.styled";
import {Flex} from "./styles/Flex.styled";


const Cta = () => {
    return (
        <div>
        <CtaStyled>
            <div>
            <h2> Ready to built Your Community?</h2>
            </div>
                <div>
            <Button
                bg='#ff0099' color='#fff'>
                Get Started For Free
            </Button>
            </div>
        </CtaStyled>
        </div>
    );
}


export default Cta;