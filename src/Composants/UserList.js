import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserAction } from "../Component/actions";

function UserList() {
    const users = useSelector((data) => data.users);
    const dispatch = useDispatch();

    const tableStyle = {
        borderCollapse: "collapse",
        width: "100%",
        marginTop: "20px",
    };

    const tableHeaderStyle = {
        backgroundColor: "#f2f2f2",
        padding: "10px",
        textAlign: "left",
    };

    const tableCellStyle = {
        border: "1px solid #ddd",
        padding: "8px",
    };

    const buttonStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "5px 10px",
        cursor: "pointer",
        marginRight: "5px",
    };

    const handleDelete = (id) => {
        dispatch(deleteUserAction(id));
    };

    return (
        <div>
            <p>
                <Link to="/add-user">
                    <button style={buttonStyle}>Add user</button>
                </Link>
            </p>
            <table style={tableStyle}>
                <thead>
                    <tr style={tableHeaderStyle}>
                        <th style={tableCellStyle}>ID</th>
                        <th style={tableCellStyle}>Name</th>
                        <th style={tableCellStyle}>Email</th>
                        <th style={tableCellStyle}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td style={tableCellStyle}>{user.id}</td>
                            <td style={tableCellStyle}>{user.name}</td>
                            <td style={tableCellStyle}>{user.email}</td>
                            <td style={tableCellStyle}>
                                <Link to={`/update-user/${user.id}`}>
                                    <button style={buttonStyle}>Edit</button>
                                </Link>
                                <button
                                    style={buttonStyle}
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
