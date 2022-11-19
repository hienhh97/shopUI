import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { Link } from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const LinkTo = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("/auth/register", { email, username, password });
      alert("Tạo tài khoản thành công! Vui lòng chuyển sang trang đăng nhập!")
      console.log(res);
    } catch (err) {
      alert("Vui lòng kiểm tra lại thông tin HOẶC có thể tên đăng nhập/ email đã được sử dụng!")
    };
  }
  return (
    <Container>
      <Wrapper>
        <Title>TẠO TÀI KHOẢN MỚI</Title>
        <Form>
          <Input
            placeholder="tên đăng nhập"
            onChange={(e) => setUsername(e.target.value)} />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)} />
          <Input
            placeholder="mật khẩu"
            type="password"
            onChange={(e) => setPassword(e.target.value)} />
          <Input
            placeholder="xác nhận mật khẩu"
            type="password" />
          <Agreement>
            Với việc tạo tài khoản, tôi đồng ý việc xử lý dữ liệu cá nhân
            của mình theo <b> CHÍNH SÁCH BẢO MẬT</b>
          </Agreement>
          <Button onClick={handleClick}>ĐĂNG KÝ</Button>
          <LinkTo >
            <Link to={"/login"} style={{ textDecoration: 'none' }}>
              CHUYỂN TỚI TRANG ĐĂNG NHẬP
            </Link>
          </LinkTo>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;