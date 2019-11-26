import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/1.jpeg";
import image2 from "assets/img/2.jpeg";
import image3 from "assets/img/3.jpeg";
import image4 from "assets/img/4.jpeg";
import image5 from "assets/img/5.jpeg";
import image6 from "assets/img/6.jpg";

export default function SectionCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} l={8} >
        <Card>
          <Carousel {...settings}>
          <div>
              <img src={image6} alt="First slide" className="slick-image"  style={{height:"85vh"}} />
              {/* <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Yellowstone National Park, United States
                </h4>
              </div> */}
            </div>
            <div>
              <img src={image2} alt="First slide" className="slick-image"  style={{height:"85vh"}} />
              {/* <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Yellowstone National Park, United States
                </h4>
              </div> */}
            </div>
            
            
            <div>
              <img src={image3} alt="First slide" className="slick-image"  style={{height:"85vh"}} />
              {/* <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Yellowstone National Park, United States
                </h4>
              </div> */}
            </div>
            <div>
              <img src={image4} alt="First slide" className="slick-image"  style={{height:"85vh"}} />
              {/* <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Yellowstone National Park, United States
                </h4>
              </div> */}
            </div>
            <div>
              <img src={image5} alt="First slide" className="slick-image"  style={{height:"85vh"}} />
              {/* <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Yellowstone National Park, United States
                </h4>
              </div> */}
            </div>
            <div>
              <img src={image1} alt="First slide" className="slick-image"  style={{height:"85vh"}} />
              {/* <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Yellowstone National Park, United States
                </h4>
              </div> */}
            </div>
          </Carousel>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
