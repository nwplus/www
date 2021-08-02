import styled from "styled-components"

const StyledButton = styled.a`
    font-weight: bold;
    border-radius: ${p => p.borderRadius ? p.borderRadius : '8px'};
    background: ${p => p.backgroundColor ? p.backgroundColor : '#20FFAF'};
    width: ${p => p.width ? p.width : '100%'};
    height: ${p => p.height};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em ${p => p.noMargin ? '0em' : '0.5em'};
`

const Button = ({ link, ...props }) => <StyledButton href={link} {...props} />

export default Button