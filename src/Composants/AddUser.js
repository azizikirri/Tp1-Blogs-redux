import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../Component/actions";
import { useNavigate } from "react-router-dom";

function AddUser() {
    const count = useSelector(data => data.users.length);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            addUserAction({
                id: count + 1,
                name: name,
                email: email,
            })
        );
        navigate("/");
    };

    return (
        <form action="">
            <label htmlFor="">Name :</label>
            <input
                type="text"
                style={inputStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="">Em@il :</label>
            <input
                type="email"
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

export default AddUser;
