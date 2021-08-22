import styled from "styled-components"

const StyledButton = styled.a`
    font-weight: bold;
    border-radius: ${p => p.borderRadius ? p.borderRadius : '8px'};
    background: ${p => p.hollow ? 'transparent' : p.backgroundColor ? p.backgroundColor : p.theme.colors.primaryGradient};
    width: ${p => p.width ? p.width : '100%'};
    height: ${p => p.height};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em ${p => p.noMargin ? '0em' : '0.5em'};
    border: ${p => p.hollow && `2px solid ${p.theme.colors.primary}`};
    color: ${p => p.hollow && p.theme.colors.primary}
`

const Button = ({ link, ...props }) => <StyledButton href={link} {...props} />

export default Button