import React from 'react'
import styled from "styled-components"
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Home = () => {
    return (
        <Container>
            <Background>
                <img src="../images/bg-bg-bg.jpg"></img>
            </Background>

            <Navbar>
                <Image>
                    <img src="../images/logo1.png"></img>
                </Image>
                <NavMenu1>
                    <a><span>HOME</span></a>
                    <a><span>SERVICE</span></a>
                    <a><span>ABOUT</span></a>
                    <a><span>GALLERY</span></a>
                    <a><span>BLOG</span></a>
                    <a><span>CONTACT</span></a>
                </NavMenu1>
            </Navbar>

            <Content>
                <h1>HOUSE OF TASTE</h1>
                {/* <p>~~People disappoint. House Of Taste never does.</p> */}
            </Content>

            <Last>
               <a> <IoIosArrowDropdownCircle /> </a>
            </Last>

        </Container>
    )
}

export default Home


const Container = styled.div`

`;

const Background = styled.div`
    img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover no-repeat fixed;
        z-index: -1;
    }
`;

const Navbar = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr;
    color: white;
    font-weight: bold;
`;

const Image = styled.div`
    
    img{
        height: 150px;
        width: 150px;
        margin: 5px 80px; 
        border-radius: 50%;
    }
`;


const NavMenu1 = styled.div`
margin-top: 2rem;
a{
    span{
        margin: 0 15px;
        position: relative;
        cursor: pointer;

        &:after {
            content: "";
            height: 2px;
            background: white;
            left: 0;
            right: 0;
            bottom: -6px;
            position: absolute;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }

        
    }

    &:hover {
        color: #FF8132;
        span:after{
            transform: scaleX(1);
            opacity: 1;
            
        }
    }

}
`;

const Content = styled.div`
    color: #C5100B;
    margin: 5px 22rem;
    font-size: 25px;
    font-family: 'Reggae One', cursive;

    h1{
        text-shadow: 2px 4px 2px #FF0000;
        margin-top: -80px;
        margin-left: 30px;
    }

    p{
        width: 250px;
        font-size: 23px;
        margin-top: -10px;
        margin-left: 50px;
        text-shadow: 2px 2px 2px #f50000;
        font-family: 'Caveat', cursive;
        color: #f50000;
    }
`;

const Last = styled.div`
    font-size: 45px;
    color: white;
    margin-top: 120px;
    a{
        border-radius: 50px;
        padding: 5px 5px;
        margin: 0 600px;
        cursor: pointer;
`;