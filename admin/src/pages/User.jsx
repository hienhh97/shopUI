import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from '@mui/icons-material';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const UserRoot= styled.div`
  flex: 4;
  padding: 20px;
`;

const UserTitleContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const UserAddButton=styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
`;
const UserContainer=styled.div`
    display: flex;
    margin-top: 20px;
`;
const UserShow=styled.div`
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserUpdate=styled.div`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-left: 20px;
`;
const UserShowTop=styled.div`
    display: flex;
    align-items: center;
`;
const UserShowImg=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;
const UserShowTopTitle=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;
const UserShowUsername=styled.span`
    font-weight: 600;
`;
const UserShowUserTitle=styled.span`
    font-weight: 300;
`;
const UserShowBottom=styled.div`
      margin-top: 20px;
`;
const UserShowTitle=styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`;
const UserShowInfo=styled.div`
      display: flex;
      align-items: center;
      margin: 20px 0px;
      color: #444;
      .userShowIcon{
        font-size: 16px !important;
      };
      .userShowInfoTitle{
        margin-left: 10px;
      };
`;
const UserUpdateTitle=styled.span`
      font-size: 24px;
      font-weight: 600;
`;
const UserUpdateForm=styled.form`
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .label{
        margin-bottom: 5px;
        font-size: 14px;
      }
`;
const UserUpdateInput=styled.div`
      border: none;
      width: 250px;
      height: 30px;
      border-bottom: 1px solid gray;

`;
const UserUpdateRight=styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
`;
const UserUpdateUpload=styled.div`
      display: flex;
      align-items: center;
`;
const UserUpdateImg=styled.div`
      width: 100px;
      height: 100px;
      border-radius: 10px;
      object-fit: cover;
      margin-right: 20px;
`;
const UserUpdateButton=styled.button`
      border-radius: 5px;
      border: none;
      padding: 5px;
      cursor: pointer;
      background-color: darkblue;
      color: white;
      font-weight: 600;
`;
  
  export default function User() {
    return (
      <UserRoot>
        <UserTitleContainer>
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <UserAddButton>Create</UserAddButton>
          </Link>
        </UserTitleContainer>
        <UserContainer>
          <UserShow>
            <UserShowTop>
              <UserShowImg
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <UserShowTopTitle>
                <UserShowUsername>Anna Becker</UserShowUsername>
                <UserShowUserTitle>Software Engineer</UserShowUserTitle>
              </UserShowTopTitle>
            </UserShowTop>
            <UserShowBottom>
              <UserShowTitle>Account Details</UserShowTitle>
              <UserShowInfo>
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99</span>
              </UserShowInfo>
              <UserShowInfo>
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">10.12.1999</span>
              </UserShowInfo>
              <UserShowTitle>Contact Details</UserShowTitle>
              <UserShowInfo>
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+1 123 456 67</span>
              </UserShowInfo>
              <UserShowInfo>
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </UserShowInfo>
              <UserShowInfo>
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">New York | USA</span>
              </UserShowInfo>
            </UserShowBottom>
          </UserShow>
          <UserUpdate>
            <UserUpdateTitle>Edit</UserUpdateTitle>
            <UserUpdateForm>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <UserUpdateInput
                    type="text"
                    placeholder="annabeck99"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <UserUpdateInput
                    type="text"
                    placeholder="Anna Becker"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <UserUpdateInput
                    type="text"
                    placeholder="annabeck99@gmail.com"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <UserUpdateInput
                    type="text"
                    placeholder="+1 123 456 67"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <UserUpdateInput
                    type="text"
                    placeholder="New York | USA"

                  />
                </div>
              </div>
              <UserUpdateRight>
                <UserUpdateUpload>
                  <UserUpdateImg
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish>
                      <style>
                        cursor: pointer;
                      </style>
                    </Publish>
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </UserUpdateUpload>
                <UserUpdateButton>Update</UserUpdateButton>
              </UserUpdateRight>
            </UserUpdateForm>
          </UserUpdate>
        </UserContainer>
      </UserRoot>
    );
  }