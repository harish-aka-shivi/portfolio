import styled from 'styled-components'

const Button = styled.button`
  // background: ${props => props.theme.colors.primary};
  background:${props => props.theme.colors.white};
  border: none;
  display: inline-flex;
  align-items: center;
  border-radius: ${props => (props.big ? '1.5rem' : '1rem')};
  font-size: ${props => (props.big ? '1.2rem' : '1rem')};
  color: ${props => props.theme.colors.white};
  padding: ${props => (props.big ? '0.5rem 0.5rem' : '0.35rem 0.35rem')};
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin:1rem;
  &:hover {
    //background: ${props => props.theme.colors.primaryLight};
    cursor: pointer;
    transform: translateY(-2px);
  }
  &:focus {
    outline: none;
  }
  svg {
    width: 30px;
    height: 30px;
    //margin-right: 0.75rem;
    //fill: ${props => props.theme.colors.white};
    fill:${props => props.iconColor}
  }
`

export default Button
