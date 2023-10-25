import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom/dist";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <br />
        <Link to={"/contacts/list"} style={styles.button}>
          LOGIN
        </Link>
        <br /> <br />
        don't have an account? click<Link to={"/registration"}>{"  "}here</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  form: {
    border: "1px solid #ccc",
    padding: "30px",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    width: "300px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
  formGroup: {
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default LoginForm;
