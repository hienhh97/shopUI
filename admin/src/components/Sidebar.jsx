import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material';
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
const SidebarList =styled.ul`
  list-style: none;
  padding: 5px;
`;
const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  .active,
  .sidebarListItem:hover {
    background-color: rgb(240, 240, 255);
  };
  .sidebarIcon{
      margin-right: 5px;
      font-size: 20px !important;
  }
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <Link to="/" className="link">
            <SidebarListItem active>
              <LineStyle className="sidebarIcon" />
              Home
            </SidebarListItem>
            </Link>
            <SidebarListItem>
              <Timeline className="sidebarIcon" />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp className="sidebarIcon" />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
            <Link to="/users" className="link">
              <SidebarListItem>
                <PermIdentity className="sidebarIcon" />
                Users
              </SidebarListItem>
            </Link>
            <Link to="/products" className="link">
              <SidebarListItem>
                <Storefront className="sidebarIcon" />
                Products
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <AttachMoney className="sidebarIcon" />
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <BarChart className="sidebarIcon" />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MailOutline className="sidebarIcon" />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Staff</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <WorkOutline className="sidebarIcon" />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <Timeline className="sidebarIcon" />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Report className="sidebarIcon" />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}