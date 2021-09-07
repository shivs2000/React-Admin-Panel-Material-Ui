import React from 'react';
import './userlist.css';
import { DataGrid } from '@material-ui/data-grid';
function UserList(props) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 150,
          renderCell:(params)=>{
              return(


                <div className="userListUser">
                    <img className=" userListImg" src={params.row.avatar} alt="" />
                     {params.row.username}
                </div>
              );
          }
         
        },
        {
          field: 'age',
          headerName: 'Age',
          width: 100,
          
        },
        {
          field: 'email',
          headerName: 'Email',
          
          width: 110,
         
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,
            
          },
        {
          field: 'transaction',
          headerName: 'Transactions',
          width: 150,
        },
      ];
      
      const rows = [
        { id: 1, 
          username:'jon snow' ,
          age: 35,
          avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
          email:'shudah@gmail.com',
          status:'active',
          transaction:'$129.0'
         },
         { id: 2, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 3, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 4, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 5, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 6, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 7, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 8, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 9, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 10, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 11, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 12, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 13, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 14, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 15, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 16, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 17, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
           { id: 18, 
            username:'jon snow' ,
            age: 35,
            avatar:'https://res.cloudinary.com/demo/image/facebook/65646572251.jpg',
            email:'shudah@gmail.com',
            status:'active',
            transaction:'$129.0'
           },
      ];
    return (
        <div className="userList">
         <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    );
}

export default UserList;