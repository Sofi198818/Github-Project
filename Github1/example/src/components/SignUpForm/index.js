import { useState } from "react";
import { signUpUser } from "../../api/auth";
import styles from "./SignUpForm.module.css";
import { useHistory } from "react-router-dom";
import ROUTES from "../../constants/routes";

function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });
  const history = useHistory();

  function handleSignUp(e) {
    e.preventDefault();
    signUpUser(user)
      .then(() => history.push(ROUTES.PAGE_SIGN_IN, { success: true }))
      .catch((e) => console.log(e.message));
  }

  return (
    <form className={styles.signUp}>
      <ion-icon name="logo-github"></ion-icon>
      <label htmlFor="username">
        Username
        <input
          value={user.username}
          type="text"
          id="username"
          name="username"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </label>
      <label htmlFor="firstName">
        First Name
        <input
          value={user.firstName}
          type="text"
          id="firstName"
          name="firstName"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </label>
      <label htmlFor="lastName">
        Last Name
        <input
          value={user.lastName}
          type="text"
          id="lastName"
          name="lastName"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          value={user.email}
          type="email"
          id="email"
          name="email"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </label>
      <label htmlFor="birthDate">
        Birth Date
        <input
          value={user.birthDate}
          type="date"
          id="birthDate"
          name="birthDate"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          value={user.password}
          type="password"
          id="password"
          name="password"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </label>

      <button type="submit" onClick={handleSignUp}>
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
