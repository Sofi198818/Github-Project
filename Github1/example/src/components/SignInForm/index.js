import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./SignInForm.module.css";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();
    login(username, password);
  }

  return (
    <form className={styles.signIn}>
      <ion-icon name="logo-github"></ion-icon>
      <label htmlFor="username">
        Username
        <input
          value={username}
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          value={password}
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleSignIn}>
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
