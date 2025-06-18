import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import VantaBackground from '../components/VantaBackground'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
      <VantaBackground />
      <Header/>
      <main>{children}</main> 
      <Footer/>
    </Container>
  )
}
