import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "admin123") {
            setError("");
            //alert("Login Successful!");
            navigate("/dashboard");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="login-container">

            <div className="login-card">

                <div className="login-header">
                    <h1>Employee Management</h1>
                    <p>Sign in to your account</p>
                </div>

                <form onSubmit={handleLogin}>

                    <div className="form-group">
                        <label>Username</label>

                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <p className="error-message">
                            {error}
                        </p>
                    )}

                    <button type="submit" className="login-button">
                        Login
                    </button>

                </form>

                <div className="login-footer">
                    <p>Employee Management System</p>
                </div>

            </div>

        </div>
    );
}

export default Login;