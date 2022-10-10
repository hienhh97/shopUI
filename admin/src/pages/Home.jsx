import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import styled from "styled-components";
import { userData } from "../dummyData";
import WidgetSm from "../components/widgetSm/WidgetSm";
import WidgetLg from "../components/widgetLg/WidgetLg";

const Container = styled.div`
  flex: 4;
`

const HomeWidgets=styled.div`
    display: flex;
    margin: 20px;
`

export default function Home() {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <HomeWidgets>
        <WidgetSm/>
        <WidgetLg/>
      </HomeWidgets>
    </Container>
  );
}