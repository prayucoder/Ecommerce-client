import React, { useEffect } from 'react'
import { Fragment } from 'react'

// .............Components..........
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import MidSlide from './MidSlide'

import { Box } from '@mui/material'
import styled from '@emotion/styled'

import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import MidSection from './MidSection'

const Component = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`

const Home = () => {

  const { products } = useSelector(state => state.getProducts); 

  const dispatch = useDispatch();

  useEffect  (() => {
    dispatch(getProducts());
  },[dispatch]);

  return (
    <Fragment>
        <Navbar/>
        <Component>
            <Banner />
            <MidSlide products={products} title="Deal of the Day" timer={true}/>
            <MidSection />
            <Slide products={products} title="Discounts for You" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selections" timer={false}/>
            <Slide products={products} title="trendings offers" timer={false}/>
            <Slide products={products} title="Season's top picks" timer={false}/>
            <Slide products={products} title="top deals on Accessories" timer={false}/>
            
        </Component>
    </Fragment>
  )
}

export default Home