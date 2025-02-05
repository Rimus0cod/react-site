import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import Img1 from '../assets/1.jpg'
import Img2 from '../assets/2.jpg'

export default class slider extends Component {
  render() {
    return (
      <Carousel>
          <Carousel.Item>
            <img 
              className='d-block w-100 h-60'
              src={Img1}
              alt="Mount"
            />
            <Carousel.Caption>
              <h3>Mount image</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolorem?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className='d-block w-100 h-60'
              src={Img2}
              alt="Sakura"
            />
            <Carousel.Caption>
              <h3>Sakura image</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolorem?</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    )
  }
}
