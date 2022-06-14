import React from 'react'
import styled from "styled-components"

const Container = styled.div`
height:30px;
background-color:black;
color:white;
align-items:center;
justify-content:center;
display:flex;
font-size:15px;
font-weight:500;
`

const Announcement = () => {
  return (
    <Container>
     Great Deal! Free shipping on orders over 1000Rs
    </Container>
  )
}

export default Announcement