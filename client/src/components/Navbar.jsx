import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined, NotificationsActive } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 60px;
    background-color: #82E0AA;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 700;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>VIE</Language>
          <SearchContainer>
            <Input placeholder="Tìm kiếm" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={'/'}>
            <Logo>SHOP DEMO</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <NotificationsActive />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Link to={'/cart'}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
          <Link to={`/register`}>
            <MenuItem >ĐĂNG KÝ</MenuItem>
          </Link>
          <Link to={`/login`}>
            <MenuItem >ĐĂNG NHẬP</MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;