import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
`;

const Announcement = () => {
  return <Container>Đón chờ chương trình giảm giá lên tới 60% vào Black Friday này!</Container>;
};

export default Announcement;
