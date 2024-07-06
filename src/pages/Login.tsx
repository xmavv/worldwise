import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import PageNav from "../components/PageNav.tsx";
import { useAuth } from "../contexts/FakeAuthContext.tsx";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.tsx";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("essa@example.com");
  const [password, setPassword] = useState("qwerty");

  useEffect(
    //ten efekt tutaj jest po to zeby, gdy user jest zalogowany a kliknie
    // login to od razu go przeniesie do strony /app
    //gdyby funkcja navigate byla tam w handlowaniu no to za kazdym razem
    // trzebaby bylo wciskac ten przycisk
    // i to tez glupie wlasnie dorbze ze jest ten effect
    // bo wowczas za kazdym razem bylaby wywolywana funkcja login
    // a w prawdziwym swiecie robilibysmy call do api wiec niepotrzebny
    // request http bylby wyslany

    function () {
      //nie wiem co robi to replace w sensie no musze zobaczyc
      if (isAuthenticated === true) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate],
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
