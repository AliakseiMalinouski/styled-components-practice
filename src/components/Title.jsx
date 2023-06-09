import React from "react"

import styled from "styled-components";

const StyledTitle = styled.h1`
color: ${props => props.color};
text-transform: uppercase;
`

export const Title = (props) => {
    return (
        <StyledTitle {...props}/>
    )
}