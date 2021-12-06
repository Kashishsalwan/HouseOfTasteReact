import React from 'react'
import styled from "styled-components"

const Story = () => {
    return (
        <Container>
            <Background></Background>
            <Content>
                <Left>
                    <img src="../images/our-moto.jpg"></img>
                </Left>
                <Right>
                    <div>
                        <h1 className="discover">Discover {'->'} </h1>  
                        <h1 className="story">OUR STORY</h1>
                        <p>
                            As we know about the pandemic going on,
                            our motto is to provide you all, the best,
                            healthy and hygienic food. We'll take care 
                            that food is prepared under proper hygiene 
                            and is rich in nutrition by using organic 
                            food materials only.
                            Give us your trust and we will never disappoint you.
                        </p>
                    </div>
                </Right>
            </Content>
        </Container>
    )
}

export default Story;

const Container = styled.div`
    color: black;
    margin-top: 150px;
`;

const Background = styled.div`
    position: absolute;
    background-color: black;
    height: 500px;
    width: 100%;
    z-index: -1;
`;

const Content = styled.div`
    position: absolute;
    color: white;
    display: grid;
    grid-template-areas: 'left right';
    heigth: 350px;
    width: 800px;
    padding: 25px 0;
    margin: 66px 16%;
`;

const Left = styled.div`
    grid-area: left;
    border: 3px solid black;
    img{
        height: 295px;
        width: 300px;
    }
`;

const Right = styled.div`
    grid-area: right;

    div{
        position: relative;
        z-index: -1;
        height: 300px;
        width: 500px;
        background-color: white;

        h1{
            position: absolute;
            color: black;
            margin: 20px 0 0 100px;
        }

        .story{
            font-family: 'Girassol', cursive;
            margin-top: 50px;
        }

        .discover{
            font-family: 'Caveat', cursive;
            font-size: 25px;
            color: #FF6A00;
        }

        p{
            font-family: 'Pangolin', cursive;
            position: absolute;
            color: black;
            margin: 130px 0 0 50px;

            span{
                font-weight: bold;
            }
        }
    }
`;