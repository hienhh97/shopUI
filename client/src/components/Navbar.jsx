import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: #82E0AA;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>VIE</Language>
            <SearchContainer>
              <Input placeholder="Tìm kiếm" />
              <SearchIcon style={ {color: "gray", fontSize: 16}}/>
            </SearchContainer>
          </Left>
          <Center>
            <Logo>SHOP DEMO
            </Logo>
          </Center>
          <Right>
            <MenuItem>ĐĂNG KÝ</MenuItem>
            <MenuItem>ĐĂNG NHẬP</MenuItem>
            <MenuItem>
          </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar