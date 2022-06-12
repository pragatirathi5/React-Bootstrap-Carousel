import React from "react";
import { Carousel } from 'react-bootstrap';
import imgfirst from "./Images/imgfirst.jpg";
import imgsecond from "./Images/imgsecond.jpg";
import imgthird from "./Images/imgthird.jpg";
import imgfourth from "./Images/imgfourth.jpg";
import imgfifth from "./Images/imgfifth.jpg";

const Main = () => {
return(
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={imgfirst}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Beautiful Nature</h3>
          <p>Immersing yourself in nature is enough to make anybody believe in the divine</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={imgsecond}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Amazing View of Mother Earth</h3>
          <p>Immersing yourself in nature is enough to make anybody believe in the divine</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={imgthird}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Beauty of Nature</h3>
          <p>Immersing yourself in nature is enough to make anybody believe in the divine</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={imgfourth}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Beauty of Mother Earth</h3>
          <p>Immersing yourself in nature is enough to make anybody believe in the divine</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={imgfifth}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Nature – Cheaper than Therapy</h3>
          <p>Immersing yourself in nature is enough to make anybody believe in the divine</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
)
}

export default Main;