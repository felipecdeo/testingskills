import React from 'react'
import {Header, HeaderLogo, HeaderBar, HeaderBarButton, HeaderBarOption} from './Header.styles'


export default props => {
  return(
  <Header>
    <HeaderLogo> Relvise </HeaderLogo>
    <HeaderBar>
      <HeaderBarOption href="#"> Home </HeaderBarOption>
      <HeaderBarOption href="#"> Product </HeaderBarOption>
      <HeaderBarOption href="#"> Pricing </HeaderBarOption>
      <HeaderBarOption href="#"> Contact </HeaderBarOption>
      <HeaderBarButton primary></HeaderBarButton>
      <HeaderBarButton secondary></HeaderBarButton>
      <HeaderBarButton third></HeaderBarButton>
    </HeaderBar>
  </Header>
  )
}
