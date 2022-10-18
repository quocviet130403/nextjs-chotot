import React from 'react'
import Banner from './Banner/Banner'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import ListFeature from './ListFeature/ListFeature'
import ListCategories from './ListCategories/ListCategories'
import ListProducts from './ListProducts/ListProducts'
import Footer from '../../components/Footer/Footer'

export default function HomeComponent() {
  return (
    <div className='container'>
      <Header />
      <Banner />
      <ListFeature />
      <ListCategories />
      <ListProducts />
      <Menu />
      <Footer />
    </div>
  )
}
