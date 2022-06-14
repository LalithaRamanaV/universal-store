import React from 'react'
import styled from "styled-components"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";

const Container = styled.div`
  height:60px;
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
 padding:10px 20px;
 align-items:center;
 display:flex;
 justify-content:space-between;
 ${mobile({ padding: "10px 0px" })}
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
${mobile({ flex: 2, justifyContent: "center" })}
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Language = styled.span`
cursor:pointer;
font-size:14px;
${mobile({ display: "none" })}
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
${mobile({ width: "50px" })}
`
const Logo = styled.h1`
font-size:bold;
${mobile({ fontSize: "24px" })}
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
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