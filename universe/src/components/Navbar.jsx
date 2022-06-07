import React from 'react'
import styled from "styled-components"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height:60px;
 
`
const Wrapper = styled.div`
 padding:10px 20px;
 align-items:center;
 display:flex;
 justify-content:space-between;

`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Language = styled.span`
cursor:pointer;
font-size:14px;
`
const SearchContainer = styled.div`
display:flex;
align-items:center;
border:0.5px solid gray;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
`
const Logo = styled.h1`
font-size:bold;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                <Input/>
                <SearchOutlinedIcon style={{color:"gray", fontSize:20}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>UniversalStore</Logo>
            </Center>
            <Right>
              <MenuItem>Register</MenuItem>  
              <MenuItem>SignIn</MenuItem>
              <MenuItem>
              <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
              </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar