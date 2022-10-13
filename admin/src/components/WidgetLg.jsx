import styled from "styled-components";

const WidgetLgContainer = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;
const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const WidgetLgTh = styled.th`
  text-align: left;
`;
const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const WidgetLgImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const WidgetLgDate  = styled.td`
  font-weight: 300;
`;
const WidgetLgAmount  = styled.td`
  font-weight: 300;
`;
const WidgetLgButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  .Approved{
    background-color: #e5faf2;
    color: #3bb077;
  };
  .Declined{
    background-color: #fff0f1;
    color: #d95087;
  };
  .Pending{
    background-color: #ebf1fe;
    color: #2a7ade;
    };
`;

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <WidgetLgButton  type>{type}</WidgetLgButton>;
  };
  return (
    <WidgetLgContainer>
      <WidgetLgTitle>Latest transactions</WidgetLgTitle>
      <WidgetLgTable>
        <tr className="widgetLgTr">
          <WidgetLgTh>Customer</WidgetLgTh>
          <WidgetLgTh>Date</WidgetLgTh>
          <WidgetLgTh>Amount</WidgetLgTh>
          <WidgetLgTh>Status</WidgetLgTh>
        </tr>
        <tr className="widgetLgTr">
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <span className="widgetLgName">Susan Carol</span>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgDate>$122.00</WidgetLgDate>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <span className="widgetLgName">Susan Carol</span>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <span className="widgetLgName">Susan Carol</span>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <span className="widgetLgName">Susan Carol</span>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </WidgetLgTable>
    </WidgetLgContainer>
  );
}