import React from 'react'
import styled from "styled-components"


function Variety() {
    return (
        <Container>
            <Picture>
                <img src="../images/bg-vv.jpg"></img>
            </Picture>
        </Container>
    )
}

export default Variety

const Container = styled.div`
    margin-top: 0px;
`

const Picture = styled.div`
    img{
        width: 100%;
        height: 295px;
    }
`