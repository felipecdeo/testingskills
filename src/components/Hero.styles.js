import styled , {css} from 'styled-components'

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  position: relative;
  width: 510px;
  z-index: 111;
  margin-top: -60px;
`

export const HeroText = styled.p`
  color: white;
  
  ${props => [
    props.primary && 
    css`
      font-size: 58px;
      font-weight: bold;
      margin-bottom: -35px;
    `,
    props.secondary && 
    css`
      font-size: 20px;
      line-height: 35px;
      margin-top: 0;
      width: 400px;
    `
    ]
  }
`

export const HeroInteractive = styled.div`
  flex-direction: row;
  display: flex;
`

export const HeroButton = styled.button`
  border-radius: 35px;
  color: white;
  font-weight: bold;
  height: 50px;
  max-width: 200px;
  padding: 10px 35px;

  ${props => [
    props.primary &&
    css`
      background-color: #FF7B47;
      border: none;
      margin-right: 10px;
    `,
    props.secondary &&
    css`
      background: transparent;
      border: solid white 1px;
    `
    ]
  }
`

export const HeroFeatures = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  margin: 80px auto 0;
  z-index: 112;
`

export const HeroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 35px 40px;
  width: 290px;
  min-height: 200px;
  margin: 0 15px;

  ${props => 
    props.diff && 
    css `
      background-color: #0D5C63;
    `
  }
`

export const HeroBoxIcon = styled.svg`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`

export const HeroBoxContent = styled.p`
  ${props => [
    props.primary &&
    css `
      color: #252B42;
      font-size: 24px;
      margin-bottom: 10px;
      margin-top: 0px;
      width: 250px
    `,
    props.diff &&
    css`
      color: white;
    `,
    props.secondary &&
    css`
      color: #737373;
      font-size: 14px;
      margin-top: 0;
      width: 250px;
    `,
    props.diff &&
    css`
      color: white;
    `
    ]
  }
`
