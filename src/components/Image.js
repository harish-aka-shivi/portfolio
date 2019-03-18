import styled from 'styled-components'

const Image = styled.img`
  // background: ${props => props.theme.colors.primary};
//   background:${props => props.theme.colors.white};
  border: none;
  height:8rem;
  width:8rem;
  display: inline-flex;
  align-items: center;
  border-radius: 10rem;
  font-size: ${props => (props.big ? '1.2rem' : '1rem')};
  color: ${props => props.theme.colors.white};
  transition: all ${props => props.theme.transitions.normal};
  margin:0.5rem;
//   &:hover {
//     //background: ${props => props.theme.colors.primaryLight};
//     cursor: pointer;
//     transform: translateY(-2px);
//   }
//   &:focus {
//     outline: none;
//   }
//   svg {
//     width: 30px;
//     height: 30px;
//     //margin-right: 0.75rem;
//     //fill: ${props => props.theme.colors.white};
//     fill:${props => props.iconColor}
//   }
`

export default Image;