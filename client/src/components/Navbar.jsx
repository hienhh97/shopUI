import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined, NotificationsActive, AccountCircle } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 60px;
    background-color: #669999;
    color: white;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 9999;
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
  height: 30px;
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

const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  font-size: 13px;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  ${mobile({ fontSize: "24px" })}
`;

const MenuIcon = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  color: white;
`

const Profile = styled.div`
  padding: 0px 20px;
  .options{
    display: none;
    align-items: center;
  };
  .option{
    padding: 5px;
    cursor: pointer;
    min-width: 80px;
    background-color: white;
    color: black;
    &:hover{
      color: orange;
    }
  }
  &:hover{
      .options {
        display: flex;
        flex-direction: column;
        position: absolute;
      }
    }
`

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Logo >SHOP DEMO</Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Tìm sản phẩm, danh mục,..." />
            <button style={{
              cursor: "pointer",
              width: "110px",
              height: "34px",
            }}>
              <Search style={{ color: "gray", fontSize: 13 }} />
              Tìm kiếm
            </button>
          </SearchContainer>
        </Center>
        <Right>
          <MenuIcon>
            <Badge badgeContent={4} color="primary">
              <NotificationsActive />
            </Badge>
          </MenuIcon>
          <MenuIcon>
            <Link to={'/cart'}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined style={{ color: "white" }} />
              </Badge>
            </Link>
          </MenuIcon>
          <Profile>
            <AccountCircle className="icon" />
            <div className="options">
              <span className='option'>Tài khoản</span>
              <span className='option'>Đăng xuất</span>
            </div>
          </Profile>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;