import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TodoApp.css";
function LoginPage() {
  const [username, setUsername] = useState("Jack");
  const [password, setPassword] = useState("dummy");
  const [showPassword, setShowPassword] = useState(false);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (username.toLocaleLowerCase() === "jack" && password === "dummy") {
      setShowSuccessMessage(true);
      navigate("/welcome");
      setShowErrorMessage(false);
    } else {
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }
  return (
    <div>
      {showSuccessMessage && (
        <div className="successMessage">Authenticated Successfully!</div>
      )}
      {showErrorMessage && (
        <div className="errorMessage">
          Authenticated Failed! Please check your credentials!
        </div>
      )}

      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            id="username"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <button type="button" onClick={(e) => setShowPassword((e) => !e)}>
            {showPassword ? "hide" : "show"}
          </button>
        </div>
        <button type="submit" name="login">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
