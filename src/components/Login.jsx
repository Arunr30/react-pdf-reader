import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: "30px",
          borderRadius: "10px",
          width: "260px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#3f51b5" }}>PDF Editor</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <button
          onClick={() => login(username, password)}
          style={{
            width: "100%",
            padding: "8px",
            background: "#3f51b5",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
