import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

function Schemes() {
    return (
        <Container>
            <Background>
            <Materials>
                <Main>
                    <Link to='/menu'>
                        <img src="../images/main-course.jpg"></img>
                    </Link>
                </Main>

                <Combo>
                    <Link to='/menu'>
                        <img src="../images/combo-meals.png" />
                    </Link>
                </Combo>

                <Shakes>
                    <Link to='/menu'>
                        <img src="../images/shakes.jpg" />
                    </Link>
                </Shakes>

                <Dessert>
                    <Link to='/menu'>
                        <img src="../images/dessert.png" />
                    </Link>
                </Dessert>
                </Materials>    
            </Background>
            
        </Container>
    )
}

export default Schemes

const Container = styled.div`
`

const Background = styled.div`
    z-index: -10;
    background: black;
    width: 100%;
    height: 300px;
`


const Materials = styled.div`
    display: grid;
    grid-template-areas: 'Main Combo Shakes Dessert';
    text-align: center;
    cursor: pointer;
`

const Main = styled.div`
margin-top: 80px;
img{
    border-radius: 50px;
    width: 150px;
    height: 150px;
    
    &:hover {
        transition: transform 1s ease ;
        transform: translateY(-20px);
        border: 5px solid rgb(131,58,180);
    }
}
   
`

const Combo = styled.div`
margin-top: 80px;
    img{
        border-radius: 50px;
        width: 150px;
        height: 150px;

        &:hover {
        transition: transform 1s ease ;
        transform: translateY(-20px);
        border: 5px solid rgb(131,58,180);
    }
}
`

const Shakes = styled.div`
margin-top: 80px;
    img{
        border-radius: 50px;
        width: 150px;
        height: 150px;

        &:hover {
        transition: transform 1s ease ;
        transform: translateY(-20px);
        border: 5px solid rgb(131,58,180);
    }
}
`

const Dessert = styled.div`
margin-top: 80px;
    img{
        border-radius: 50px;
        width: 150px;
        height: 150px;

        &:hover {
        transition: transform 1s ease ;
        transform: translateY(-20px);
        border: 5px solid rgb(131,58,180);
    }
}
`