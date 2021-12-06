import React from 'react'
import styled from "styled-components"
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
        <Container>
        <Heading>
            <h1>Follow Us On Social Media
            For Daily Updates!</h1>
        </Heading>
        <Icons>
            <FB>
                <FaFacebook />
            </FB>

            <Insta>
                <FaInstagramSquare />
            </Insta>

            <Twitter>
                <FaTwitterSquare />
            </Twitter>

            <Linkedin>
                <FaLinkedin />
            </Linkedin>
        </Icons>
            
            <NewSection>
                <Left>
                    <img src="../images/location.png" />
                </Left>

                <Right>
                    <Details>
                        <h1>Contact Us</h1>
                        <p>178, Sector-17, CHANDIGARH, 160003</p>
                        <p>houseoftaste@gmail.com</p>
                        <p>01234-56789</p>
                    </Details>
                </Right>
            </NewSection>

        </Container>
    )
}

export default Footer

const Container = styled.div`
    
`

const Heading = styled.div`
    h1{
        position: relative;
        font-size: 60px;
        font-weight: bold;
        text-align: center;
        font-family: 'Mate SC', serif;
    }
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
`

const FB = styled.div`
    font-size: 50px;
    margin-right: 10px;
    &:hover{
        cursor: pointer;
        transition: transform 0.5s ease;
        transform: scale(1.1);
    }
`

const Insta = styled.div`
    font-size: 50px;
    margin-right: 10px;
    &:hover{
        cursor: pointer;
        transition: transform 0.5s ease;
        transform: scale(1.1);
    }
`

const Twitter = styled.div`
    font-size: 50px;
    margin-right: 10px;
    &:hover{
        cursor: pointer;
        transition: transform 0.5s ease;
        transform: scale(1.1);
    }
`

const Linkedin = styled.div`
    font-size: 50px;
    margin-right: 10px;
    &:hover{
        cursor: pointer;
        transition: transform 0.5s ease;
        transform: scale(1.1);
    }
`

const NewSection = styled.div`
    margin-top: 20px; 
    display: flex;
    
    
`

const Left = styled.div`
    img{
        width: 800px;
        height: 300px;
    }
`

const Right = styled.div`
    background-color: black;
    width: 100%;
`

const Details = styled.div`
    h1,p{
        margin-top: 30px;
        margin-left: 15px;
        display: flex;
        justify-content: center;
    }
    h1{
        color: #FF8802;
        font-family: 'Pattaya', sans-serif;
    }
    p{
        color: white;
        font-family: 'Reggae One', cursive;
    }

`