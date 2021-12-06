import React from 'react'
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

   function ImgSlider() {

    let settings = {
        
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="../images/s1.jpg"></img>
            </Wrap>

            <Wrap>
                <img src="../images/s2.jpg"></img>
            </Wrap>

            <Wrap>
                <img src="../images/s3.jpg"></img>
            </Wrap>

            <Wrap>
                <img src="../images/s4.jpg"></img>
            </Wrap>

            <Wrap>
                <img src="../images/s5.jpg"></img>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider



const Carousel = styled(Slider)`

    margin-top: 650px;
    background-color: black;

    .slick-list{
        overflow: visible;
    }
`;
const Wrap = styled.div`
    img{
        
        height: 500px;
        width: 100%;
        object-fit: contain;
    }
    
`;