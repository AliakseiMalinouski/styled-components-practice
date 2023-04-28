import React from "react";
import styled from "styled-components";

const StyledConsole = styled.textarea`
width:100%;
height:70vh;
background: black;
font-size: 24px;
border: none;
resize: none;
color: ${props => props.color || props.theme.colors.primary};
&:focus {
    outline: none;
}
@media ${props => props.theme.media.phone} {
    border: 1px solid red;
}
@media ${props => props.theme.media.tablet} {
    border: 1px solid green;
}
`

export const Console = (props) => {
    return (
        <StyledConsole {...props}/>
    )
}