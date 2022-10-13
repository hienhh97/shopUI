import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteForever, Edit } from '@mui/icons-material';
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserListContainer = styled.div`
  flex: 4;
`;
const UserListUser = styled.div`
  display: flex;
  align-items: center;
`;
const UserListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const UserListEdit = styled(Edit)`
  border: none;
  border-radius: 10px;
  padding: 3px 5px;
  //background-color: #3bb077;
  color: blueviolet;
  cursor: pointer;
  margin-right: 20px;
`;
const DeleteIcon = styled(DeleteForever)`
  margin-bottom: 2px;
  padding: 5px 5px;
  color: red;
  cursor: pointer;
`

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <UserListUser>
            <UserListImg src={params.row.avatar} alt="" />
            {params.row.username}
          </UserListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <UserListEdit>Edit</UserListEdit>
            </Link>
            <DeleteIcon onClick={() => handleDelete(params.row.id)}/>
          </>
        );
      },
    },
  ];

  return (
    <UserListContainer>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </UserListContainer>
  );
}