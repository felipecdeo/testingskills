import styled , {css} from 'styled-components'

export const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 510px;
  z-index: 111;
  margin-left: 10px;
`

export const HeroText = styled.p`
  color: white;
  
  ${props => [
    props.primary && 
    css`
      font-size: 58px;
      font-weight: bold;
      margin-bottom: 0;
    `,
    props.secondary && 
    css`
      width: 400px;
      font-size: 20px;
      margin-top: 0;
      line-height: 35px;
    `
  ]
  }
`
