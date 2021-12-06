import React from 'react'
import styled from "styled-components"

function Reviews() {
    return (
        <Container>
            <Background>
                <img src = "../images/reviews-bg.jpg" />
            </Background>
            <Section>
                <First>
                    <Content>
                        <img src="../images/avatar-1.png" />
                        
                        <h4>"They are doing great work by providing
                        service in this time with best food quality.
                        In love with their food."</h4>
                        <h6>~~JOKER</h6>
                    </Content>
                </First>

                <Second>
                    <Content>
                        <img src="../images/harley.jpg" />
                        <h4>"The food was good in taste 
                        and it was delivered with
                        good packaging.Loved Paneer Combo."</h4>
                        <h6>~~HARLEY</h6>
                    </Content>
                </Second>

                <Third>
                    <Content>
                        <img src="../images/batman.png" />
                        <h4>"I really thank them for providing
                        me food in this time. Shakes were
                        really Awesome. 5 star for the food!"</h4>
                        <h6>~~BATMAN</h6>
                    </Content>
                </Third>
            </Section>
        </Container>
    )
}

export default Reviews

const Container = styled.div`
`
const Background = styled.div`
    position: absolute;
    img{
        width: 100%;
        height: 400px;
        z-index: -1;
    }
`

const Section = styled.div`
    position: relative;
    display: grid;
    grid-template-areas: 'First Second Third';
`

const First = styled.div``

const Content = styled.div`
    opacity: 0.8;
    width: 270px;
    height: 340px;
    background-color: rgb(233,200,255);
    margin: 30px 50px;
    border-radius: 0% 21% 0% 20% / 10% 21% 13% 24%;
    img{
        width: 100px;
        height: 100px;
        margin-top: 20px;
        margin-left: 80px;
        border-radius: 50px;
        
        
    }

    &:hover{
            opacity: 2;
            cursor: pointer;
            transition: transform 1s ease;
            transform: scale(1.1);
        }

    h4{
        font-weight: bold;
        margin-top: 30px;
        font-family: 'Dancing Script', cursive;
        font-size: 21px;
        text-align: center;
    }

    h6{
        font-family: 'Anton', sans-serif;
        margin-top: 15px;
        margin-left: 160px;
    }
`

const Second = styled.div``

const Third = styled.div``