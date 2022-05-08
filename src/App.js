import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';


function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette', favColor: 'Red'},
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon', favColor: 'Blue' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere', favColor: 'Black' },
  ]

  //state
  const [users, setUsers] = useState(usersData);

  // Funcion Agregar usuario
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUSer = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  //Editar usuario

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: '', favColor:''
  });

  const editRow = (user) => {
    setEditing(true); //cambia el form
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      favColor: user.favColor
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )

          }

        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUSer={deleteUSer}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
