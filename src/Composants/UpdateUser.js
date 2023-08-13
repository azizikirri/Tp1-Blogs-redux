import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../Component/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UpdateUser() {
    const { id } = useParams();
    const user = useSelector(data => data.users.find(u => u.id === parseInt(id)));
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formStyle = {
        marginTop: "20px",
    };

    const labelStyle = {
        fontWeight: "bold",
        marginRight: "5px",
    };

    const inputStyle = {
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "5px 10px",
        margin: "5px 0",
        width: "30%",
    };

    const buttonStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "10px 20px",
        cursor: "pointer",
    };

    const handleClick = () => {
        dispatch(
            updateUserAction({
                id: id,
                name: name,
                email: email,
            })
        );
        navigate("/");
    };

    return (
        <form style={formStyle}>
            <label htmlFor="name" style={labelStyle}>
                Name:
            </label>
            <input
                type="text"
                id="name"
                style={inputStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="email" style={labelStyle}>
                Email:
            </label>
            <input
                type="email"
                id="email"
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <button style={buttonStyle} onClick={handleClick}>
                Enregistrer
            </button>
        </form>
    );
}

export default UpdateUser;
