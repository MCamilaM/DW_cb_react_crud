import React from "react";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const UserTable = (props) => {
    console.log(props.users);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Favorite color</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                        props.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.favColor}</td>
                                <td>
                                    <button
                                        className="btn btn-info"
                                        onClick={() => { props.editRow(user) }}
                                    >
                                        Edit
                                    </button>
                                    {" "}
                                    <button className="btn btn-danger"
                                        onClick={() => { props.deleteUSer(user.id) }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr colSpan={3}> No users</tr>
                        )
                }
            </tbody>
        </table>
    );
};

export default UserTable;
